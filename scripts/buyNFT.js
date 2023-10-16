// const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const { abi, evm } = require('./build/contracts/NFTMarketplace.json');

// const provider = new HDWalletProvider(
//   'your_metamask_seed_phrase',
//   'https://sepolia_rpc_url'
// );
// const web3 = new Web3(provider);

// const buyNFT = async () => {
//   const accounts = await web3.eth.getAccounts();

//   const nftContract = new web3.eth.Contract(abi, evm.bytecode.object);
//   const gasEstimate = await nftContract.methods.buyToken(1).estimateGas();

//   const result = await nftContract.methods.buyToken(1).send({
//     from: accounts[1], // Buyer's address
//     value: 1e17, // The price of the NFT in Wei
//     gas: gasEstimate,
//   });

//   console.log('NFT Bought: ', result.transactionHash);
// };

// buyNFT();
const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (callback) {
  try {
    const nftMarketplace = await NFTMarketplace.deployed();
    const tokenId = 1; // Replace with the token ID you want to buy
    const price = web3.utils.toWei("0.1", "ether"); // Specify the price
    const buyer = accounts[1]; // Replace with the buyer's account
    await nftMarketplace.buyToken(tokenId, { from: buyer, value: price });
    console.log('NFT purchased successfully.');
  } catch (error) {
    console.error('Error buying NFT:', error);
  }
  callback();
};
