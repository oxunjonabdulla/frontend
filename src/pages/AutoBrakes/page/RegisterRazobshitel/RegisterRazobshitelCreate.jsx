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
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainHeads } from "@/components";
import { SearchTrain } from "../../../../utils";
export const RegisterRazobshitelCreate = () => {
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
  };

  return (
    <MainHeads title="Razobshitelniy kranlarni ro‘yxatga olish ">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <SearchTrain
              setSerachingResult={setSerachingResult}
              //   setTestResult={setTestResult}
            />
            <FormControl isInvalid={errors?.razabshitel_date}>
              <FormLabel>Sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("razabshitel_date", { required: true })}
                type="date"
                placeholder="Sana"
              />
            </FormControl>

            <FormControl isInvalid={errors?.repair_type}>
              <FormLabel>Ta’mir turi</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("repair_type", { required: true })}
                type="text"
                placeholder="Ta’mir turi "
              />
            </FormControl>
          </Flex>

          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={4}
          >
            <FormControl isInvalid={errors?.razabshitel_kran_type}>
              <FormLabel>Razabshitlni kran turi 4300</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("razabshitel_kran_type", { required: true })}
                type="text"
                placeholder="Razabshitlni kran turi 4300"
              />
            </FormControl>

            <FormControl isInvalid={errors?.check_gass_1}>
              <FormLabel>Tekshiruv bosimi 6 – 6,5 kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_1", { required: true })}
                type="text"
                placeholder="Tekshiruv  bosimi 6 – 6,5 kg/sm2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.last_jumfrk_type}>
              <FormLabel>So’ngi jumrfk turi 4304, 4314, 271</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_1", { required: true })}
                type="text"
                placeholder="So’ngi jumrfk turi 4304, 4314, 271"
              />
            </FormControl>
          </Flex>
          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={4}
          >
            <FormControl isInvalid={errors?.check_gass_1}>
              <FormLabel>Tekshiruv bosimi 6 – 6,5 kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_2", { required: true })}
                type="text"
                placeholder="Tekshiruv  bosimi 6 – 6,5 kg/sm2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.last_jumfrk_type}>
              <FormLabel>So’ngi jumrfk turi 4304, 4314, 271</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_2", { required: true })}
                type="text"
                placeholder="So’ngi jumrfk turi 4304, 4314, 271"
              />
            </FormControl>
            <FormControl isInvalid={errors?.check_gass_1}>
              <FormLabel>Tekshiruv bosimi 6 – 6,5 kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_3", { required: true })}
                type="text"
                placeholder="Tekshiruv  bosimi 6 – 6,5 kg/sm2"
              />
            </FormControl>
          </Flex>

          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"}>
            <FormControl isInvalid={errors?.check_result}>
              <FormLabel>Tekshiruv xulosasi</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_result", { required: true })}
                type="text"
                placeholder="Tekshiruv xulosasi"
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
