const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
    it("Deployment should assign the total supply to the owner", async function () {
        const [owner] = await ethers.getSigners(); // assigning account to the owner
        // console.log("Owner",owner);
        const Token = await ethers.getContractFactory("Token"); // creating an instance of the contract
        const hardhatToken = await Token.deploy(); // deployment of contract
        const ownerBalance = await hardhatToken.balanceOf(owner.address); // checking balance of the contract by calling balanceOf function through the instance of contract
        // console.log("Owner balance:", ownerBalance);
        // console.log("Owner Address:", owner.address);
        const result = expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        // console.log("result of testing", result);
    });

    it("Transfer token from owner address to another", async () => {
        const [owner, transferAddress] = await ethers.getSigners();
        // console.log("owner address, transfer address", owner, transferAddress);

        const Token = await ethers.getContractFactory("Token");
        const hardhatToken = await Token.deploy();
        const tranferToken = await hardhatToken.transfer(transferAddress.address, 10);
        const result = expect(await hardhatToken.balanceOf(transferAddress)).to.equal(10);
        // console.log("result:", result);
    });
});


// Testing
/*
   describe() and it() blocks are used to test the condition which is the part of "Mocha" framework
   It helps in organising the test cases and checking them in order in which we want
   It also helps in writing the test cases in a more readable way
   descrive() : Here first we have to write a "test suite" and  then a function in which we will be performing operations.
   it() : This function has a string descrbing the function and then a function to perform operations
   there can be multiple it() in describe() function.
   expect() : This function is used to check wether the desired result is achieved or not
   First assign the address to the owner 
   Then create an instance of the Token contract
   Then by using the instance of the contract we can call any function that is the part of that contract
   Then we can check wether the desired result is achieved or not using expect().
*/