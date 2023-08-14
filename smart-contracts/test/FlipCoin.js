const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const networkHelpers = require('@nomicfoundation/hardhat-network-helpers');
const {loadFixture} = networkHelpers;

const { expect } = require("chai");

describe("flip Coin", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const CoinFlip = await ethers.getContractFactory("CoinFlip");
    const coinFlip = await CoinFlip.deploy();

    return { coinFlip, owner, otherAccount };
  }

  it("Should flip a coin", async function () {
    const { coinFlip, owner } = await loadFixture(deployOneYearLockFixture);

    // eth amount = 0.001 & choice = 1
    await coinFlip.flipACoin(1, { value: 1000000000000000 });
  }
  )
});
