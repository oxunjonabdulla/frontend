import { Text } from "@chakra-ui/react";

export const IsImzo = ({ isImzo }) => {
  return (
    !isImzo ? (
            <Text textAlign={"center"} textColor={"red"}>
                {" "}
                Imzo qo&#39;yilmagan{" "}
            </Text>
        ) : (
            <Text textAlign={"center"} textColor={"green"}>
                {" "}
                Imzo qo&#39;yilgan{" "}
            </Text>
        )
    );
};