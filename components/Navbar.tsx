"use client";
import { Button, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export const Navbar = () => {
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
          Shareme 🥳
        </Heading>
      </Link>
      <Button
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        Login
      </Button>
    </HStack>
  );
};
