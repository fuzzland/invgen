/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  OnlyProxyDelegate,
  OnlyProxyDelegateInterface,
} from "../../../contracts/utility/OnlyProxyDelegate";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "UnknownDelegator",
    type: "error",
  },
] as const;

export class OnlyProxyDelegate__factory {
  static readonly abi = _abi;
  static createInterface(): OnlyProxyDelegateInterface {
    return new utils.Interface(_abi) as OnlyProxyDelegateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnlyProxyDelegate {
    return new Contract(address, _abi, signerOrProvider) as OnlyProxyDelegate;
  }
}
