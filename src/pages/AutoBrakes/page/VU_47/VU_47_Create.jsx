import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainHeads } from "@/components";
import UserApi from "../../../../Service/module/userModule.api";
import { useNavigate } from "react-router";
export const VU_47_Create = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu47({
      front_detail: data,
      back_detail: null,
    });

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-47 jurnali yaratildi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      navigate("/auto-brakes/vu-47/");
    }
    if (error) {
      toast({
        status: "error",
        title: error?.error,
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  return (
    <MainHeads title="VU-47 shaklini yaratish">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.date}>
              <FormLabel>Дата </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("date", { required: true })}
                type="date"
              />
            </FormControl>
            <FormControl isInvalid={errors?.device_type}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                Тип прибора{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("device_type", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.serial_number}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                Заводской номер прибор год и месяц выпуска{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("serial_number", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>

          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.charging_time_12}>
              <FormLabel>
                {" "}
                Время зарядки золотниковой камеры и запасного резервуара, с{" "}
              </FormLabel>
              <FormLabel> ЗК до 1,2 кгс/см2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("charging_time_12", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.charging_time_40}>
              <FormLabel>
                {" "}
                Время зарядки золотниковой камеры и запасного резервуара, с{" "}
              </FormLabel>
              <FormLabel> ЗР от 4,0 кгс/см2 4,5 кгс/см2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("charging_time_40", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl
              isInvalid={errors?.slow_release_through_calibrated_orifices}
            >
              <FormLabel>
                {" "}
                Отпуск медленным темпом через калиброванные отверстия диаметром
                0,8 или 0,65 мм{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("slow_release_through_calibrated_orifices", {
                  required: true,
                })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.brake_cylinder_fill_time}>
              <FormLabel>
                {" "}
                Время наполнения тормоз цилиндра до 3; 5 кгс/см2 при экстрен .
                Или полном служебном торможении, с{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("brake_cylinder_fill_time", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Text
            as={"h1"}
            textAlign={"center"}
            m={0}
            fontSize={"xl"}
            fontWeight={700}
          >
            Давление в тормозном цилиндре (ТЦ) на режимах кгс/см2 при экстр.
            торможении (ЭТ) и полном служебном (ПСТ)
          </Text>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.cylinder_pressure_empty}>
              <FormLabel>порожнем</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("cylinder_pressure_empty", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.cylinder_pressure_normal}>
              <FormLabel>среднем </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("cylinder_pressure_normal", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.cylinder_pressure_full}>
              <FormLabel>груженом </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("cylinder_pressure_full", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.release_time_to_04}>
              <FormLabel>
                Время отпуска до 0,4 кгс/см2 в ТЦ после ПСТ на равниином режиме{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("release_time_to_04", { required: true })}
                type="text"
              />
            </FormControl>

            <FormControl isInvalid={errors?.acceptor_signature}>
              <FormLabel>Подпись принявшего прибор </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("acceptor_signature", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>

          <Flex my={4} justify={"end"}>
            <Button
              colorScheme="teal"
              isLoading={isLoading}
              loadingText="Saqlash"
              spinnerPlacement="end"
              type="submit"
            >
              Saqlash
            </Button>
          </Flex>
        </form>
      </Container>
    </MainHeads>
  );
};
