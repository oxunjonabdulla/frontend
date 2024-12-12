import { Text } from "@chakra-ui/react";

export const IsImzo = ({ isImzo }) => {
  return (
    <Text textAlign={"center"} textColor={isImzo ? "green" : "red"}>
      Imzo qo&#39;yil{isImzo ? "gan" : "magan"}
    </Text>
  );
};