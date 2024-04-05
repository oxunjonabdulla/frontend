import { Box, Button, Heading, Tooltip } from "@chakra-ui/react";
import { memo } from "react";
import { BrendCrumbs } from "../BrendCrumbs/BrendCrumbs";

export const MainHeads = memo(function MainHeads({ title, children, onOpen }) {
  return (
    <Box
      as="div"
      bg={"#ffff"}
      my={8}
      mx="auto"
      rounded={"lg"}
      position={"relative"}
    >
      <Heading as={"h3"} size={"lg"} mb={5} textAlign={"center"}>
        {title}
      </Heading>
      <BrendCrumbs />

      <Tooltip
        label={title + " qo'shish"}
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
        <Button
          borderRadius={"50%"}
          colorScheme="teal"
          width={"50px"}
          height={"50px"}
          position={"absolute"}
          right={3}
          top={-12}
          onClick={onOpen}
        >
          +
        </Button>
      </Tooltip>

      {children}
    </Box>
  );
});
