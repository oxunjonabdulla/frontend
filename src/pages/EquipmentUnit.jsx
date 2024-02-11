import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

export const EquipmentUnit = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  // const renderComponent = () => {
  //   switch (activeComponent) {
  //     case "Component1":
  //       return "<VU_31 />";
  //     case "Component2":
  //       return "<TrainType />";
  //     default:
  //       return "Bolim";
  //   }
  // };

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Jixozlash bo‘linmasi
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
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Yuk ko‘tarish kranlari
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Domkratlar
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Tokarlik dastgoxlari
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Yuk ildirish moslamalari
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Elektr qurilmalari
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Rukavalarni ro‘yxatga olish jurnali
          </Button>
          <Button
            variant={
              activeComponent === "Component2" ? "outline_active" : "outline"
            }
            onClick={() => setActiveComponent("Component2")}
          >
            Rejaviy ta’mir
          </Button>
        </Flex>
        {/* 
        <Box
          as="div"
          bg={"#ffff"}
          my={8}
          p={8}
          mx="auto"
          rounded={"lg"}
          shadow={"lg"}
          position={"relative"}
        >
          {renderComponent()}
        </Box> */}
      </Box>
    </Container>
  );
};
