import type { TestReenterCarbonPOL, TestReenterCarbonPOLInterface } from "../../../contracts/helpers/TestReenterCarbonPOL";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
type TestReenterCarbonPOLConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestReenterCarbonPOL__factory extends ContractFactory {
    constructor(...args: TestReenterCarbonPOLConstructorParams);
    deploy(carbonPOLInit: string, tokenInit: string, overrides?: Overrides & {
        from?: string;
    }): Promise<TestReenterCarbonPOL>;
    getDeployTransaction(carbonPOLInit: string, tokenInit: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): TestReenterCarbonPOL;
    connect(signer: Signer): TestReenterCarbonPOL__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b506040516102fa3803806102fa83398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a0516102316100c9600039600081816064015261014a015260008181609d015261018a01526102316000f3fe6080604052600436106100225760003560e01c8063f07de200146100ff57600080fd5b366100fa576040517f4747919d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152670de0b6b3a764000060248301819052917f000000000000000000000000000000000000000000000000000000000000000090911690634747919d9034906044016000604051808303818588803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b005b600080fd5b6100f861010d3660046101eb565b6040517f4747919d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526fffffffffffffffffffffffffffffffff831660248301527f00000000000000000000000000000000000000000000000000000000000000001690634747919d9034906044016000604051808303818588803b1580156101cf57600080fd5b505af11580156101e3573d6000803e3d6000fd5b505050505050565b6000602082840312156101fd57600080fd5b81356fffffffffffffffffffffffffffffffff8116811461021d57600080fd5b939250505056fea164736f6c6343000813000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ICarbonPOL";
            readonly name: "carbonPOLInit";
            readonly type: "address";
        }, {
            readonly internalType: "Token";
            readonly name: "tokenInit";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "amount";
            readonly type: "uint128";
        }];
        readonly name: "tryReenterCarbonPOL";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): TestReenterCarbonPOLInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestReenterCarbonPOL;
}
export {};
//# sourceMappingURL=TestReenterCarbonPOL__factory.d.ts.map