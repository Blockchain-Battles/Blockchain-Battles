// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FlipCoin {
    address public owner;

    event CoinFlipped(address indexed player, uint256 betAmount, bool win);

    constructor() {
        owner = msg.sender;
    }

    // Flip the coin, 0 for heads and 1 for tails, along with the bet amount
    function flipCoin(uint8 guess) external payable {
        require(guess == 0 || guess == 1, "Guess must be 0 or 1");
        require(msg.value > 0, "Bet amount must be greater than zero");
        require(address(this).balance >= msg.value, "Not enough funds in the contract to cover the bet");

        // Generate a pseudo-random number 0 or 1
        uint8 outcome = uint8(uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))) % 2);

        if (guess == outcome) {
            // If the player wins, send them twice the amount they bet
            payable(msg.sender).transfer(msg.value * 2);
            emit CoinFlipped(msg.sender, msg.value, true);
        } else {
            // If the player loses, do nothing
            emit CoinFlipped(msg.sender, msg.value, false);
        }
    }

    // Withdraw the contract balance, only callable by the owner
    function withdraw() external {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }

    // Fallback function to accept ETH sent to the contract
    receive() external payable {}
}
