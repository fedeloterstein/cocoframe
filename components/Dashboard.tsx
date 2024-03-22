"use client";
import React from "react";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { useAccount } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";

export const Dashboard = () => {
  const account = useAccount();

  if (!account.address) {
    return <ConnectWallet />;
  }
  return <UserRegistrationForm />;
};
