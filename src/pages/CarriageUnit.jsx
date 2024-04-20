import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import {
  DailyTable,
  CarriageDalolatnoma,
  Fraza_carriunit,
} from "../components";

export const CarriageUnit = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return "<VU_31 />";
      case "Component2":
        return <Fraza_carriunit />;
      case "Component3":
        return <CarriageDalolatnoma />;
      default:
        return <DailyTable />;
    }
  };
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Aravalar bo‘linmasi
      </Heading>
      <Box as="div">
        <Flex
          flexWrap={"wrap"}
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
            onClick={() => setActiveComponent("Component1")}
          >
            ВУ-22
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component2" ? "solid" : "outline"}
            onClick={() => setActiveComponent("Component2")}
          >
            ФРАЗА
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component4" ? "solid" : "outline"}
            onClick={() => setActiveComponent("Component4")}
          >
            ВУ-32
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component3" ? "solid" : "outline"}
            onClick={() => setActiveComponent("Component3")}
          >
            Кириш ва чиқиш назорати
          </Button>
          {/* <Button
          colorScheme="teal"
            variant={
              activeComponent === "Component2" ? "solid" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Араваларнинг техник паспорти
          </Button> */}
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
