import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { NavigateWithPath } from "./roleTest";
import { useEffect } from "react";

export const ErrorSend = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { data } = NavigateWithPath();

  useEffect(() => {
    if (data) {
      toast({
        status: "warning",
        title:
          "Siz mumkun bulmagan sahifadan boshqa sahifaga yo'naltirildingiz",
        position: "top-right",
      });
      navigate(data?.path);
    }
  }, [data, navigate, toast]);

  return (
    <Flex
      flexDir={"column"}
      mt={24}
      justifyContent={"center"}
      align={"center"}
      gap={5}
    >
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        color="orange"
        fontSize={"10rem"}
        bounce
      />
      <Heading size={"xl"} textAlign={"center"}>
        Sizga bu bo&apos;lim uchun ruxsat yo&apos;q
      </Heading>

      <Link to={"/"}>
        <Button variant="solid"> Bosh sahifaga qaytish</Button>
      </Link>
    </Flex>
  );
};

export default ErrorSend;
