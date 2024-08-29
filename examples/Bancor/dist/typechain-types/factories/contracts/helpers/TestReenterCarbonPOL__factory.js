"use strict";
/* Autogenerated file. Do not edit manually. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReenterCarbonPOL__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ICarbonPOL",
                name: "carbonPOLInit",
                type: "address",
            },
            {
                internalType: "Token",
                name: "tokenInit",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "tryReenterCarbonPOL",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b506040516102fa3803806102fa83398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a0516102316100c9600039600081816064015261014a015260008181609d015261018a01526102316000f3fe6080604052600436106100225760003560e01c8063f07de200146100ff57600080fd5b366100fa576040517f4747919d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152670de0b6b3a764000060248301819052917f000000000000000000000000000000000000000000000000000000000000000090911690634747919d9034906044016000604051808303818588803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b005b600080fd5b6100f861010d3660046101eb565b6040517f4747919d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526fffffffffffffffffffffffffffffffff831660248301527f00000000000000000000000000000000000000000000000000000000000000001690634747919d9034906044016000604051808303818588803b1580156101cf57600080fd5b505af11580156101e3573d6000803e3d6000fd5b505050505050565b6000602082840312156101fd57600080fd5b81356fffffffffffffffffffffffffffffffff8116811461021d57600080fd5b939250505056fea164736f6c6343000813000a";
const isSuperArgs = (xs) => xs.length > 1;
class TestReenterCarbonPOL__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(carbonPOLInit, tokenInit, overrides) {
        return super.deploy(carbonPOLInit, tokenInit, overrides || {});
    }
    getDeployTransaction(carbonPOLInit, tokenInit, overrides) {
        return super.getDeployTransaction(carbonPOLInit, tokenInit, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestReenterCarbonPOL__factory = TestReenterCarbonPOL__factory;
//# sourceMappingURL=TestReenterCarbonPOL__factory.js.map