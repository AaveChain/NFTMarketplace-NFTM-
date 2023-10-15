require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = process.env.MNEMONIC; // Replace with your MetaMask seed phrase
const rpcUrl = process.env.RPC_URL; // Replace with the RPC URL of the Sepolia network


module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, rpcUrl),
      network_id: 11155111, // Sepolia network ID (change it if it's different)
      gas: 6000000, // Adjust gas limit according to your contract size
      confirmations: 2, // Adjust as needed
      timeoutBlocks: 200, // Adjust as needed
      skipDryRun: true,
    },
  },
  

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

  contracts_directory: "./contracts",
  contracts_build_directory: "./build/contracts",
};
