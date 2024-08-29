import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface MockBancorNetworkV3Interface extends utils.Interface {
    functions: {
        "collectionByPool(address)": FunctionFragment;
        "resetCollectionByPool(address)": FunctionFragment;
        "setCollectionByPool(address)": FunctionFragment;
        "tradeBySourceAmount(address,address,uint256,uint256,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectionByPool" | "resetCollectionByPool" | "setCollectionByPool" | "tradeBySourceAmount"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectionByPool", values: [string]): string;
    encodeFunctionData(functionFragment: "resetCollectionByPool", values: [string]): string;
    encodeFunctionData(functionFragment: "setCollectionByPool", values: [string]): string;
    encodeFunctionData(functionFragment: "tradeBySourceAmount", values: [string, string, BigNumberish, BigNumberish, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "collectionByPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetCollectionByPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCollectionByPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradeBySourceAmount", data: BytesLike): Result;
    events: {};
}
export interface MockBancorNetworkV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockBancorNetworkV3Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        collectionByPool(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        resetCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tradeBySourceAmount(sourceToken: string, targetToken: string, sourceAmount: BigNumberish, minReturnAmount: BigNumberish, deadline: BigNumberish, arg5: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    collectionByPool(arg0: string, overrides?: CallOverrides): Promise<string>;
    resetCollectionByPool(token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCollectionByPool(token: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tradeBySourceAmount(sourceToken: string, targetToken: string, sourceAmount: BigNumberish, minReturnAmount: BigNumberish, deadline: BigNumberish, arg5: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectionByPool(arg0: string, overrides?: CallOverrides): Promise<string>;
        resetCollectionByPool(token: string, overrides?: CallOverrides): Promise<void>;
        setCollectionByPool(token: string, overrides?: CallOverrides): Promise<void>;
        tradeBySourceAmount(sourceToken: string, targetToken: string, sourceAmount: BigNumberish, minReturnAmount: BigNumberish, deadline: BigNumberish, arg5: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        collectionByPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        resetCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        tradeBySourceAmount(sourceToken: string, targetToken: string, sourceAmount: BigNumberish, minReturnAmount: BigNumberish, deadline: BigNumberish, arg5: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectionByPool(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resetCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCollectionByPool(token: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tradeBySourceAmount(sourceToken: string, targetToken: string, sourceAmount: BigNumberish, minReturnAmount: BigNumberish, deadline: BigNumberish, arg5: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockBancorNetworkV3.d.ts.map