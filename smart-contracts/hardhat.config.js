// require('dotenv-flow').config({ silent: true })
require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-web3')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-watcher')
require('solidity-coverage')
// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


let OWNER_PRIVATE_KEY
if (process.env.OWNER_PRIVATE_KEY && process.env.OWNER_PRIVATE_KEY.length === 64) {
  OWNER_PRIVATE_KEY = process.env.OWNER_PRIVATE_KEY
} else {
  try {
    const fs = require('fs')
    const secret = fs.readFileSync('.secret', 'utf8').trim()
    if (secret.length === 64) {
      OWNER_PRIVATE_KEY = secret
    }
  } catch (err) {
    // ignore if local
    const yargs = require('yargs/yargs')
    const argv = yargs(process.argv).argv
    if (argv.network && argv.network !== 'hardhat' && argv.network !== 'localhost') {
      console.error('ERROR: when using a non-local network, an owner wallet secret should be provided to run scripts as a hex value, either in a .secret file or in the OWNER_PRIVATE_KEY env variable.')
      process.exit(1)
    }
  }
}

const accounts = OWNER_PRIVATE_KEY ? [OWNER_PRIVATE_KEY] : undefined

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: 'hardhat',

  networks: {
    zkSync: {
      url: "https://rinkeby-api.zksync.io",
      accounts
    },
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s3.binance.org:8545',
      accounts
    },
    // bscMain: {
    //   url: process.env.RPC_URL_BSCMAIN,
    //   accounts
    // },
    goerli: {
      url: 'https://goerli.blockpi.network/v1/rpc/public',
      accounts
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/demo',
      accounts
    },
    sepolia: {
      url: 'https://eth-sepolia.public.blastapi.io',
      // https://endpoints.omniatech.io/v1/eth/sepolia/public
      accounts
    },
  },
  etherscan: {
    apiKey: {
      // bscTestnet: process.env.ETHERSCAN_APIKEY_BSCTEST,
      // bscMain: process.env.ETHERSCAN_APIKEY_BSCMAIN,
      // rinkeby: process.env.ETHERSCAN_APIKEY_RINKEBY,
      // goerli: process.env.ETHERSCAN_APIKEY_GOERLI,
      sepolia: process.env.ETHERSCAN_APIKEY_SEPOLIA,
      // polygonMumbai: process.env.ETHERSCAN_APIKEY_MUMBAI,
    }
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true
    }
  }
};
