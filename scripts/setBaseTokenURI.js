const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./build/contracts/NFTMarketplace.json');

const provider = new HDWalletProvider(
  'your_metamask_seed_phrase',
  'https://sepolia_rpc_url'
);
const web3 = new Web3(provider);

const setBaseTokenURI = async () => {
  const accounts = await web3.eth.getAccounts();

  const nftContract = new web3.eth.Contract(abi, evm.bytecode.object);
  const gasEstimate = await nftContract.methods.setBaseTokenURI('https://new-base-uri.com').estimateGas();

  const result = await nftContract.methods.setBaseTokenURI('https://new-base-uri.com').send({
    from: accounts[0],
    gas: gasEstimate,
  });

  console.log('Base Token URI Set: ', result.transactionHash);
};

setBaseTokenURI();
