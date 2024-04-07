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
import { SearchTrain } from "@/utils";
export const RegisterBrakesCreate = () => {
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
    <MainHeads title="Rezervuar, tormoz silindr va ishchi kameralarni ro‘yxatga olish">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <SearchTrain
              setSerachingResult={setSerachingResult}
              //   setTestResult={setTestResult}
            />
            <FormControl isInvalid={errors?.rezervuar_date}>
              <FormLabel>Sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("rezervuar_date", { required: true })}
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
            <FormControl isInvalid={errors?.spare_sum}>
              <FormLabel>Zaxirasig‘imi</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("spare_sum", { required: true })}
                type="text"
                placeholder=" Zaxirasig‘imi P7-78"
              />
            </FormControl>

            <FormControl isInvalid={errors?.water_gass}>
              <FormLabel>Suv bosimi (10,05+0,5) kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("water_gass", { required: true })}
                type="text"
                placeholder="Suv bosimi
                (10,05+0,5) kg/sm2
                
                "
              />
            </FormControl>
            <FormControl isInvalid={errors?.rapair_roll}>
              <FormLabel>Tormoz silindiri TS002, TS188</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("rapair_roll", { required: true })}
                type="text"
                placeholder="Tormoz silindiri TS002, TS188"
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
              <FormLabel>Havobosimi (4,0+0,1) kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_2", { required: true })}
                type="text"
                placeholder="Havobosimi (4,0+0,1) kg/sm2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.last_jumfrk_type}>
              <FormLabel>
                2X kamerali havotaq simlagich 295.001, 295M.001
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_2", { required: true })}
                type="text"
                placeholder="2X kamerali  havotaq simlagich"
              />
            </FormControl>
            <FormControl isInvalid={errors?.check_gass_1}>
              <FormLabel>Havobosimi (6,0+0,1) kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_3", { required: true })}
                type="text"
                placeholder="Havobosimi
                (6,0+0,1) kg/sm2
                "
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
                placeholder="Texnikxolati"
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
