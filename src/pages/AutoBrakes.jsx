import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { DailyTable, VU_47 } from "../components";

export const AutoBrakes = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return "<VU_31 />";
      case "vu_47":
        return <VU_47 />;
      default:
        return <DailyTable />;
    }
  };

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Avtotormozlar bo‘linmasi
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
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            ВУ-22
          </Button>
          <Button
            variant={activeComponent === "vu_47" ? "outline_active" : "outline"}
            onClick={() => setActiveComponent("vu_47")}
          >
            ВУ-47
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Avtorejimlarni ro‘yxatga olish
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Avtoregulyatorlarni ro‘yxatga olish
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Razobshitelniy kranlarni ro‘yxatga olish jurnali{" "}
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Avtoregulyatorlarni ro‘yxatga olish
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Rukavalarni ro‘yxatga olish jurnali
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            // onClick={() => setActiveComponent("Component2")}
          >
            Rezervuar, tormoz silindr va ishchi kameralarni ro‘yxatga olish
            kitobi
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
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
