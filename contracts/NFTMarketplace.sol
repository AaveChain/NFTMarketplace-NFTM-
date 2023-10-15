// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable(msg.sender), ReentrancyGuard {
    uint256 public nextTokenId = 1;
    string public baseTokenURI;
    address public admin;

    // Mapping to track NFT listings
    mapping(uint256 => uint256) public tokenPrice;
    mapping(uint256 => address) public tokenSeller;
    mapping(uint256 => uint256) public tokenRoyalty; // Royalty percentage

    constructor(string memory _name, string memory _symbol, string memory _baseTokenURI) ERC721(_name, _symbol) {
        baseTokenURI = _baseTokenURI;
        admin = msg.sender;
    }

    function mint(address to, string memory tokenURI, uint256 royalty) public onlyOwner {
        uint256 tokenId = nextTokenId;
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tokenRoyalty[tokenId] = royalty;
        nextTokenId++;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function listTokenForSale(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "You can only list your own NFTs for sale");
        tokenPrice[tokenId] = price;
        tokenSeller[tokenId] = msg.sender;
    }

    function buyToken(uint256 tokenId) public payable nonReentrant {
        require(tokenPrice[tokenId] > 0, "Token is not listed for sale");
        require(msg.value >= tokenPrice[tokenId], "Insufficient funds sent");
        
        address seller = tokenSeller[tokenId];
        uint256 price = tokenPrice[tokenId];
        uint256 royalty = tokenRoyalty[tokenId];

        // Calculate royalties
        uint256 royaltyAmount = (price * royalty) / 100;

        // Transfer royalties to the original creator
        address creator = ownerOf(tokenId);
        (bool success, ) = payable(creator).call{value: royaltyAmount}("");
        require(success, "Royalty transfer failed");

        // Transfer NFT to the buyer
        _transfer(seller, msg.sender, tokenId);
        
        // Pay the seller the remaining amount after deducting royalties
        (bool sellerSuccess, ) = payable(seller).call{value: price - royaltyAmount}("");
        require(sellerSuccess, "Transfer to seller failed");

        // Clear the listing
        tokenPrice[tokenId] = 0;
        tokenSeller[tokenId] = address(0);
    }
}
