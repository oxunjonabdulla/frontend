import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { DailyTable, Dalolatnoma, VU_22, VU_68 } from "../../components";

export const AssemblyPage = () => {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("collect_page")
      ? localStorage.getItem("collect_page")
      : null
  );

  const getLocalActiveComp = (component) => {
    localStorage.setItem("collect_page", component);

    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return <VU_22 />;
      case "Component5":
        return <DailyTable />;
      case "Component2":
        return <VU_68 />;
      case "Component3":
        return <Dalolatnoma />;
      default:
        return <DailyTable />;
    }
  };
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Yig‘uv bo‘linmasi
      </Heading>

      <Box as="div">
        <Flex
          justify={"center"}
          my={12}
          gap="3"
          rounded={"md"}
          overflow={"auto"}
          flexWrap={"wrap"}
          p={4}
        >
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component5" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("Component5")}
            whiteSpace={"pre-wrap"}
          >
            Bugungi ta'mir
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => getLocalActiveComp("Component1")}
            variant={activeComponent === "Component1" ? "solid" : "outline"}
          >
            ВУ-22
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component2" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("Component2")}
            whiteSpace={"pre-wrap"}
          >
            ВУ-68
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component3" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("Component3")}
          >
            Кириш ва чиқиш назорати далолатномаси
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
