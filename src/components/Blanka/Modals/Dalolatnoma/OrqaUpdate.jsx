import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UserApi from "../../../../Service/module/userModule.api";

export const OrqaUpdate = ({ updateData }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().updateCollectActBack(
      updateData?.carriage,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Dalolatnomaning ta’mirdan keyingi ma’lumotlari yangilandi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      window.location.reload();
    }
    if (error) {
      toast({
        status: "error",
        title: error?.detail
          ? error?.detail
          : "Bu vagon raqami uchun Dalolatnoma shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Flex
            flexWrap={["wrap", "nowrap"]}
            justifyContent={"center"}
            alignItems={"center"}
            my="4"
            gap={3}
          >
            <FormControl>
              <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.back_detail?.created_act_date}
                {...register("created_act_date")}
                type="date"
              />
            </FormControl>
            <FormControl isInvalid={errors?.station_act}>
              <FormLabel>Ta’mirdan o’tgan </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                defaultValue={updateData?.back_detail?.station_act}
                {...register("station_act", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.carriage_number_act}>
              <FormLabel whiteSpace={"nowrap"}>
                Tekshiruv davomida aniqlandi: vagon №
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                defaultValue={updateData?.back_detail?.carriage_number_act}
                {...register("carriage_number_act", { required: true })}
              />
            </FormControl>
          </Flex>
          <Flex
            flexWrap={["wrap", "nowrap"]}
            justifyContent={"center"}
            alignItems={"center"}
            my="4"
            gap={3}
          >
            <FormControl isInvalid={errors?.made_date}>
              <FormLabel>ishlab chiqarilgan</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.back_detail?.made_date}
                type="number"
                {...register("made_date", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.kod_act}>
              <FormLabel>kod</FormLabel>
              <Input
                borderColor={"gray.600"}
                type="number"
                defaultValue={updateData?.back_detail?.kod_act}
                {...register("kod_act", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.whom_act}>
              <FormLabel>tegishligi</FormLabel>
              <Input
                borderColor={"gray.600"}
                type="number"
                defaultValue={updateData?.back_detail?.whom_act}
                {...register("whom_act", { required: true })}
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            isLoading={isLoading}
            loadingText="Saqlash"
            spinnerPlacement="end"
            type="submit"
          >
            Saqlash
          </Button>
        </ModalFooter>
      </form>
    </>
  );
};
