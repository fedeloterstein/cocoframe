import { HStack, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "QmfRxdC8xwY14hecCeRyqnCh84ePbUvYTVuEH39vRLuqAw",
  "QmQ7F6s5jqrLGF7gZN2yuLUA3m3GguX3k3biC33TAyugLG",
  "QmVcQxjR5KYAHb5KfCmmphHvbjajFfKiQhFyYKhW8mR2Y1",
];
export const CardImages = ({handleImgChange, selected}: any) => {

   

  return (
    <HStack
      p={5}
      w={"100%"}
      justify={"space-around"}
      flexDirection={["column", null, "row"]}
    >
      {images.map((img, index) => (
        <Stack key={index} border={selected === img ? 'solid 2px blue' : undefined}       onClick={() => handleImgChange(img)} >
          <Image
            alt=""
            src={
              `https://aquamarine-many-porcupine-944.mypinata.cloud/ipfs/${img}`
            }
            width={150}
            height={150}
      
          />
        </Stack>
      ))}
    </HStack>
  );
};
