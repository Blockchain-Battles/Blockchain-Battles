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

    // Internal function to generate a pseudo-random number using block information
    function _generateRandomNumber(uint256 range) internal returns (uint256) {
        nonce++;
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, nonce))) % range;
        return randomNumber;
    }
}
