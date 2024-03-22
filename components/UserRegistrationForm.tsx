import { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { ethers } from "ethers";

export const UserRegistrationForm = () => {
  const [nameFid, setNameFid] = useState("");
  const [imgRing, setImgRing] = useState("");
  const [buttonTitle, setButtonTitle] = useState("");
  const [fee, setFee] = useState("");
  const toast = useToast();

  return (
    <Container maxW="container.sm">
      <VStack spacing={4} align="stretch">
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
  );
};
