//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
/// @title A Token contract 
/// @author Ashees Kumar
/// @notice You can use this contract only for checking balance and transfer of token
/// @dev We have created a token of name "MyPersonalToken" with the symbol "MPT"
/// @custom This contract is created to understand the testing of smart contract"
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token {
    string public name = "MyPersonalToken";
    string public symbol = "MPT";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

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
}
