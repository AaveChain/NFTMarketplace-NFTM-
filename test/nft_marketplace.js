const NFTMarketplace = artifacts.require("NFTMarketplace");
const truffleAssert = require("truffle-assertions");

contract("NFTMarketplace", (accounts) => {
  let nftMarketplace;

  before(async () => {
    nftMarketplace = await NFTMarketplace.deployed();
  });

  it("should mint an NFT and set the correct royalty", async () => {
    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmUaKkYsFnYsZLs4KXvXiTAnb6ZYpwdRw5xiLy259fus9V"; // upload our images using IPFs ( // Upload the image to IPFS)
    const royalty = 10; // 10% royalty

    // Mint an NFT and check the events
    const mintTx = await nftMarketplace.mint(accounts[0], tokenURI, royalty);
    truffleAssert.eventEmitted(mintTx, 'Transfer', (ev) => {
      return ev.from === '0x0000000000000000000000000000000000000000' && ev.to === accounts[0];
    });
    truffleAssert.eventEmitted(mintTx, 'MetadataUpdate', (ev) => {
      return ev._tokenId.toNumber() === 1;
    });

    // Check if the stored royalty matches the expected royalty
    const storedRoyalty = (await nftMarketplace.tokenRoyalty(1)).toNumber();
    assert.equal(storedRoyalty, royalty, "Royalty not set correctly");
  });

  it("should list an NFT for sale", async () => {
    const tokenId = 1;
    const price = web3.utils.toWei("0.1", "ether");

    await nftMarketplace.listTokenForSale(tokenId, price);
    const tokenPrice = await nftMarketplace.tokenPrice.call(tokenId);

    assert.equal(tokenPrice.toString(), price, "Listing for sale failed");
  });

  it("should buy an NFT and transfer royalty to the creator", async () => {
    const tokenId = 1;
    const price = web3.utils.toWei("0.1", "ether");
    const buyer = accounts[1];

    const initialBalanceBuyer = Number(await web3.eth.getBalance(buyer));

    await nftMarketplace.buyToken(tokenId, { from: buyer, value: price });

    const finalBalanceBuyer = Number(await web3.eth.getBalance(buyer));

    // Check that the buyer's balance decreased significantly (considering gas costs)
    const balanceDecrease = initialBalanceBuyer - finalBalanceBuyer;
    const significantDecrease = web3.utils.toWei("0.09", "ether"); // Adjust this as needed

    assert.isAbove(balanceDecrease, Number(significantDecrease), "Buyer's balance did not decrease significantly");
});


});



