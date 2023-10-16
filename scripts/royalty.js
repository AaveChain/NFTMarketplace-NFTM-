// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { abi, evm } = require('./build/contracts/NFTMarketplace.json');

// const provider = new HDWalletProvider(
//   'your_metamask_seed_phrase',
//   'https://sepolia_rpc_url'
// );
// const web3 = new Web3(provider);

// const setRoyalty = async () => {
//   const accounts = await web3.eth.getAccounts();

//   const nftContract = new web3.eth.Contract(abi, evm.bytecode.object);
//   const gasEstimate = await nftContract.methods.setRoyalty(1, 15).estimateGas(); // Token ID 1, 15% royalty

//   const result = await nftContract.methods.setRoyalty(1, 15).send({
//     from: accounts[0],
//     gas: gasEstimate,
//   });

//   console.log('Royalty Set: ', result.transactionHash);
// };

// setRoyalty();
const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (callback) {
  try {
    const nftMarketplace = await NFTMarketplace.deployed();
    const tokenId = 1; // Replace with the token ID for which you want to check royalty
    const royalty = await nftMarketplace.tokenRoyalty(tokenId);
    console.log('Royalty for token ID', tokenId, 'is', royalty.toNumber(), '%');
  } catch (error) {
    console.error('Error fetching royalty:', error);
  }
  callback();
};
