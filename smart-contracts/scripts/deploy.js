const hre = require('hardhat')

const isPublicNetwork = !hre.network.name.includes('local')

async function main() {
  // Deploy 
  console.log('Deploying contracts...')
  const CoinFlip = await hre.ethers.getContractFactory('CoinFlip')
  const coinFlip = await CoinFlip.deploy()

  await coinFlip.deployed()
  
  // wait for 5 confirmations
  console.log('coinFlip.deployed, waiting for 5 block confirmations...')
  await coinFlip.deployTransaction.wait(5)
  console.log(`CoinFlip deployed to ${coinFlip.address}`)

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
