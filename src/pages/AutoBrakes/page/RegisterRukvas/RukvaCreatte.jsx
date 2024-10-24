import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainHeads } from "@/components";
import { SearchTrain } from "../../../../utils";
import { useNavigate } from "react-router";
import UserApi from "../../../../Service/module/userModule.api";
export const RukvaCreate = () => {
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postRukva(
      serachingResult,
      data
    );

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Rukva ro'yxatga olindi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      navigate("/auto-brakes/register-rukvas/");
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
    <MainHeads title="Rukva jurnalini ro‘yxatga olish ">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
            <SearchTrain
              setSerachingResult={setSerachingResult}
              //   setTestResult={setTestResult}
            />
            <FormControl isInvalid={errors?.date}>
              <FormLabel>Sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("date", { required: true })}
                type="date"
                placeholder="Sana"
              />
            </FormControl>
            <FormControl isInvalid={errors?.connect_rukva_brand_1}>
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                Ulanish rukva markasi
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("connect_rukva_brand_1", { required: true })}
                type="text"
                placeholder="    Ulanish rukva markasi 1 "
              />
            </FormControl>
          </Flex>

          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
            <FormControl isInvalid={errors?.connect_rukva_brand_2}>
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                Ulanish rukva markasi
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("connect_rukva_brand_2", { required: true })}
                type="text"
                placeholder="Ulanish rukva markasi 2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.check_with_gass}>
              <FormLabel>Havo bilan tekshirish 6.0 5 0,5 kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_with_gass", { required: true })}
                type="text"
                placeholder="Havo bilan tekshirish 6.0 5 0,5 kg/sm2"
              />
            </FormControl>

            <FormControl isInvalid={errors?.stay_time_10}>
              <FormLabel>Ushlab turish vaqti 10 daqiqa</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("stay_time_10", { required: true })}
                type="text"
                placeholder="Ushlab turish vaqti 10 daqiqa"
              />
            </FormControl>
          </Flex>
          
          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={5}
          >
            
            <FormControl isInvalid={errors?.water_gass}>
              <FormLabel>Suv bilan tekshiruvi 12-0.2 kgs/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("water_gass", { required: true })}
                type="text"
                placeholder="Suv bilan tekshiruvi 12-0.2 kgs/sm2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.stay_time_2}>
              <FormLabel>Ushlab turish vaqti 1.5-0.8 1.5-2 daqiqa</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("stay_time_2", { required: true })}
                type="text"
                placeholder="Ushlab turish vaqti 1.5-0.8 1.5-2 daqiqa"
              />
            </FormControl>
            <FormControl isInvalid={errors?.avtotormoz_plumber_user_signature}>
              <FormLabel>Imzolovchi xodim</FormLabel>
              <Select
                borderColor={"gray.600"}
                placeholder="Imzolovchi xodim"
                {...register("avtotormoz_plumber_user_signature", { required: true })}
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
