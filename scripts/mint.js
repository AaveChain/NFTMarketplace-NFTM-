const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (callback) {
  try {
    const nftMarketplace = await NFTMarketplace.deployed();
    const recipientAddress = "0x0E8D097653420Fb547DfA01B4337bF9e49198552"; // Replace with the recipient's Ethereum address
    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmUaKkYsFnYsZLs4KXvXiTAnb6ZYpwdRw5xiLy259fus9V"; // Replace with the IPFS URI of the image
    const royaltyPercentage = 10; // 10% royalty

    await nftMarketplace.mint(recipientAddress, tokenURI, royaltyPercentage);
    console.log('NFT minted successfully.');
  } catch (error) {
    console.error('Error minting NFT:', error);
  }
  callback();
};
