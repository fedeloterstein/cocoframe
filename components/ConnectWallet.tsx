"use client"
import { Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react'

export const ConnectWallet = () => {

    const { openConnectModal } = useConnectModal();
  return (
    <Stack align={'center'} pt={20}>

    <Heading textAlign={'center'}>Create, customize and share Frames without code 🌈</Heading>
    <Text textAlign={'center'}>Connect your wallet to get started</Text>
    <Button
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      onClick={openConnectModal}
    >
      Login
    </Button>
  </Stack>
  )
}
