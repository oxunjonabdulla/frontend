import { Flex } from "@chakra-ui/react";
import "./styled_loader.css";

export const TrainLoader = () => {
  return (
    <Flex
      justify={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
      bgColor={"#fff"}
    >
      <div className="container_bro">
        <div className="track"></div>
        <div className="train"></div>
      </div>
    </Flex>
  );
};
