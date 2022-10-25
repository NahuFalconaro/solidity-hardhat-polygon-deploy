import { ethers } from "hardhat";

async function main() {

  const MyContract = await ethers.getContractFactory("MyContract");
  const my_contract = await MyContract.deploy();

  await my_contract.deployed();

  console.log("Mi contrato es deployado en:", my_contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
