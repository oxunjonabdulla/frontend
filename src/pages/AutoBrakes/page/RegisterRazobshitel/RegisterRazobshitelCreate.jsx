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
import { SearchTrain } from "../../../../utils";
import { useNavigate } from "react-router";
import UserApi from "../../../../Service/module/userModule.api";
export const RegisterRazobshitelCreate = () => {
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
    const { response, error } = await new UserApi().postRazobKran(
      serachingResult,
      data
    );

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Razobshitelniy kranlarni ro'yxatga olindi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      navigate("/auto-brakes/register-rozobshitel/");
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
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                Talab qilingan ta’mir turi:
              </FormLabel>
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
              <FormLabel>So’ngi jumrak turi</FormLabel>
              <Select
                placeholder="So’ngi jumrfk turi"
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_1", { required: true })}
              >
                <option value="4304">4304</option>
                <option value="4314">4314</option>
                <option value="271">271</option>
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
              <FormLabel>Tekshiruv bosimi 6 – 6,5 kg/sm2</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("check_gass_2", { required: true })}
                type="text"
                placeholder="Tekshiruv  bosimi 6 – 6,5 kg/sm2"
              />
            </FormControl>
            <FormControl isInvalid={errors?.last_jumfrk_type}>
              <FormLabel>So’ngi jumrfk turi 2</FormLabel>

              <Select
                placeholder="So’ngi jumrfk turi"
                borderColor={"gray.600"}
                {...register("last_jumfrk_type_2", { required: true })}
              >
                <option value="4304">4304</option>
                <option value="4314">4314</option>
                <option value="271">271</option>
              </Select>
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
            <FormControl isInvalid={errors?.avtotormoz_plumber_user}>
              <FormLabel>Imzolovchi xodim</FormLabel>
              <Select
                borderColor={"gray.600"}
                placeholder="Imzolovchi xodim"
                {...register("avtotormoz_plumber_user", { required: true })}
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
