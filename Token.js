/// @title Testing of Token contract  
/// @author Ashees Kumar
/// @notice This contract performs the testing for the Token contract 
/// @dev Chai and Mocha frameworks are used for testing and ethers are imported through Hardhat

const { expect } = require("chai");
const { ethers } = require("hardhat");
/// @dev "describe" block is imported from Mocha framework and it is used to define a test suite.
/// @dev "describe" takes two parameters, first a string for test suite and second a function for perfoming task
/// @dev "it" also takes two parameters first a string for defining the test case and then a funtion for performing task
/// @dev There can be multiple "it" block within one "describe" block
/// @dev "describe" and "it" blocks are part of Mocha framework and they are useful for organizing and structuring the test cases 
describe("Token", function () {
    it("Deployment should assign the total supply to the owner", async function () {
        const [owner] = await ethers.getSigners(); /// @notice assigning account to the owner
        const Token = await ethers.getContractFactory("Token"); /// @notice creating an instance of the contract
        const hardhatToken = await Token.deploy(); /// @notice deployment of contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address); /// @notice checking balance of the contract by calling balanceOf function through the instance of contract
        const result = expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });

    it("Transfer token from owner address to another", async () => {
        const [owner, transferAddress] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
        const tranferToken = await hardhatToken.transfer(transferAddress.address, 10);
        const result = expect(await hardhatToken.balanceOf(transferAddress)).to.equal(10);
    });
});
