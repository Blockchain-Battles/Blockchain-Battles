const hre = require('hardhat')

const isPublicNetwork = !hre.network.name.includes('local')

async function main() {
  // Deploy 

  const CoinFlip = await hre.ethers.getContractFactory('CoinFlip')
  const coinFlip = await CoinFlip.deploy()

  await coinFlip.deployed()
  
  // wait for 5 confirmations

  await coinFlip.deployTransaction.wait(5)


}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
