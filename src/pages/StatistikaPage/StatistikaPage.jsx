import { Box, Container, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const StatistikaPage = () => {
  return (
    <Container maxW="container.2xl">
      <Heading size={"lg"} textAlign={"center"} mt={14} fontWeight={500}>
        Statistika va hisobga olish bo‘limi
      </Heading>

      <Box as="div" mt={20}>
        <Outlet />
      </Box>
    </Container>
  );
};
