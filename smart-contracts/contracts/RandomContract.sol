// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RandomContract {
    address private owner;
    uint256 private nonce;

    constructor() {
        owner = msg.sender;
        nonce = 0;
    }

  
}
