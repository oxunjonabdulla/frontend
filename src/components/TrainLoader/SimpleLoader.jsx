import { Flex } from "@chakra-ui/react";

export const SimpleLoader = () => {
  return (
    <Flex justify={"center"} my={14}>
      <div className="container_bro">
        <div className="track"></div>
        <div className="train"></div>
      </div>
    </Flex>
  );
};
