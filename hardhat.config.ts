import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const GOERLI_RPC_URL = process.env.INFURA_GOERLI_ENDPOINT || "";


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY]
    }
  },
};

export default config;
