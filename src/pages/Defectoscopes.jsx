import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { DailyTable } from "../components";

export const Defectoscopes = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const renderComponent = () => {
    switch (activeComponent) {
      case "Component1":
        return "<VU_31 />";
      case "Component2":
        return "<TrainType />";
      default:
        return <DailyTable />;
    }
  };
  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Defektoskoplar
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
            Нуқсонларни рўйхатга олиш китоби
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
