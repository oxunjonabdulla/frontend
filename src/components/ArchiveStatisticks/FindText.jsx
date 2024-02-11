import { Flex, Heading } from "@chakra-ui/react";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FindText = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      gap={5}
      style={{ fontSize: "3rem" }}
      flexDir={"column"}
    >
      <FontAwesomeIcon icon={faGear} spin size="2xl" />

      <Heading textAlign={"center"} size={"md"} color={"gray.700"}>
        Filtirlash bo&apos;limidan o&apos;zingizga maqul bo&apos;lgan turni
        tanlab qidiring.
      </Heading>
    </Flex>
  );
};
