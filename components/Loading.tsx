import { CircularProgress, Stack } from "@chakra-ui/react";
import React from "react";

export const Loading = () => {
  return (
    <Stack justify={"center"} align={"center"} h={"100vh"} w={"100%"}>
      <CircularProgress isIndeterminate color="green.300" />
    </Stack>
  );
};
