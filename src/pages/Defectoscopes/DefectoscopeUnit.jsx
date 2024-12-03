import { Box, Container, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const DefectoscopeUnit = () => {
    return (
        <Container maxW="container.2xl">
            <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
                Defektoskoplar bo‘linmasi
            </Heading>

            <Box as="div" mt={20}>
                <Outlet />
            </Box>
        </Container>
    );
};