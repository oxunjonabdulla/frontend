import { Button, Flex, Heading } from "@chakra-ui/react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ComplatedPto = () => {
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      my="10"
      alignItems={"center"}
    >
      <FontAwesomeIcon
        icon={faCheck}
        style={{
          border: "1px solid #37BEB0",
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          padding: "10px",
          background: "#37BEB0",
          color: "#A4E5E0",
        }}
        fontSize="100px"
      />

      <Heading mt={"4"} fontSize={"xl"} color={"gray.600"}>
        {" "}
        Vagon Muvaffaqiyatli qo&apos;shildi
      </Heading>
      <Button
        mt={"10"}
        onClick={() => window.location.reload()}
        colorScheme="teal"
      >
        {" "}
        Ortga qaytish
      </Button>
    </Flex>
  );
};
