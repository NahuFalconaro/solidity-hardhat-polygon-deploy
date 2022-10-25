import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ethers } from "hardhat";
require('dotenv').config();
// task("accounts", "Print the list of accounts", async ()=>{
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// })
const mnemonic: string | undefined = process.env.API_SECRET_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks:{
    matictest:{
      url: process.env.NODE_MATIC_TEST || "https://nd-570-229-712.p2pify.com/e6d60904be8c249873ed54b9170e4706",
      accounts: [
        mnemonic!,
      ]
    }
  }
};

export default config;
