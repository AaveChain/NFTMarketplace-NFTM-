// migrations/2_deploy_contracts.js

const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = function (deployer) {
  deployer.deploy(NFTMarketplace, "YourNFTName", "NFT", "YourBaseTokenURI")
    .then(async (instance) => {
      console.log("NFT Marketplace deployed to address:", instance.address);
    });
};
