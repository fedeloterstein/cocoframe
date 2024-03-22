"use client";
import {
  Button,
  HStack,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BaseLogo } from "./logos/BaseLogo";

export const ProfileDetails = ({ data }: any) => {
  const {
    pfp_url,
    custody_address,
    following_count,
    follower_count,
    bio,
    display_name,
    username,
  } = data;

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
      flexDirection={["column", null, "row"]}
      p={10}
      gap={[null, 5, 10]}
    >
      <Stack w={["100%", "50%"]}>
        <Img
          src={pfp_url}
          roundedTop={"sm"}
          objectFit="cover"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </Stack>
      <Stack
        w={["100%", "50%"]}
        alignItems={"flex-start"}
        h={"100%"}
        minH={"400px"}
        gap={10}
      >
        <HStack
          alignItems={"flex-start"}
          justify={"space-between"}
          w={"100%"}
          flexDirection={["column", null, "row"]}
        >
          <Stack>
            <Heading>{display_name}</Heading>
            <Text>@{username}</Text>
          </Stack>
          <HStack>
            <Stack>
              <Text>Followers</Text>
              <Text>{follower_count}</Text>
            </Stack>
            <Stack>
              <Text>Following</Text>
              <Text>{following_count}</Text>
            </Stack>
          </HStack>
        </HStack>

        <Text>{bio}</Text>
        <HStack
          flexDirection={["column", null, "row"]}
          alignSelf={"center"}
          w={"100%"}
        >
          <Button
            rounded={"sm"}
            my={5}
            mx={[0, 5]}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
            boxShadow={useColorModeValue("6px 6px 0 blue", "6px 6px 0 cyan")}
          >
            Support Base
          </Button>
          <Button
            rounded={"sm"}
            my={5}
            mx={[0, 5]}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
            boxShadow={useColorModeValue("6px 6px 0 red", "6px 6px 0 cyan")}
          >
            Support Optimism
          </Button>
        </HStack>
        <Text alignSelf={"center"}>Total raised: 23 eth</Text>
      </Stack>
    </HStack>
  );
};
