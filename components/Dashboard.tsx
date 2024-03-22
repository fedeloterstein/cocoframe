"use client";
import React from "react";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { useAccount, useReadContract } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";
import abi from "../abis/ProxyPay.json";
import { ActiveUser } from "./ActiveUser";
import { formatEther } from "viem";

export const Dashboard = () => {
  const account = useAccount();

  const result = useReadContract({
    abi: abi.abi,
    address: "0x9527e437890f5b4a838b855a58524441be4c7bfe",
    functionName: "getUserData",
    args: ["0xf3789C63EA8856F57EfF0D346Acf5a6F5acD0cDE"],
  });

  const balance = useReadContract({
    abi: abi.abi,
    address: "0x9527e437890f5b4a838b855a58524441be4c7bfe",
    functionName: "getBalance"
  });


  const user = result.data;

  if (Array(user)[0] !== "") {
    return <ActiveUser user={user} balance={balance?.data} />;
  }
  if (!account.address) {
    return <ConnectWallet />;
  }
  return <UserRegistrationForm data={result.data} />;
};
