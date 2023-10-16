// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { abi, evm } = require('./build/contracts/NFTMarketplace.json');

// const provider = new HDWalletProvider(
//   'your_metamask_seed_phrase',
//   'https://sepolia_rpc_url'
// );
// const web3 = new Web3(provider);

// const listForSale = async () => {
//   const accounts = await web3.eth.getAccounts();

//   const nftContract = new web3.eth.Contract(abi, evm.bytecode.object);
//   const gasEstimate = await nftContract.methods.listTokenForSale(1, 1e17).estimateGas();

//   const result = await nftContract.methods.listTokenForSale(1, 1e17).send({
//     from: accounts[0],
//     gas: gasEstimate,
//   });

//   console.log('NFT Listed for Sale: ', result.transactionHash);
// };

// listForSale();
const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (callback) {
  try {
    const nftMarketplace = await NFTMarketplace.deployed();
    const tokenId = 1; // Replace with the token ID you want to list for sale
    const price = web3.utils.toWei("0.1", "ether"); // Specify the price
    await nftMarketplace.listTokenForSale(tokenId, price);
    console.log('NFT listed for sale successfully.');
  } catch (error) {
    console.error('Error listing NFT for sale:', error);
  }
  callback();
};
