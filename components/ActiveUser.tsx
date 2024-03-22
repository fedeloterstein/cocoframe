"use client"
import { Button, Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { formatEther } from 'viem';

export const ActiveUser = ({user, balance = 0}: any) => {
    
  return (
    <Stack
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
  >
    <Heading>Frame data:</Heading>
    <Text>FDI: {user?.[0]}</Text>
    <Text>Img: {user?.[1]}</Text>
    <Text>Title Button: {user?.[2]}</Text>
    {user?.[3] && <Text>Fee: {formatEther(user?.[3])}</Text>}
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
          >
            Withdraw
          </Button>
          <Divider />
          <Heading>URL frame:</Heading>
          <Text>https://hat-store-frame-indol.vercel.app/api</Text>

  </Stack>
  )
}
