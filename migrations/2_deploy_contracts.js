// migrations/2_deploy_contracts.js

const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = function (deployer) {
  deployer.deploy(NFTMarketplace, "YourNFTName", "NFT", "YourBaseTokenURI");
};
