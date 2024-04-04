import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { useState } from "react";

export const PtoCompleks = ({ setActiveStep }) => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm();

  const toast = useToast();
  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postCarriageComplectation(
      localStorage.getItem("carriage_number"),
      data
    );
    if (error?.detail === "Страница не найдена.") {
      localStorage.removeItem("carriage_number");

      toast({
        status: "error",
        title: `Vagon raqami bo'yicha komplektatsiyasi xatolik keldi sahifani yangilang`,
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: `Vagon ${localStorage.getItem(
          "carriage_number"
        )} raqami bo'yicha komplektatsiyasi yaratildi`,
        duration: 150000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      JSON.stringify(
        localStorage.setItem("carriage_number", response?.data?.carriage_number)
      );
      setActiveStep(1);
    }
    if (response) {
      localStorage.removeItem("carriage_number");
    }
  };
  return (
    <Container maxW={"container.xl"}>
      <Heading as="h1" fontWeight={400} size={"md"} textAlign={"center"} mb={5}>
        {" "}
        <Text as={"p"} fontSize={"1.8rem"} mb={2} fontWeight={700}>
          Vagon komplektatsiyasi{" "}
        </Text>{" "}
        Vagon Raqami:
        <Text as={"strong"} ml="2">
          {localStorage.getItem("carriage_number")}
        </Text>
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          align={"center"}
          flexDir={"column"}
          my={8}
        >
          <Text fontWeight={700} fontSize={"2xl"} whiteSpace="nowrap">
            Kol/para
          </Text>{" "}
          {Array.from({ length: 4 }).map((_, index) => (
            <Flex key={index} gap={5}>
              <Controller
                name={`kol_para[${index}].factory_number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Zavod raqam"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`kol_para[${index}].number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Raqami"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`kol_para[${index}].year`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="number"
                    {...field}
                    required
                    placeholder="I/CH yili"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`kol_para[${index}].wheel_width_left`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="G'ildirak Qalinligi"
                    {...field}
                    required
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`kol_para[${index}].wheel_width_right`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="G'ildirak Qalinligi"
                    {...field}
                    required
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`kol_para[${index}].is_correct`}
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <Select {...field} borderColor={"gray.600"}>
                    <option value="true">соответствует</option>
                    <option value="false">не соответствует</option>
                  </Select>
                )}
              />
            </Flex>
          ))}
        </Flex>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          align={"center"}
          flexDir={"column"}
          my={8}
        >
          <Text fontWeight={700} fontSize={"2xl"} whiteSpace={"nowrap"}>
            Nad/Palka
          </Text>
          {Array.from({ length: 2 }).map((_, index) => (
            <Flex key={index} gap={5}>
              <Controller
                name={`nad_balka[${index}].factory_number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Zavod raqam"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`nad_balka[${index}].number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Raqami"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`nad_balka[${index}].year`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="number"
                    {...field}
                    required
                    placeholder="I/CH yili"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`nad_balka[${index}].is_correct`}
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <Select {...field} borderColor={"gray.600"}>
                    <option value="true">соответствует</option>
                    <option value="false">не соответствует</option>
                  </Select>
                )}
              />
            </Flex>
          ))}
        </Flex>

        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          align={"center"}
          flexDir={"column"}
          my={8}
        >
          <Text fontWeight={700} fontSize={"2xl"} whiteSpace="nowrap">
            Bok/Rama
          </Text>{" "}
          {Array.from({ length: 4 }).map((_, index) => (
            <Flex key={index} gap={5}>
              <Controller
                name={`bok_rama[${index}].factory_number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Zavod raqam"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`bok_rama[${index}].number`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    required
                    placeholder="Raqami"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`bok_rama[${index}].year`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="number"
                    {...field}
                    required
                    placeholder="I/CH yili"
                    borderColor={"gray.600"}
                  />
                )}
              />
              <Controller
                name={`bok_rama[${index}].is_correct`}
                control={control}
                defaultValue={true}
                render={({ field }) => (
                  <Select {...field} borderColor={"gray.600"}>
                    <option value="true">соответствует</option>
                    <option value="false">не соответствует</option>
                  </Select>
                )}
              />
            </Flex>
          ))}
        </Flex>
        <Flex>
          <Button
            isLoading={loading}
            loadingText="Saqlash"
            mx={"auto"}
            colorScheme="teal"
            type="submit"
            spinnerPlacement="end"
          >
            Saqlash
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

PtoCompleks.propTypes = {
  setActiveStep: PropTypes.any,
};
