import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    baseSepolia: {
      url: 'https://sepolia.base.org',
      accounts: [(process.env.TEST_PRIVATE_KEY as `0x`) || ""],
      gasPrice: 1500000000,
    }
  },
  etherscan: {
    apiKey: {
            "base-mainnet": process.env.ETHERSCAN_API_KEY || "",
      //"base-sepolia": process.env.ETHERSCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "base-mainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org/",
        },
      },
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;
