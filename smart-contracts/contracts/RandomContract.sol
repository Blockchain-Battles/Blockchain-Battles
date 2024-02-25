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

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
    }

    function flipCoin(uint256 prediction) external payable returns (uint256) {
        require(prediction == 0 || prediction == 1, "Invalid prediction. Use 0 for heads or 1 for tails");

        // Check if the contract has enough balance to pay the reward
        require(address(this).balance >= msg.value, "Insufficient contract balance");

        uint256 randomNumber = _generateRandomNumber(2);
        history[msg.sender].push(randomNumber);

        if (randomNumber == prediction) {
            uint256 amountWon = msg.value * 2; // Reward the user with the same amount
            emit CoinFlipped(msg.sender, randomNumber, amountWon);
            payable(msg.sender).transfer(amountWon); // Transfer ETH to the user
        } else {
            emit CoinFlipped(msg.sender, randomNumber, 0);
        }

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

    function getHistory(address _address) external view returns (uint256[] memory) {
        return history[_address];
    }
}
