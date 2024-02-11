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

export const Orqa = ({ onClose }) => {
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
          <SearchTrain />
          <FormControl isInvalid={errors?.tamir_turi_date}>
            <FormLabel>Dalolatnoma tuzilgan sana</FormLabel>
            <Input
              borderColor={"gray.600"}
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
            <FormLabel>Ta’mirdan o’tgan </FormLabel>
            <Input
              borderColor={"gray.600"}
              type="text"
              value={"Qarshi Vagon Depo"}
              {...register("bildirish_number", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.yuk_vagon_tamir_turi}>
            <FormLabel whiteSpace={"nowrap"}>
              Tekshiruv davomida aniqlandi: vagon №
            </FormLabel>
            <SearchTrain
              fontSize="del"
              setSerachingResult={setSerachingResult}
            />
          </FormControl>
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>ishlab chiqarilgan</FormLabel>
            <Input
              borderColor={"gray.600"}
              //   placeholder="Ta'mir turi kodi"
              type="number"
              {...register("tamir_turi_kodi", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>kod</FormLabel>
            <Input
              borderColor={"gray.600"}
              //   placeholder="Ta'mir turi kodi"
              type="number"
              {...register("tamir_turi_kodi", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.tamir_turi_kodi}>
            <FormLabel>tegishligi</FormLabel>
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
        <Button variant={"outline_red"} mr={3} onClick={onClose}>
          Yopish
        </Button>
        <Button
          variant={"outline"}
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

Orqa.propTypes = {
  onClose: PropTypes.func,
};
