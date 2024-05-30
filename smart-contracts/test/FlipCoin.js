const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const networkHelpers = require('@nomicfoundation/hardhat-network-helpers');
const { loadFixture } = networkHelpers;

const { expect } = require("chai");

let flipCoinContract;

describe("flip Coin", function () {

  this.beforeAll(async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    const FlipCoin = await ethers.getContractFactory("FlipCoin");
    const flipCoin = await FlipCoin.deploy();
    await flipCoin.deployed();
    flipCoinContract = flipCoin;

    await owner.sendTransaction({
      to: flipCoinContract.address,
      value: ethers.utils.parseEther("1"),
    });

  }
  )
  async function deployOneYearLockFixture() {
    const [owner, otherAccount, thirdAccount] = await ethers.getSigners();

    // const FlipCoin = await ethers.getContractFactory("FlipCoin");
    // const flipCoin = await FlipCoin.deploy();


    // const otherBalance = await ethers.provider.getBalance(otherAccount.address) 

    // await owner.sendTransaction({
    //   to: otherAccount.address,
    //   value: ethers.utils.parseEther("1"),
    // });


    // // send all the other account eth to third account except for 1 eth
    // await otherAccount.sendTransaction({
    //   to: thirdAccount.address,
    //   value: otherBalance ,
    // });

    return { owner, otherAccount };
  }

  describe('Flip Coin', function () {
    it("Should flip a coin", async function () {
      const { owner, otherAccount } = await loadFixture(deployOneYearLockFixture);

      // other account balance
      const otherAccountBalance = await ethers.provider.getBalance(otherAccount.address);

      await flipCoinContract.connect(otherAccount).flipCoin(0, { value: ethers.utils.parseEther("1") });

      // listen to the event
      const [event] = await flipCoinContract.queryFilter('CoinFlipped');

      console.log('event:', event.args);

      // check the contract balance
      const balance = await ethers.provider.getBalance(flipCoinContract.address);
      console.log('balance:', ethers.utils.formatEther(balance));

      const newOtherAccountBalance = await ethers.provider.getBalance(otherAccount.address);

      expect(otherAccountBalance).to.not.equal(newOtherAccountBalance);
    }
    )
  }
  )
});
