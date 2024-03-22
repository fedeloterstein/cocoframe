"use client"
import { Button, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { useConnectModal } from '@rainbow-me/rainbowkit';
import React from 'react'

export const ConnectWallet = () => {

    const { openConnectModal } = useConnectModal();
  return (
    <Stack align={'center'} pt={20}>
    <Heading>Connect your wallet to get started</Heading>
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
