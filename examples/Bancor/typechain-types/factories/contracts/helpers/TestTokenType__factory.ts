/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TestTokenType,
  TestTokenTypeInterface,
} from "../../../contracts/helpers/TestTokenType";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token1",
        type: "address",
      },
      {
        internalType: "Token",
        name: "token2",
        type: "address",
      },
    ],
    name: "isEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
    ],
    name: "isNative",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Token",
        name: "token",
        type: "address",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cc2806100206000396000f3fe60806040526004361061007f5760003560e01c8063d449a8321161004e578063d449a8321461012f578063d9fc4b6114610161578063eb5625d914610181578063f7888aec146101a157600080fd5b8063685658bb1461008b578063a86e3576146100c0578063b2b8b5dd146100ed578063d1660f991461010d57600080fd5b3661008657005b600080fd5b34801561009757600080fd5b506100ab6100a6366004610a24565b6101cf565b60405190151581526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004610a5d565b6101ea565b6040516100b79190610aa5565b3480156100f957600080fd5b506100ab610108366004610a5d565b6101fe565b34801561011957600080fd5b5061012d610128366004610ad8565b610212565b005b34801561013b57600080fd5b5061014f61014a366004610a5d565b61022b565b60405160ff90911681526020016100b7565b34801561016d57600080fd5b5061012d61017c366004610b19565b61023f565b34801561018d57600080fd5b5061012d61019c366004610ad8565b61025a565b3480156101ad57600080fd5b506101c16101bc366004610a24565b61026e565b6040519081526020016100b7565b60006001600160a01b03808416908316145b90505b92915050565b60606101e4826001600160a01b0316610283565b60006101e4826001600160a01b0316610332565b6102266001600160a01b0384168383610359565b505050565b60006101e4826001600160a01b03166103be565b6102546001600160a01b038516848484610438565b50505050565b6102266001600160a01b0384168383610462565b60006101e16001600160a01b03841683610489565b606061028e82610332565b156102cc57505060408051808201909152600381527f4554480000000000000000000000000000000000000000000000000000000000602082015290565b816001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561030a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101e49190810190610b99565b60006001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146101e4565b8060000361036657505050565b61036f83610332565b156103aa576040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610254573d6000803e3d6000fd5b6102266001600160a01b0384168383610530565b60006103c982610332565b156103d657506012919050565b816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e49190610c3b565b801580610449575061044984610332565b610254576102546001600160a01b0385168484846105d9565b61046b83610332565b1561047557505050565b6102266001600160a01b038416838361062a565b600061049483610332565b156104aa57506001600160a01b038116316101e4565b826040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291909116906370a0823190602401602060405180830381865afa15801561050c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e19190610c5e565b6040516001600160a01b0383166024820152604481018290526102269084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261077d565b6040516001600160a01b03808516602483015283166044820152606481018290526102549085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610575565b8015806106bd57506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bb9190610c5e565b155b6107345760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b6040516001600160a01b0383166024820152604481018290526102269084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610575565b60006107d2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108659092919063ffffffff16565b90508051600014806107f35750808060200190518101906107f39190610c77565b6102265760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161072b565b6060610874848460008561087c565b949350505050565b6060824710156108f45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161072b565b600080866001600160a01b031685876040516109109190610c99565b60006040518083038185875af1925050503d806000811461094d576040519150601f19603f3d011682016040523d82523d6000602084013e610952565b606091505b50915091506109638783838761096e565b979650505050505050565b606083156109dd5782516000036109d6576001600160a01b0385163b6109d65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161072b565b5081610874565b61087483838151156109f25781518083602001fd5b8060405162461bcd60e51b815260040161072b9190610aa5565b6001600160a01b0381168114610a2157600080fd5b50565b60008060408385031215610a3757600080fd5b8235610a4281610a0c565b91506020830135610a5281610a0c565b809150509250929050565b600060208284031215610a6f57600080fd5b8135610a7a81610a0c565b9392505050565b60005b83811015610a9c578181015183820152602001610a84565b50506000910152565b6020815260008251806020840152610ac4816040850160208701610a81565b601f01601f19169190910160400192915050565b600080600060608486031215610aed57600080fd5b8335610af881610a0c565b92506020840135610b0881610a0c565b929592945050506040919091013590565b60008060008060808587031215610b2f57600080fd5b8435610b3a81610a0c565b93506020850135610b4a81610a0c565b92506040850135610b5a81610a0c565b9396929550929360600135925050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215610bab57600080fd5b815167ffffffffffffffff80821115610bc357600080fd5b818401915084601f830112610bd757600080fd5b815181811115610be957610be9610b6a565b604051601f8201601f19908116603f01168101908382118183101715610c1157610c11610b6a565b81604052828152876020848701011115610c2a57600080fd5b610963836020830160208801610a81565b600060208284031215610c4d57600080fd5b815160ff81168114610a7a57600080fd5b600060208284031215610c7057600080fd5b5051919050565b600060208284031215610c8957600080fd5b81518015158114610a7a57600080fd5b60008251610cab818460208701610a81565b919091019291505056fea164736f6c6343000813000a";

type TestTokenTypeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenTypeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestTokenType__factory extends ContractFactory {
  constructor(...args: TestTokenTypeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<TestTokenType> {
    return super.deploy(overrides || {}) as Promise<TestTokenType>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestTokenType {
    return super.attach(address) as TestTokenType;
  }
  override connect(signer: Signer): TestTokenType__factory {
    return super.connect(signer) as TestTokenType__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenTypeInterface {
    return new utils.Interface(_abi) as TestTokenTypeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTokenType {
    return new Contract(address, _abi, signerOrProvider) as TestTokenType;
  }
}