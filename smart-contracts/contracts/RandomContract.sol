// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RandomContract {
    address private owner;
    uint256 private nonce;

    mapping(address => uint256[]) public history;

    event CoinFlipped(address indexed user, uint256 result, uint256 amountWon);
    event DiceRolled(address indexed user, uint256 result);

    constructor() {
        owner = msg.sender;
        nonce = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function flipCoin() external returns (uint256) {
        uint256 randomNumber = _generateRandomNumber(2);
        history[msg.sender].push(randomNumber);
        emit CoinFlipped(msg.sender, randomNumber);
        return randomNumber;
    }

    function withdraw() external onlyOwner {
        require(address(this).balance > 0, "Contract balance is zero");

        uint256 amount = address(this).balance;
        payable(owner).transfer(amount);
    }

    // Internal function to generate a pseudo-random number using block information
    function _generateRandomNumber(uint256 range) internal returns (uint256) {
        nonce++;
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, nonce))) % range;
        return randomNumber;
    }
}
