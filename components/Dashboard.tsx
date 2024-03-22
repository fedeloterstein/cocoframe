"use client";
import React from "react";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { useAccount, useReadContract } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";
import abi from "../abis/ProxyPay.json";
import { ActiveUser } from "./ActiveUser";

export const Dashboard = () => {
  const account = useAccount();

  const result = useReadContract({
    abi: abi.abi,
    address: "0x9527e437890f5b4a838b855a58524441be4c7bfe",
    functionName: "getUserData",
    args: [account.address],
  });

  const balance = useReadContract({
    abi: abi.abi,
    address: "0x9527e437890f5b4a838b855a58524441be4c7bfe",
    functionName: "getBalance"
  });


  if (!account.address) {
    return <ConnectWallet />;
  }
  return <UserRegistrationForm data={result.data} balance={balance.data} />;
};
