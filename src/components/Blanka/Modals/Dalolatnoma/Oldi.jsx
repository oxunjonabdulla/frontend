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
import PropTypes from "prop-types";
import UserApi from "../../../../Service/module/userModule.api";

export const Oldi = ({ onClose }) => {
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

  const onSubmit = async (data) => {};

  console.log(trainFixType);
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
            <FormControl isInvalid={errors?.tamir_turi_date}>
              <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                isReadOnly
                defaultValue={trainFixType?.warning_date}
                {...register("tamir_turi_date", { required: true })}
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
            <FormControl isInvalid={errors?.bildirish_number}>
              <FormLabel>Poyezddan kelgan №</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={trainFixType?.train_number}
                isReadOnly
                type="text"
                {...register("bildirish_number", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.yuk_vagon_tamir_turi}>
              <FormLabel>Tuzilgan dalolatnoma bekati tarkib</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={trainFixType?.station}
                isReadOnly
                type="text"
                {...register("yuk_vagon_tamir_turi", { required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Raqami №</FormLabel>
              <Input
                borderColor={"gray.600"}
                type="number"
                {...register("tamir_turi_kodi")}
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
                defaultValue={"trainFixType?.repair_type"}
                {...register("tamir_turi_kodi")}
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
            <FormControl isInvalid={errors?.tamir_turi_kodi}>
              <FormLabel>Tekshirish davomida aniqlandi №</FormLabel>
              <Input
                borderColor={"gray.600"}
                placeholder="Raqami"
                isReadOnly
                defaultValue={trainFixType?.carriage_number}
                type="text"
                {...register("tamir_turi_kodi", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.tamir_turi_kodi}>
              <FormLabel>Ishlab chiqarilgan </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                {...register("tamir_turi_kodi", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.tamir_turi_kodi}>
              <FormLabel> kod </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                {...register("tamir_turi_kodi", { required: true })}
              />
            </FormControl>
            <FormControl isInvalid={errors?.tamir_turi_kodi}>
              <FormLabel> tegishli </FormLabel>
              <Input
                borderColor={"gray.600"}
                type="text"
                {...register("tamir_turi_kodi", { required: true })}
              />
            </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Yopish
          </Button>
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

Oldi.propTypes = {
  onClose: PropTypes.func,
};
