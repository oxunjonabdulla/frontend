import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { PtoArxiv, PtoOperator } from "../../components";
import { useState } from "react";
import UserApi from "../../Service/module/userModule.api";

export const PtoUnit = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const deleateCarriage = async (id) => {
    const { response } = await new UserApi().deleteCarriage(id);
    if (response) window.location.reload();
  };

  const renderComponent = () => {
    if (activeComponent === "Component1") return <PtoOperator />;
    return <PtoArxiv deleateCarriage={deleateCarriage} />;
  };

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        PTO Operator
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
            onClick={() => setActiveComponent(null)}
            colorScheme="teal"
            variant={activeComponent === null ? "solid" : "outline"}
          >
            VU-23 Arxiv
          </Button>
          <Button
            colorScheme="teal"
            variant={activeComponent === "Component1" ? "solid" : "outline"}
            onClick={() => setActiveComponent("Component1")}
          >
            VU-23 qo&apos;shish
          </Button>
        </Flex>
        {renderComponent()}
      </Box>
    </Container>
  );
};
