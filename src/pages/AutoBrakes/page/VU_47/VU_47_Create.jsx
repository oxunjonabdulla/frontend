import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainHeads } from "@/components";
import UserApi from "../../../../Service/module/userModule.api";
import { useNavigate } from "react-router";
import { Signatur } from "../../../../components";
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
      front_detail: { acceptor_signature: "Imzo quyildi", ...data },
      back_detail: {
        date: "2001-11-11",
        device_type: "null",
        serial_number: "null",
        charging_time_40: "null",
        brake_cylinder_fill_time: "null",
        cylinder_pressure_empty: "null",
        cylinder_pressure_normal: "null",
        cylinder_pressure_full: "null",
        acceptor_signature: "null",
      },
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
              <Select
                borderColor={"gray.600"}
                placeholder=" Тип прибора"
                {...register("device_type")}
              >
                <option value={"483"}>483</option>
                <option value={"483M"}>483M</option>
                <option value={"483A"}>483A</option>
              </Select>
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
            <FormControl isInvalid={errors?.charging_time_40}>
              <FormLabel>
                {" "}
                Время зарядки золотниковой камеры и запасного резервуара, с{" "}
              </FormLabel>
              <FormLabel>ЗК до 1.2 кг/см²</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("charging_time_40", { required: true })}
                type="text"
              />
            </FormControl>
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
            <FormControl isInvalid={errors?.release_time_to_04}>
              <FormLabel>
                Время отпуска до 0,4 кгс/см2 в ТЦ после ПСТ на равниином режиме{" "}
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("release_time_to_04", { required: true })}
                type="number"
              />
            </FormControl>

            <FormControl isInvalid={errors?.avtotormoz_plumber_user}>
              <FormLabel mb={5}>Подписывающий офицер</FormLabel>
              <Select
                borderColor={"gray.600"}
                placeholder="Подписывающий офицер"
                {...register("avtotormoz_plumber_user", { required: true })}
              >
                <option value={"baitov_zuvaydilla"}>Baitov Zuvaydilla</option>
                <option value={"baitov_mirzohid"}>Baitov Mirzohid</option>
                <option value={"xasanov_gayrat"}>Xasanov Gayrat</option>
                <option value={"achilov_boxodir"}>Achilov Boxodir</option>
                <option value={"pulatov_xikmat"}>Pulatov Xikmat</option>
                <option value={"pulatov_shuxrat"}>Pulatov Shuxrat</option>
                <option value={"maxmudov_farruxjon"}>Maxmudov Farruxjon</option>
                <option value={"qahhorov_ravshan"}>Qahhorov Ravshan</option>
                <option value={"maxmudov_qobil"}>Maxmudov Qobil</option>
              </Select>
            </FormControl>

            <FormControl isInvalid={errors?.acceptor_signature}>
              <FormLabel>Подпись принявшего прибор </FormLabel>
              <Signatur />
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
