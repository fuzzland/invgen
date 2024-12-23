/// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;

import "./BaseModule.sol";

abstract contract BaseIRM is BaseModule {
    int96 internal constant MAX_ALLOWED_INTEREST_RATE = int96(int(uint(5 * 1e27) / SECONDS_PER_YEAR));
    int96 internal constant MIN_ALLOWED_INTEREST_RATE = 0;

    constructor(uint moduleId_, bytes32 moduleGitCommit_) BaseModule(moduleId_,moduleGitCommit_) {}

    function computeInterestRateImpl(address, uint32) virtual internal returns (int96);

    function computeInterestRate(address underlying, uint32 utilisation) external returns (int96) {
        int96 rate = computeInterestRateImpl(underlying, utilisation);
        if (rate > MAX_ALLOWED_INTEREST_RATE) rate = MAX_ALLOWED_INTEREST_RATE; else if (rate < MIN_ALLOWED_INTEREST_RATE) rate = MIN_ALLOWED_INTEREST_RATE;
        return rate;
    }

    function reset(address underlying, bytes calldata resetParams) virtual external {}
}