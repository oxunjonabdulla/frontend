import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { LoginComponent } from "../components";
import { Illust } from "../assets";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login, isAuth } = useAuth();
  const location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    setLoading(true);

    const { response, error } = await login(data);
    setLoading(false);

    if (response) {
      navigate(location.state?.from ? location.state?.from : "/", {
        replace: true,
      });
      reset();
      toast({
        status: "success",
        title: "Profilingizga xo'sh kelibsiz",
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
    if (error) {
      toast({
        status: "error",
        title: error?.detail
          ? error?.detail
          : "Server bilan aloqa o'rnatishni iloji bo'lmadi.",
        duration: 6000,
        position: "top-left",
        isClosable: true,
        fontSize: "7px",
      });
    }
  };
  if (isAuth()) {
    return <Navigate to="/" />;
  }
  return (
    <LoginComponent illustrationBackground={Illust}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        justifyContent="center"
        alignItems="center"
        mb={{ base: "30px", md: "60px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
        bg={["inherit", "rgba(255,255,255,0.7)"]}
        backdropFilter={"blur(10px)"}
        p={10}
        rounded={"lg"}
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Tizimga kirish
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Ismingiz va parolingizni kiriting
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <form onSubmit={handleSubmit(onsubmit)}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl isInvalid={errors?.username}>
                  <FormLabel htmlFor="email">Ismingiz:</FormLabel>
                  <Input
                    id="email"
                    type="email "
                    borderColor={"gray.500"}
                    placeholder="Ismingiz"
                    {...register("username", {
                      required: "Username kiritilmadi",
                    })}
                  />
                  <FormErrorMessage>
                    <FormErrorIcon /> {errors?.username?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors?.password}>
                  <FormLabel htmlFor="passwordID">Parol:</FormLabel>
                  <InputGroup size="md">
                    <Input
                      id="passwordID"
                      borderColor={"gray.500"}
                      type={show ? "text" : "password"}
                      placeholder="Parol"
                      {...register("password", {
                        required: "Parol kiritilmadi",
                      })}
                    />
                    <InputRightElement
                      display="flex"
                      alignItems="center"
                      mt="4px"
                    >
                      <FontAwesomeIcon
                        icon={!show ? faEye : faEyeSlash}
                        onClick={handleClick}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    <FormErrorIcon /> {errors?.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Flex justifyContent="space-between" align="center" mb="24px">
                  <FormControl display="flex" alignItems="center">
                    <Checkbox
                      id="remember-login"
                      colorScheme="teal"
                      me="10px"
                    />
                    <FormLabel
                      htmlFor="remember-login"
                      mb="0"
                      fontWeight="normal"
                      color={textColor}
                      fontSize="sm"
                    >
                      Eslab qolish
                    </FormLabel>
                  </FormControl>
                </Flex>
              </Stack>
            </Stack>
            <Button
              type="submit"
              w={"100%"}
              display={"flex"}
              alignItems="center"
              colorScheme="teal"
              gap={2}
              isLoading={loading}
              loadingText="Kirish"
              spinnerPlacement="end"
              mb={5}
            >
              Kirish
            </Button>
          </form>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Tezkor yordam ximati
              <Link
                color={textColorBrand}
                as="a"
                href="tel:+998 90 517 30 07"
                ms="5px"
                fontWeight="500"
              >
                +998 90 517 30 07
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LoginComponent>
  );
};
