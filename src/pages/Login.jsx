import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { login } from "../Service/authService";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import ParticlesBg from "particles-bg";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();

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
        isClosable: true,
        position: "top-right",
        fontSize: "7px",
      });
    }
  };

  return (
    <Container maxW="lg">
      <ParticlesBg type="cobweb" bg={true} />
      <Flex
        justify={"center"}
        align={"center"}
        h="100vh"
        flexDir={"column"}
        gap={5}
      >
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={"xl"}>Profilga kirish</Heading>
          </Stack>
        </Stack>
        <Box
          py={10}
          px={12}
          bg="#fff"
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
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
                  <Input
                    id="passwordID"
                    type="password"
                    borderColor={"gray.500"}
                    placeholder="Parol"
                    {...register("password", { required: "Parol kiritilmadi" })}
                  />
                  <FormErrorMessage>
                    <FormErrorIcon /> {errors?.password?.message}
                  </FormErrorMessage>
                </FormControl>
              </Stack>

              <Stack spacing="6">
                <Button
                  type="submit"
                  display={"flex"}
                  alignItems="center"
                  variant={"solid"}
                  gap={2}
                  isLoading={loading}
                  loadingText="Kirish"
                  spinnerPlacement="end"
                >
                  Kirish
                </Button>

                <Text w={"100%"} fontSize={"md"} color="fg.muted">
                  Parol esingizdan chiqdimi, murojat uchun <br />
                  <FontAwesomeIcon color="#2C5282" icon={faPhoneVolume} shake />
                  <Text
                    textDecoration={"underline"}
                    ml={2}
                    color={"blue.700"}
                    as={"a"}
                    href="tel:+998 90 517 3007"
                  >
                    +998 90 517 3007
                  </Text>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};
