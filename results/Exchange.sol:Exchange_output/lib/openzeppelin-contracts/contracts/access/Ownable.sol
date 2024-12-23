/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../utils/Context.sol";

///  @dev Contract module which provides a basic access control mechanism, where
///  there is an account (an owner) that can be granted exclusive access to
///  specific functions.
///  By default, the owner account will be the one that deploys the contract. This
///  can later be changed with {transferOwnership}.
///  This module is used through inheritance. It will make available the modifier
///  `onlyOwner`, which can be applied to your functions to restrict their use to
///  the owner.
abstract contract Ownable is Context {
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    address private _owner;

    ///  @dev Throws if called by any account other than the owner.
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    ///  @dev Initializes the contract setting the deployer as the initial owner.
    constructor() {
        _transferOwnership(_msgSender());
    }

    ///  @dev Returns the address of the current owner.
    function owner() virtual public view returns (address) {
        return _owner;
    }

    ///  @dev Throws if the sender is not the owner.
    function _checkOwner() virtual internal view {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    ///  @dev Leaves the contract without owner. It will not be possible to call
    ///  `onlyOwner` functions. Can only be called by the current owner.
    ///  NOTE: Renouncing ownership will leave the contract without an owner,
    ///  thereby disabling any functionality that is only available to the owner.
    function renounceOwnership() virtual public onlyOwner() {
        _transferOwnership(address(0));
    }

    ///  @dev Transfers ownership of the contract to a new account (`newOwner`).
    ///  Can only be called by the current owner.
    function transferOwnership(address newOwner) virtual public onlyOwner() {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    ///  @dev Transfers ownership of the contract to a new account (`newOwner`).
    ///  Internal function without access restriction.
    function _transferOwnership(address newOwner) virtual internal {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}