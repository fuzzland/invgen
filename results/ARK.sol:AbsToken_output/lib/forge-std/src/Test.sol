/// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2<0.9.0;
pragma experimental ABIEncoderV2;

import { console } from "./console.sol";
import { console2 } from "./console2.sol";
import { safeconsole } from "./safeconsole.sol";
import { StdAssertions } from "./StdAssertions.sol";
import { StdChains } from "./StdChains.sol";
import { StdCheats } from "./StdCheats.sol";
import { stdError } from "./StdError.sol";
import { StdInvariant } from "./StdInvariant.sol";
import { stdJson } from "./StdJson.sol";
import { stdMath } from "./StdMath.sol";
import { StdStorage, stdStorage } from "./StdStorage.sol";
import { StdStyle } from "./StdStyle.sol";
import { stdToml } from "./StdToml.sol";
import { StdUtils } from "./StdUtils.sol";
import { Vm } from "./Vm.sol";
import { TestBase } from "./Base.sol";

abstract contract Test is TestBase, StdAssertions, StdChains, StdCheats, StdInvariant, StdUtils {
    bool public IS_TEST = true;
}