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
import { SearchTrain } from "@/utils";
import UserApi from "../../../../Service/module/userModule.api";
import { useNavigate } from "react-router";
export const RegisterBrakesCreate = () => {
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
    const { response, error } = await new UserApi().postRezervuar(
      serachingResult,
      data
    );

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Rezurvar kranlarni ro'yxatga olindi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      navigate("/auto-brakes/register-brake-silindir/");
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
              <Select
                borderColor={"gray.600"}
                placeholder="Ta'mir turi"
                {...register("repair_type", { required: true })}
              >
                <option value="dr">&apos;ДР&apos; (DТ)</option>
                <option value="kp">&apos;КР&apos; (KТ)</option>
                <option value="krp">&apos;KРП&apos; (KTP)</option>
              </Select>
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
              <FormLabel>Tormoz silindiri</FormLabel>
              <Select
                placeholder="Tormoz silindiri"
                borderColor={"gray.600"}
                {...register("rapair_roll", { required: true })}
              >
                <option value=" TS002"> TS002</option>
                <option value="TS188">TS188</option>
              </Select>
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
              <FormLabel>2X kamerali havotaqsimlagich</FormLabel>

              <Select
                placeholder="2X kamerali havotaqsimlagich"
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_2", { required: true })}
              >
                <option value=" 295.001"> 295.001</option>
                <option value="295M.001"> 295M.001</option>
              </Select>
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
