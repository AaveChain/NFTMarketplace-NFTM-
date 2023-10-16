// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient('http://localhost:5001'); // Connect to your IPFS node

// async function uploadImageToIPFS(imageFile) {
//   try {
//     const results = await ipfs.add(imageFile);
//     const imageURI = results.path;
//     return imageURI;
//   } catch (error) {
//     console.error('IPFS upload failed:', error);
//     throw error;
//   }
// }

// // Usage example:
// const imageFile = '/path/to/your/image.jpg'; // Provide the path to your image file
// uploadImageToIPFS(imageFile)
//   .then((imageURI) => {
//     console.log('Image uploaded to IPFS. Image URI:', imageURI);
//   })
//   .catch((error) => {
//     console.error('Image upload to IPFS failed:', error);
//   });
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

// Usage example:
const imageFile = '/path/to/your/image.jpg'; // Provide the path to your image file
uploadImageToIPFS(imageFile)
  .then((imageURI) => {
    console.log('Image uploaded to IPFS. Image URI:', imageURI);
  })
  .catch((error) => {
    console.error('Image upload to IPFS failed:', error);
  });
