"use client";
import {
  Button,
  HStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import React from "react";
import { useAccount } from "wagmi";
import { FaUsers, FaGithub, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  const account = useAccount();

  return (
    <HStack p={3} justify={"space-between"}>
      <Link href={"/"}>
        <Heading
          rounded={"sm"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
          p={1}
        >
          CocoFrame 🥥
        </Heading>
      </Link>
  
      <HStack      flexDirection={["column", null, "row"]}>
      <Link href={"/explore"}>
        <HStack>
          <FaUsers />
          <Text>Explore Users</Text>
        </HStack>
      </Link>
        <Link href={"https://github.com/"} target="_blank">
          <HStack>
            <FaGithub />
            <Text>Github</Text>
          </HStack>
        </Link>
        <Link
          href={
            "https://base-sepolia.blockscout.com/address/0xFAF361A1282239315cBC654839AE41D93ef859Cb"
          }
          target="_blank"
        >
          <HStack>
            <FaSearch />
            <Text>Contract</Text>
          </HStack>
        </Link>
        {account.address && <ConnectButton />}
      </HStack>
    </HStack>
  );
};
