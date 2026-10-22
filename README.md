# InvGen
Generate invariants for Foundry projects using LLM + RAG + Chain of Thought. [Example output](https://github.com/fuzzland/invgen/blob/main/results/ARK.sol%3AAbsToken_output/script/src_ARK_Invaraint.sol#L1324)


## Install
Ensure you have Node.js and Docker installed. This script will install dependencies and setup Weaviate container.
```
git clone https://github.com/fuzzland/invgen.git && cd invgen
./setup.sh
```

## Usage
Generate invariants for a given project (e.g. [ARK](https://github.com/SunWeb3Sec/DeFiHackLabs/tree/main?tab=readme-ov-file#20240324-ark---business-logic-flaw)). 
The project should be a Foundry project and has a setup file with `setUp` function that deploy the contract-under-test should be provided.
```bash
node ./build/src/index.js examples/ark \
    --project-type=foundry \
    --compiler-version=0.8.13 \
    --setup-file=script/ARK.s.sol:InvariantTest \
    --target-file=src/ARK.sol:AbsToken
```

The generated invariants will be saved in `results` folder. You can then run the generated invariants by using Foundry or ItyFuzz.

#### Using Foundry:
```bash
forge test --match-test testInvariant
```


#### Using ItyFuzz:
```bash
ityfuzz evm -m testInvariant -- forge test
```


## Retrain
#### 1. Create Retreival Augmented Generation (RAG) Database
First set up an RAG database as docker container. Notice that this container will use `localhost:9400`.
```
# Start Weaviate vector DB
cd weaviate
docker compose up -d
```
If `weaviate/data` already holds a database created by an older Weaviate (1.24 from this compose file, or 1.25 from `setup.sh`), note that Weaviate only supports upgrading one minor version at a time. Either step through the intermediate minor releases, or delete `weaviate/data` and fill the database again (step 2).
#### 2. Fill RAG Database
You can create your own invariant dataset by putting Foundry projects into `invariant_dataset` folder or use the one we have collected. To use our dataset, run
```bash
wget https://ityfuzz.assets.fuzz.land/db.tar.gz && tar -xzf db.tar.gz
```

#### 3. Retrain
Run any project with the retrain flag to generate a new model.
```bash
node ./build/src/index.js examples/ark \
    --project-type=foundry \
    --compiler-version=0.8.13 \
    --setup-file=script/ARK.s.sol:InvariantTest \
    --target-file=src/ARK.sol:AbsToken
    --retrain # <= add this flag to retrain the model
```



