import { Button, Flex, Heading, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ERROR } from "../assets/images";

const NotFoundPage = () => {
  return (
    <Flex
      as="div"
      justify={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      flexDir={"column"}
      color={"#F0F2F7"}
      gap={10}
    >
      <Img src={ERROR} width={"300px"} />
      <Heading as={"h1"} size={"xl"} color={"gray.500"}>
        Ooops Sahifa topilmadi.
      </Heading>
      <Link to={"/"}>
        <Button colorScheme="teal">Ortga Qaytish</Button>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
