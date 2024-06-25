import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import {
  DailyTable,
  Fraza_wheel,
  VU_22,
  VU_50,
  VU_51,
  VU_53,
  VU_54,
  VU_90,
  VU_91,
  VU_92,
  VU_93,
  WheelDalolatnoma,
} from "../components";

export const WheelPairsPage = () => {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("static_compnent_wheel")
      ? localStorage.getItem("static_compnent_wheel")
      : null
  );
  const getLocalActiveComp = (component) => {
    localStorage.setItem("static_compnent_wheel", component);

    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "vu22":
        return <VU_22 />;
      case "fraza_wheel":
        return <Fraza_wheel />;
      case "vu50":
        return <VU_50 />;
      case "vu51":
        return <VU_51 />;
      case "vu53":
        return <VU_53 />;
      case "vu54":
        return <VU_54 />;
      case "vu90":
        return <VU_90 />;
      case "vu91":
        return <VU_91 />;
      case "vu92":
        return <VU_92 />;
      case "vu93":
        return <VU_93 />;
      case "chech_passport":
        return <WheelDalolatnoma />;
      default:
        return <DailyTable />;
    }
  };
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        G‘ildirak juftlikalar bo‘linmasi
      </Heading>

      <Box as="div">
        <Flex
          justify={"center"}
          my={12}
          gap="3"
          rounded={"md"}
          flexWrap={"wrap"}
          overflow={"auto"}
          p={4}
        >
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu22" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu22")}
          >
            ВУ-22
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "fraza_wheel" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("fraza_wheel")}
          >
            ФРАЗА
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu50" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu50")}
          >
            ВУ-50
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu51" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu51")}
          >
            ВУ-51
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu53" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu53")}
          >
            ВУ-53
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu54" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu54")}
          >
            ВУ-54
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu90" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu90")}
          >
            ВУ-90
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu91" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu91")}
          >
            ВУ-91
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu92" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu92")}
          >
            ВУ-92
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "vu93" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("vu93")}
          >
            ВУ-93
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "chech_passport" ? "solid" : "outline"}
            onClick={() => getLocalActiveComp("chech_passport")}
          >
            Кириш ва чиқиш далолатномаси
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
