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

  // Verifying CoinFlip
  await verifyContract(coinFlip, 'CoinFlip')
}

async function verifyContract(token, contractName) {
  if (!isPublicNetwork) {
    // verifying contracts are only needed for public network deployments
    return
  }
  try {
    await hre.run('verify:verify', { address: token.address })
    console.log(`\n\n --> ${contractName} verified on the scanner site`)
  } catch (err) {
    const already = err.message?.toLowerCase()?.includes('already verified')
    if (already) {
      console.log(`     Verification error: ${err.message}`)
    } else {
      // possible error reasons: API key is not set, network connection errors (we should be able to try again, to verify only)
      console.log(`\n\n --> ${contractName} is not verified on the scanner site\n`)
      throw err
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
