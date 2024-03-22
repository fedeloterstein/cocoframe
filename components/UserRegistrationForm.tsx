"use client";
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
import { useWriteContract } from "wagmi";
import abi from "../abis/ProxyPay.json";
import { parseEther } from "viem";
import { ActiveUser } from "./ActiveUser";

export const UserRegistrationForm = ({ data, balance }: any) => {

  if (data?.[0] !== "") {
    return <ActiveUser user={data} balance={balance} />;
  }
  const { writeContract } = useWriteContract();

  const [formData, setFormData] = useState({
    fdi: "",
    img: "",
    buttonTitle: "",
    fee: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormDataEmpty = Object.values(formData).some((value) => value === "");

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
            <FormLabel>Fdi</FormLabel>
            <Input
              type="text"
              name="fdi"
              value={formData.fdi}
              onChange={handleInputChange}
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
              name="img"
              value={formData.img}
              onChange={handleInputChange}
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
              name="buttonTitle"
              value={formData.buttonTitle}
              onChange={handleInputChange}
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
              name="fee"
              value={formData.fee}
              onChange={handleInputChange}
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
            isDisabled={isFormDataEmpty}
            onClick={() =>
              writeContract({
                abi: abi.abi,
                address: "0x9527e437890f5b4a838b855a58524441be4c7bfe",
                functionName: "registerUser",
                args: [
                  formData.fdi,
                  formData.img,
                  formData.buttonTitle,
                  parseEther(`${formData.fee}`),
                ],
              })
            }
          >
            Submit
          </Button>
        </VStack>
      </Container>
    </Stack>
  );
};
