import { useState } from "react";
import { TableTrain, VU_36, VU_31, Fraza } from "../../components";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const StatistikaPage = () => {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("static_compnent")
      ? localStorage.getItem("static_compnent")
      : null
  );

  const getLocalActiveComp = (component) => {
    localStorage.setItem("static_compnent", component);

    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Component0":
        return <TableTrain />;
      case "Component1":
        return <VU_31 />;

      case "Component2":
        return <VU_36 />;
      // case "Component3":
      //   return <VU_10 />;
      case "Component4":
        return <Fraza />;
      default:
        return <TableTrain />;
    }
  };

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Statistika va hisobga olish bo‘limi
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
            onClick={() => getLocalActiveComp("Component0")}
            variant={
              activeComponent === "Component0" ? "outline_active" : "outline"
            }
          >
            Bugungi ta&apos;mir
          </Button>
          <Button
            onClick={() => getLocalActiveComp("Component1")}
            variant={
              activeComponent === "Component1" ? "outline_active" : "outline"
            }
          >
            VU-31 jurnali
          </Button>

          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => getLocalActiveComp("Component2")}
          >
            VU-36 jurnali
          </Button>
          {/* <Button
            variant={
              activeComponent === "Component3" ? "outline_active" : "outline"
            }
            onClick={() => getLocalActiveComp("Component3")}
          >
            VU-10
          </Button> */}
          <Button
            variant={
              activeComponent === "Component4" ? "outline_active" : "outline"
            }
            onClick={() => getLocalActiveComp("Component4")}
          >
            ФРАЗА
          </Button>

          <Link to={"/statistics/archive"}>
            <Button>Statistika arxiv</Button>
          </Link>
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
