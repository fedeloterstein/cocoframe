"use client";
import {
  Button,
  Code,
  Divider,
  HStack,
  Heading,
  Kbd,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { formatEther } from "viem";
import abi from "../abis/ProxyPay.json";
import { useWriteContract } from "wagmi";
import Image from "next/image";

const CONTRACT = (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x`) || "";

export const ActiveUser = ({ user, balance = 0, address }: any) => {
  const { writeContract } = useWriteContract();
  return (
    <HStack
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      p={10}
      gap={[null, 5, 10]}
      alignItems={"center"}
      flexDirection={["column-reverse", null, "row"]}
    >
      {user?.[3] && user?.[2] && user?.[1] && (
        <>
          <Stack w={["100%", null, "60%"]}>
            <Heading>Frame data:</Heading>
            <Text>✅ FDI: {user?.[0]}</Text>
            <Text>✅ Img: {user?.[1]}</Text>
            <Text>✅ Title Button: {user?.[2]}</Text>
            {user?.[3] && <Text>✅ Fee: {formatEther(user?.[3])}</Text>}
            <Divider />
            <Heading>Your balance: {formatEther(balance)} ETH</Heading>
            <Button
              rounded={"sm"}
              my={5}
              mx={[0, 5]}
              overflow={"hidden"}
              bg="white"
              border={"1px"}
              borderColor="black"
              boxShadow={useColorModeValue("6px 6px 0 blue", "6px 6px 0 cyan")}
              isDisabled={balance <= 0}
              onClick={() =>
                writeContract({
                  abi: abi.abi,
                  address: CONTRACT,
                  functionName: "withdraw",
                })
              }
            >
              Withdraw in Base
            </Button>
            <Divider />
            <Heading>URL frame:</Heading>
            <Code colorScheme='red' children={`https://hat-store-frame-indol.vercel.app/api/${formatEther(
                user?.[3]
              )}/${address}/${user?.[1]}/${user?.[1]}`} />
    
        
          </Stack>
          <Stack w={["100%", null, "40%"]}>
            <Text>🌈 Frame preview:</Text>
            <Stack border={"3px solid black"} w={"250px"} p={2}>
              <Image
                alt=""
                src={`https://aquamarine-many-porcupine-944.mypinata.cloud/ipfs/${user?.[1]}`}
                width={250}
                height={250}
              />
              <HStack>
                <Button fontSize={"10px"}>
                  {user?.[2]}
                  {formatEther(user?.[3])} ETH{" "}
                </Button>
                <Button fontSize={"10px"}>Register in Frame</Button>
              </HStack>
            </Stack>
          </Stack>
        </>
      )}
    </HStack>
  );
};
