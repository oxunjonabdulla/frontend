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

export const Oldi = () => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);

  const [getDataLoading, setDataLoading] = useState(false);
  const [trainFixType, setTrainFixType] = useState(null);

  const [getTestResult, setTestResult] = useState([]);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const handleCarriageData = async () => {
      setDataLoading(true);
      const { response } = await new UserApi().getCarriageOne(serachingResult);
      setDataLoading(false);
      setTrainFixType(response?.data);
    };

    if (serachingResult === getTestResult[0]?.carriage_number) {
      handleCarriageData();
    }
  }, [getTestResult, serachingResult]);

  const onSubmit = async (data) => {
    const allObj = {
      ...data,
      created_act_date: trainFixType?.warning_date,
      train_number_act: trainFixType?.train_number,
      station_act: trainFixType?.station,
      telegramma_repair_act: trainFixType?.repair_type,
      carriage_number_act: trainFixType?.carriage_number,
    };
    setLoading(true);

    const { response, error } = await new UserApi().postCollectActFront(
      serachingResult,
      allObj
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Dalolatnoma tuzildi!",
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
          : "Bu vagon raqami uchun Dalolatnoma shakillangan.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  return (
    <>
      {getDataLoading && (
        <Flex
          position={"absolute"}
          display={"flex"}
          top={0}
          left={0}
          justifyContent={"center"}
          align={"center"}
          width={"100%"}
          height={"100%"}
          bgColor={"rgba(255,255,255,0.5)"}
          backdropFilter={"blur(2px)"}
          rounded={10}
          zIndex={1000}
        >
          <Spinner size={"xl"} color="teal" />
        </Flex>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Flex
            flexWrap={["wrap", "nowrap"]}
            justifyContent={"center"}
            alignItems={"center"}
            my="4"
            gap={3}
          >
            <SearchTrain
              setSerachingResult={setSerachingResult}
              setTestResult={setTestResult}
            />
            <FormControl>
              <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                isReadOnly
                defaultValue={trainFixType?.warning_date}
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
              <FormLabel>Poyezddan kelgan №</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={trainFixType?.train_number}
                isReadOnly
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tuzilgan dalolatnoma bekati tarkib</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={trainFixType?.station}
                isReadOnly
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Raqami №</FormLabel>
              <Input
                borderColor={"gray.600"}
                type="number"
                {...register("number_act")}
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
                isReadOnly
                defaultValue={trainFixType?.repair_type}
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
                isReadOnly
                defaultValue={trainFixType?.carriage_number}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.made_date}>
              <FormLabel>Ishlab chiqarilgan </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                {...register("made_date", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.kod_act}>
              <FormLabel> kod </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                {...register("kod_act", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.whom_act}>
              <FormLabel> tegishli </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
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
