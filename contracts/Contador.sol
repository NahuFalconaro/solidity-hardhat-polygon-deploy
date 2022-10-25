// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Contador{

  uint256 count;

  constructor(){
    count = 0;
  }

  function setCount(uint256 _count) public { //accedida externamente por una transaccion e internamente por otro contrato
    count = _count;
  }

  function incrementCount() public {
    count += 1;
  }
  //view y pure no consume gas
  function getCOunt() public view returns(uint256){//view quiere decir que no cambia el estado, solo lee el valor de la variable
    return count;
  }

  function getNumber() public pure returns(uint){//pure = ni escribe ni lee ninguna variable de estado del contrato
    return 34;
  }
}
