// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RandomContract {
    address private owner;
    uint256 private nonce;

    constructor() {
        owner = msg.sender;
        nonce = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

  
}
