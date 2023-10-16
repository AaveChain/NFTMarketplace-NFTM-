// module.exports = function(callback) {
//   const HDWalletProvider = require('truffle-hdwallet-provider');
//   const Web3 = require('web3');
//   const prompt = require('prompt');
//   const ethers = require('ethers');

// const provider = new HDWalletProvider(
//     process.env.MNEMONIC,
//     process.env.RPC_URL
// );

// const authenticateUser = async () => {
//     // Initialize an Ethereum JSON-RPC provider with the HDWalletProvider
//     const providerWithSigner = new ethers.JsonRpcProvider(process.env.RPC_URL);
//     const wallet = new ethers.Wallet(process.env.MNEMONIC, providerWithSigner);

//     // Retrieve the user's MetaMask account
//     const accounts = await providerWithSigner.listAccounts();
//     const userAddress = accounts[0];

//     console.log('Connected to MetaMask with account:', userAddress);

//     // Prompt the user to sign a message
//     prompt.start();
//     prompt.get(['messageToSign'], async (err, result) => {
//         if (err) {
//             console.error('Error:', err);
//             return;
//         }

//         // Sign the message using MetaMask
//         const message = result.messageToSign;
//         try {
//             const signature = await wallet.signMessage(message);
//             console.log('Message Signature:', signature);

//             // You can now send the signature to your server for verification.
//             // The server can verify the signature using the user's public address.
//             // On the server, you can use ethers to verify the signature:
//             const recoveredAddress = ethers.utils.verifyMessage(message, signature);
//             if (recoveredAddress === userAddress) {
//                 console.log('Signature verified. User is authenticated.');
//             } else {
//                 console.error('Signature verification failed. User not authenticated.');
//             }

//         } catch (error) {
//             console.error('Signing message failed:', error);
//         }
//     });
// };

// authenticateUser(callback);
// };
