// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";
import "hardhat/console.sol";

contract CoinFlip is VRFV2WrapperConsumerBase, ConfirmedOwner {
    event CoinFlipRequest(uint256 requestId);
    event CoinFlipResult(uint256 requestId, bool didWin);

    enum CoinFlipSelection {
        HEADS,
        TAILS
    }

    struct CoinFlipStatus {
        uint256 fees;
        uint256 randomWord;
        address player;
        bool didWin;
        bool fulfilled;
        CoinFlipSelection choice;
    }

    mapping(uint256 => CoinFlipStatus) public statuses;

    // Address LINK - hardcoded for Sepolia
    address constant linkAddress = 0x779877A7B0D9E8603169DdbD7836e478b4624789;
    // address WRAPPER - hardcoded for Sepolia
    address constant vrfWrapperAddress =
        0xab18414CD93297B0d12ac29E63Ca20f515b3DB46;

    uint128 constant entryFees = 0.001 ether;
    uint32 constant callbackGasLimit = 1_000_000;
    uint32 constant numWords = 1;
    uint16 constant requestConfirmations = 3; // 3 blocks is the minimum, 200 is the maximum

    constructor()
        payable
        ConfirmedOwner(msg.sender)
        VRFV2WrapperConsumerBase(linkAddress, vrfWrapperAddress)
    {}

    function flipACoin(
        CoinFlipSelection choice
    ) external payable returns (uint256) {
        // require(msg.value == entryFees, "Must pay entry fees");
        require(msg.value <= address(this).balance, "Not enough balance");

        uint256 requestId = requestRandomness(
            callbackGasLimit,
            requestConfirmations,
            numWords
        );

        statuses[requestId] = CoinFlipStatus({
            fees: VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit),
            randomWord: 0,
            player: msg.sender,
            didWin: false,
            fulfilled: false,
            choice: choice
        });

        emit CoinFlipRequest(requestId);
        return requestId;
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        require(statuses[requestId].fees > 0, "Request ID does not exist");

        statuses[requestId].fulfilled = true;
        statuses[requestId].randomWord = randomWords[0];

        CoinFlipSelection result = CoinFlipSelection.HEADS;
        if (randomWords[0] % 2 == 0) {
            result = CoinFlipSelection.TAILS;
        }

        if (statuses[requestId].choice == result) {
            statuses[requestId].didWin = true;
            payable(statuses[requestId].player).transfer(entryFees * 2);
        }

        emit CoinFlipResult(requestId, statuses[requestId].didWin);
    }

    function getStatus(
        uint256 requestId
    ) external view returns (CoinFlipStatus memory) {
        return statuses[requestId];
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(linkAddress);
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

    function withdrawETH() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function depositETH() public payable onlyOwner {
         payable(address(this)).transfer(msg.value);
    }
}