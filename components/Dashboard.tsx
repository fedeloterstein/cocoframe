"use client";
import React from "react";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { useAccount, useReadContract } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";
import abi from "../abis/ProxyPay.json";

const CONTRACT = process.env.CONTRACT_ADDRESS as `0x` || ""

export const Dashboard = () => {
  const account = useAccount();

  const result = useReadContract({
    abi: abi.abi,
    address: CONTRACT,
    functionName: "getUserData",
    args: [account.address],
  });

  const balance = useReadContract({
    abi: abi.abi,
    address: CONTRACT,
    functionName: "getBalance"
  });


  if (!account.address) {
    return <ConnectWallet />;
  }
  return <UserRegistrationForm data={result.data} balance={balance.data} address={account.address} />;
};
