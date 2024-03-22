"use client"
import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const UserRegistrationForm = () => {
  const [nameFid, setNameFid] = useState("");
  const [imgRing, setImgRing] = useState("");
  const [buttonTitle, setButtonTitle] = useState("");
  const [fee, setFee] = useState("");

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
    alignItems={"center"}
  >
    <Container maxW="container.sm">
      <VStack spacing={4} align="stretch">
        <Heading>Register your custom frame</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={nameFid}
            onChange={(e) => setNameFid(e.target.value)}
            required
            rounded={"sm"}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Image Ring</FormLabel>
          <Input
            type="text"
            value={imgRing}
            onChange={(e) => setImgRing(e.target.value)}
            required
            rounded={"sm"}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Button Title</FormLabel>
          <Input
            type="text"
            value={buttonTitle}
            onChange={(e) => setButtonTitle(e.target.value)}
            required
            rounded={"sm"}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Fee</FormLabel>
          <Input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            required
            rounded={"sm"}
            overflow={"hidden"}
            bg="white"
            border={"1px"}
            borderColor="black"
          />
        </FormControl>
        <Button
          rounded={"sm"}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
        >
          Submit
        </Button>
      </VStack>
    </Container>
    </Stack>
  );
};
