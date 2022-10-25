// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Banco{

  constructor(){

  }

  function incrementBalance(uint amount) payable public{
    require(msg.value == amount);
  }
  function getBalance() public{
    payable(msg.sender).transfer(address(this).balance);
  }
}
