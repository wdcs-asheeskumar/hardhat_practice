//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token {
    string public name = "My Hardhat Token";
    string public symbol = "MHT";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event approvalAmount(address owner, address spender, uint value);

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    function transferTokenFrom(address address1, address address2, uint256 amount) external {
        return transferFrom(address1, address2, amount);
    }

//     function transferFrom(address from, address to, uint value) public returns(bool){
//     require(to != address(0), "ERC20 token transfered to zero address");
//     require(value <= balances[from], "Insuffecient funds");
//     require(value <= allowance[from][msg.sender], "Insuffecient funds");
//     balances[from] -= value;
//     balances[to] += value;
//     allowance[from][to] -=value;
//     emit approvalAmount(from, to, value);
//     return true;

// }

}