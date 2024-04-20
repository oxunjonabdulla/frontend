import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { AutoDalolatnoma, DailyTable } from "../components";

export const AutomobileUnit = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return "<VU_31 />";
      case "Component2":
        return <AutoDalolatnoma />;
      default:
        return <DailyTable />;
    }
  };
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Avtobirikma bo‘linmasi
      </Heading>

      <Box as="div">
        <Flex
          justify={"center"}
          my={12}
          gap="3"
          rounded={"md"}
          overflow={"auto"}
          p={4}
        >
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component1" ? "solid" : "outline"}
            // onClick={() => setActiveComponent("Component2")}
          >
            ВУ-22
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component2" ? "solid" : "outline"}
            onClick={() => setActiveComponent("Component2")}
          >
            Кириш ва чиқиш назорати
          </Button>
        </Flex>

        <Box
          as="div"
          bg={"#ffff"}
          my={8}
          p={8}
          mx="auto"
          rounded={"lg"}
          position={"relative"}
        >
          {renderComponent()}
        </Box>
      </Box>
    </Container>
  );
};
