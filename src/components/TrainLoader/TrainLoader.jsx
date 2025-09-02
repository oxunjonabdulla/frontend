import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import "./styled_loader.css";

export const TrainLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4000); // 4 seconds for smoother animation
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      width="100%"
      bg="#fff"
    >
      <div className="train-container">
        <div className="railway-line"></div>
        <div className="train-body">
          <div className="train-head"></div>
          <div className="train-windows"></div>
        </div>
      </div>
    </Flex>
  );
};
