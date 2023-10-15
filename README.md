# NFT Marketplace README

Welcome to the README for your NFT Marketplace project. This document will guide you through the structure of your code files, how to compile and deploy your smart contract on the Sepolia testnet, and how to test the key features of your marketplace.

## Table of Contents
1. [Smart Contract](#smart-contract)
2. [Deployment](#deployment)
3. [Testing](#testing)
    - [User Authentication with MetaMask](#user-authentication-with-metamask)
    - [Minting Tokens](#minting-tokens)
    - [Selling Tokens](#selling-tokens)
    - [Royalty](#royalty)
    - [Uploading Images Using IPFS](#uploading-images-using-ipfs)

## Smart Contract
The smart contract for your NFT Marketplace is implemented in `NFTMarketplace.sol`. It includes features for minting NFTs, setting a base token URI, listing NFTs for sale, buying NFTs, and handling royalties. Let's go over each feature:

- **Minting NFTs:** The `mint` function allows the contract owner to mint new NFTs with associated royalty percentages.
- **Base Token URI:** You can set a base token URI using the `setBaseTokenURI` function, which will be used as the base for token metadata URIs.
- **Listing NFTs for Sale:** Sellers can list their NFTs for sale using the `listTokenForSale` function, specifying the token ID and price.
- **Buying NFTs:** Buyers can purchase NFTs by calling the `buyToken` function, which handles transferring NFT ownership and royalties.

## Deployment
To deploy your smart contract on the Sepolia testnet, follow these steps:

1. Ensure you have a `.env` file set up with your MetaMask seed phrase and the Sepolia RPC URL.
2. Make sure you've set up your Truffle configuration to connect to the Sepolia network.
3. Use the Truffle framework to compile and deploy your contract. For example, you can use `truffle migrate --network sepolia`.

## Testing
You can test your NFT Marketplace on the Sepolia testnet using various scenarios:

### User Authentication with MetaMask
For user authentication using MetaMask, ensure that users have MetaMask installed and are connected to the Sepolia network.

### Minting Tokens
1. Use the `mint` function to mint NFTs with specified URIs and royalties.
2. Check if the minted NFTs have the correct royalties associated.

### Selling Tokens
1. List NFTs for sale using the `listTokenForSale` function.
2. Verify that NFTs are correctly listed with the desired prices.

### Royalty
1. Purchase NFTs and ensure royalties are transferred correctly to the original creator.
2. Verify that sellers receive the remaining amount after royalties when their NFTs are sold.

### Uploading Images Using IPFS
Follow the instructions in your README to upload images to IPFS and associate them with NFTs.

By following these test cases, you can ensure that your NFT Marketplace functions as expected on the Sepolia testnet.


## Prerequisites

Before you start testing, make sure you have the following prerequisites in place:

- **Remix**: Open [Remix](https://remix.ethereum.org/) and set it to the correct compiler version (0.8.0 in your case).
- **Network**: Ensure that you are connected to the desired network (JavaScript VM, Injected Web3, or other test networks like Rinkeby).
- **Deploy the Contract**: Deploy the contract first if you haven't already.

```
npm init --y
truffle init //after install truffle pacakege
```
# libraries
```
npm install @openzeppelin/contracts

```

# NFT Marketplace on Sepolia Testnet

Welcome to the NFT Marketplace project, a decentralized platform where users can mint, sell, and buy NFTs. This guide will walk you through the code files, compilation, deployment on the Sepolia testnet, and testing procedures.

## Smart Contract

The core of the NFT Marketplace is the smart contract, implemented in Solidity. Below is an overview of the smart contract's key features and functionality:

- **NFT Contract:** The smart contract inherits from OpenZeppelin's ERC721URIStorage, making it an NFT (non-fungible token) contract.

- **Ownership:** The contract includes ownership functionality using OpenZeppelin's Ownable contract.

- **Reentrancy Guard:** For security, the contract uses OpenZeppelin's ReentrancyGuard to prevent reentrancy attacks.

- **Minting:** The contract allows the owner to mint NFTs with customizable royalties.

- **Base Token URI:** The base token URI is configurable, allowing you to set the base location for token metadata.

- **Listing for Sale:** Users can list their NFTs for sale, specifying the price.

- **Buying NFTs:** Users can purchase NFTs, and royalties are automatically distributed to the creator.

## Code Files

Here are the primary code files in this project:

- **NFTMarketplace.sol:** This file contains the Solidity code for the NFT Marketplace smart contract.

## Compilation

To compile the smart contract, you'll need to set up the development environment with Truffle and Solidity. Here's how you can compile the contract:

1. Ensure you have Node.js, Truffle, and Solidity installed.

2. Run the following command to compile the smart contract:
   
```
truffle compile
```
## Deployment on Sepolia Testnet

Before deploying the smart contract, you'll need to configure your environment and provide deployment scripts.

### Deployment Script

1. Create a deployment script (e.g., 2_deploy_contract.js) inside your Truffle migrations folder. This script should deploy your smart contract to the Sepolia testnet. Make sure you update the network configuration in Truffle to connect to the Sepolia network.

### Run the Deployment Script using Truffle

To deploy your smart contract to the Sepolia testnet, follow these steps:

1. Make sure you have updated the Truffle configuration to connect to the Sepolia network.

2. Ensure you have a sufficient amount of test Ether on the Sepolia network.

3. Run the following Truffle migration command:

```
truffle migrate --network sepolia
```
## Testing

Testing the NFT Marketplace is crucial to ensure that all functionalities work as expected. We've prepared a set of test scripts to verify different aspects of the platform:

1. **User Login Using MetaMask:** Tests user authentication using MetaMask.
2. **Mint Tokens:** Validates the minting process, ensuring that NFTs are created with correct royalties.
3. **Sell Tokens:** Tests the listing and selling of NFTs.
4. **Royalty:** Validates that royalties are distributed correctly to creators.
5. **Upload Image Using IPFS:** Tests the integration with IPFS for uploading images associated with NFTs.

To run the tests, execute the following command:

```
truffle test
```

## Minting an NFT

1. In the Remix "Deploy & Run Transactions" panel, select your contract and the mint function.
2. Provide the following example values:
    - `to`: Address where the NFT will be minted. You can use one of the addresses available in the Remix environment.
    - `tokenURI`: A string representing the URI of the NFT. Example: "https://your-image-uri.com/image1".
    - `royalty`: The royalty percentage. Example: 10 (for 10% royalty).
3. Click the "Transact" button. This will mint an NFT with the provided values.

## Setting Base Token URI

1. In the Remix "Deploy & Run Transactions" panel, select your contract and the setBaseTokenURI function.
2. Provide the new base token URI as a string. Example: "https://new-base-uri.com".
3. Click the "Transact" button. This will update the base token URI.

## Listing an NFT for Sale

1. In the Remix "Deploy & Run Transactions" panel, select your contract and the listTokenForSale function.
2. Provide the following example values:
    - `tokenId`: The ID of the NFT you want to list for sale (e.g., the ID of the NFT you minted earlier).
    - `price`: The price at which you want to sell the NFT. You can specify this value in Wei or Ether. Example: 0.1 Ether.
3. Click the "Transact" button. This will list the NFT for sale at the specified price.

## Buying an NFT

1. In the Remix "Deploy & Run Transactions" panel, select your contract and the buyToken function.
2. Provide the following example values:
    - `tokenId`: The ID of the NFT you want to buy (should match the one listed for sale).
    - `price`: The price of the NFT as specified when listing it for sale. Make sure you send at least this amount in the transaction.
    - `buyer`: Address of the account buying the NFT. Use one of the available addresses in Remix.
3. Click the "Transact" button. This will complete the purchase, transfer the NFT, and handle royalties as per your contract's logic.

Please remember to replace the example values with actual values you want to use in your testing. Additionally, ensure that you're connected to the correct network in Remix for testing on the desired network (e.g., JavaScript VM for local testing).
# Integrating IPFS in Your NFT Marketplace

To upload images using IPFS in your NFT marketplace, you'll need to use an external IPFS client or library in your application. The smart contract itself doesn't have the IPFS upload functionality. Here's a high-level overview of how to integrate IPFS into your NFT marketplace application:

## Set Up an IPFS Node

First, you need to set up or connect to an IPFS node. You have a few options:

- Run your own IPFS node.
- Use a public IPFS gateway.
- Use an IPFS service provider.

## Upload Images to IPFS

You'll need to create a function in your application (outside of the smart contract) that takes an image file as input and uploads it to IPFS. You can use the IPFS JavaScript API or a library like ipfs-http-client to achieve this. Here's a simplified example of how to upload an image to IPFS using ipfs-http-client:

```javascript
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient('http://localhost:5001'); // Connect to your IPFS node

async function uploadImageToIPFS(imageFile) {
  try {
    const results = await ipfs.add(imageFile);
    const imageURI = results.path;
    return imageURI;
  } catch (error) {
    console.error('IPFS upload failed:', error);
    throw error;
  }
}
   ```
## Call the Upload Function in Your Application

Whenever a user wants to mint an NFT and associate an image with it, follow these steps in your application:

1. Call the `uploadImageToIPFS` function with the image file as input.
2. After uploading, you'll receive an IPFS URI.

Here's an example of how to achieve this:

```javascript
const imageURI = await uploadImageToIPFS(imageFile); // Upload the image to IPFS
await nftMarketplace.mint(accounts[0], imageURI, royalty);
```

By following these steps, you can upload images to IPFS and associate them with NFTs minted in your marketplace. When users buy NFTs, they can retrieve the image metadata by accessing the token's URI on IPFS. Please note that you should handle error handling, IPFS node availability, and pinning your data on IPFS for permanent availability in a production application.
