import type { IERC165, IERC165Interface } from "../../../../../@openzeppelin/contracts/utils/introspection/IERC165";
import type { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
export declare class IERC165__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC165Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC165;
}
//# sourceMappingURL=IERC165__factory.d.ts.map