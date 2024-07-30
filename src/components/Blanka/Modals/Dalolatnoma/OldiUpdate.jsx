import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { useEffect, useState } from "react";
import UserApi from "../../../../Service/module/userModule.api";

export const OldiUpdate = ({ updateData }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().updateCollectActFront(
      updateData?.carriage,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Dalolatnoma oldi qismi yangilandi!",
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
                defaultValue={updateData?.front_detail?.created_act_date}
                {...register("created_act_date")}
                type="date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Poyezddan kelgan №</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.front_detail?.train_number_act}
                {...register("train_number_act")}
                type="text"
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
            <FormControl>
              <FormLabel>Tuzilgan dalolatnoma bekati tarkib</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.front_detail?.station_act}
                {...register("station_act")}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Raqami №</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.front_detail?.number_act}
                {...register("number_act")}
                type="number"
              />
            </FormControl>
          </Flex>
          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            justifyContent={"center"}
            my={8}
          >
            <FormControl>
              <FormLabel>
                Ta’mirga “V” № 823 17.10.2016 yildagi telegramma asosida.
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                placeholder="Ta'mir turi kodi"
                defaultValue={updateData?.front_detail?.telegramma_repair_act}
                {...register("telegramma_repair_act")}
                type="text"
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
            {" "}
            <FormControl>
              <FormLabel>Tekshirish davomida aniqlandi №</FormLabel>
              <Input
                borderColor={"gray.600"}
                placeholder="Raqami"
                defaultValue={updateData?.front_detail?.carriage_number_act}
                {...register("carriage_number_act")}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.made_date}>
              <FormLabel>Ishlab chiqarilgan </FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.front_detail?.made_date}
                type="text"
                {...register("made_date", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.kod_act}>
              <FormLabel> kod </FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={updateData?.front_detail?.kod_act}
                type="text"
                {...register("kod_act", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.whom_act}>
              <FormLabel> tegishli </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                defaultValue={updateData?.front_detail?.whom_act}
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
