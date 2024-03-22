"use client"
import { Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { UserRegistrationForm } from './UserRegistrationForm'

export const Dashboard = () => {
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
    flexDirection={["column", null, "row"]}
    p={10}
    gap={[null, 5, 10]}
  >
    <Heading>Register</Heading>

    <UserRegistrationForm />
  </Stack>
  )
}
