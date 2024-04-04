import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { useState } from "react";
import PropTypes from "prop-types";

export const Oldi = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Flex
          flexWrap={["wrap", "nowrap"]}
          justifyContent={"center"}
          alignItems={"center"}
          my="4"
          gap={3}
        >
          <SearchTrain setSerachingResult={setSerachingResult} />
          <FormControl isInvalid={errors?.tamir_turi_date}>
            <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("tamir_turi_date", { required: true })}
              type="date"
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
              //   placeholder="Bildirishnoma Raqami"
              type="number"
              {...register("bildirish_number", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.yuk_vagon_tamir_turi}>
            <FormLabel>Tuzilgan dalolatnoma bekati tarkib</FormLabel>
            <Input
              borderColor={"gray.600"}
              //   placeholder="Mukammal , davriy , joriy va boshqa ta’mir turi"
              type="text"
              {...register("yuk_vagon_tamir_turi", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>Raqami №</FormLabel>
            <Input
              borderColor={"gray.600"}
              //   placeholder="Ta'mir turi kodi"
              type="number"
              {...register("tamir_turi_kodi", { required: true })}
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
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>
              Ta’mirga “V” № 823 17.10.2016 yildagi telegramma asosida.
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              placeholder="Ta'mir turi kodi"
              type="text"
              {...register("tamir_turi_kodi", { required: true })}
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

        <Flex
          flexWrap={["wrap", "nowrap"]}
          justifyContent={"center"}
          alignItems={"center"}
          my="4"
          gap={3}
        >
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>uzilgan vagon №</FormLabel>
            <Input
              borderColor={"gray.600"}
              //   placeholder="Ta'mir turi kodi"
              type="number"
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
  );
};

Oldi.propTypes = {
  onClose: PropTypes.func,
};
