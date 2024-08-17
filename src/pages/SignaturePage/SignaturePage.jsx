/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Heading } from "@chakra-ui/react";

import { SignatureTable } from "./Table";

export const SignaturePage = () => {
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Imzolash kerak bo'lgan jo'rnallar ma'lumtolari ro'yxati
      </Heading>
      <Box as="div">
        <Box
          as="div"
          bg={"#ffff"}
          my={8}
          p={8}
          mx="auto"
          rounded={"lg"}
          position={"relative"}
        >
          <SignatureTable />
        </Box>
      </Box>
    </Container>
  );
};
