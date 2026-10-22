import weaviate, { WeaviateClient, generateUuid5 } from 'weaviate-ts-client';
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents"
import { VectorStoreRetriever } from "@langchain/core/vectorstores"
import { ASTReader, ASTWriter, CompileResult, DefaultASTWriterMapping, FunctionDefinition, PrettyFormatter } from 'solc-typed-ast';
import { ContractContext, getFunctionDefinitions } from './ast';
import { WeaviateStore } from "@langchain/weaviate"
import { getOpenAIEmbedding } from './openaiWrapper';

const formatter = new PrettyFormatter(4, 0);
const indexName = "Invariants"

type RagContext = {
  vectorDBClient: WeaviateClient,
  splitter: RecursiveCharacterTextSplitter,
  retriever: VectorStoreRetriever<WeaviateStore>,
  vectorDBStore: WeaviateStore
};


async function getRagContext(): Promise<RagContext> {
  let vectorDBClient = await initializeWeaviateSchema();
  let splitter = RecursiveCharacterTextSplitter.fromLanguage("sol", {chunkSize:1000, chunkOverlap:100});
  let embedding = getOpenAIEmbedding()
  let vectorDBStore = new WeaviateStore(embedding, {client: vectorDBClient, indexName: indexName, metadataKeys:["code", "invariant"]})
  let retriever = vectorDBStore.asRetriever(2)
  return {
    vectorDBClient,
    splitter,
    retriever,
    vectorDBStore
  }
}

async function initializeWeaviateSchema() {
    const client: WeaviateClient = weaviate.client({
        scheme: 'http',
        host: 'http://localhost:9400',  // I'm using local docker weaviate client
        headers: { 'X-OpenAI-Api-Key': process.env.OPENAI_API_KEY },  // Replace with your inference API key
      });
      
    if (await client.schema.exists(indexName)) {
        console.log ("Smart Contract Collection Already Exists, Skipping DB Setup...")
    } else {
          const collection = {
              class: indexName,
              description: 'SC contract to invariant list information',  // description of the class
              vectorizer: 'text2vec-openai',
              moduleConfig: {
                  'text2vec-openai': { model: 'ada' },  // Match the query-side OpenAIEmbeddings default (text-embedding-ada-002)
                  'generative-openai': {}  // Set `generative-openai` as the generative module
              },
              properties: [
                {
                  name: 'text', // the code to be vectorized
                  dataType: ['text'],
                  description: 'a piece of the contract under test',
                  moduleConfig: {
                    'text2vec-openai': {  // this must match the vectorizer used
                      vectorizePropertyName: true,
                      tokenization: 'lowercase'  // Use "lowercase" tokenization -- lowercase all input, preserve non-alphanumerical tokens, split on white space
                    },
                  }
                },
                {
                  name: 'code',
                  dataType: ['text'],
                  description: 'a piece of the contract under test',
                  moduleConfig: {
                    'text2vec-openai': {  // this must match the vectorizer used
                      skip: true,  // Do not tokenize invariant code
                      indexFilterable: false, // Do no index invariants for search or filter for now
                      indexSearchable: false,
                    },
                  }
                },
                {
                  name: 'invariant',
                  dataType: ['text'],
                  description: 'one invariant',
                  moduleConfig: {
                    'text2vec-openai': {  // this must match the vectorizer used
                      skip: true,  // Do not tokenize invariant code
                      indexFilterable: false, // Do no index invariants for search or filter for now
                      indexSearchable: false,
                    },
                  }
                },
              ]
            };
            // Add the collection to the schema
            await client.schema.classCreator().withClass(collection).do();
    }
    return client;
}

async function ingestProject(compilation_result: CompileResult, ctx: ContractContext, ragCtx: RagContext) {
    const reader = new ASTReader();
    const sourceUnits = reader.read(compilation_result.data);
    // storage for invariant functions: {"xxx.sol:contract_name:function_name" -> FunctionDefinition}
    // let functionIdToFunction: Map<string, FunctionDefinition> = new Map();
    const writer = new ASTWriter(DefaultASTWriterMapping, formatter,ctx.compilerVersion);
    // storage for function's associated invariants; key is a concatenated string of all functions covered by invariant
    let functionToInvariants: Map<string, FunctionDefinition[]> = new Map();
    for (const sourceUnit of sourceUnits) {
        for (const contract of sourceUnit.vContracts) {
          contract.vFunctions
          .filter((f) => f.name.includes("invariant_"))
          .map((i) => {
            let relevantFunctions = getFunctionDefinitions(i);
            let key = Array.from(relevantFunctions).map((f) => {
              return writer.write(f);
            }).join("\n");
            functionToInvariants.set(key, functionToInvariants.has(key) ? functionToInvariants.get(key).concat(i) : [i]);
          })
        }
      }
    // Write as a langchain Document -- contract source code => list of invariant source code
    // Use langchain's integration with Weaviate
    let docs = [];
    for (let f of functionToInvariants.keys()) {
      for (let i of functionToInvariants.get(f)){
        let functionSource = f;
        let invariantSource = writer.write(i);
        let document = new Document({pageContent: functionSource, metadata: {invariant: invariantSource}});
        docs.push(document);
      }
    }
    // Split into more proper chuncks, each is a piece of the contract-under-test; The relevant invariant is in metadata
    docs = await ragCtx.splitter.splitDocuments(docs);
    for (let $doc of docs) {
        let doc = ($doc as Document);
        let dataObj = {
          "text": doc.pageContent,
          'code': doc.pageContent,
          "invariant": doc.metadata.invariant,
        }
        const exists = await ragCtx.vectorDBClient.data
                                                  .checker()
                                                  .withClassName(indexName)
                                                  .withId(generateUuid5(JSON.stringify(dataObj)))
                                                  .do();
        if (exists) {
          console.log("DataObject Exists -- skipping: " + JSON.stringify(dataObj));
          continue;
        }
        if (doc.metadata.invariant == "") {
          console.log("Empty invarinat -- skipping");
          continue;
        }
        let weaviate_object = await ragCtx.vectorDBClient.data
                                   .creator()
                                   .withClassName(indexName)
                                   .withProperties(dataObj)
                                   .withId(generateUuid5(JSON.stringify(dataObj)))
                                   .do();
    }
}

export {getRagContext, ingestProject, RagContext};