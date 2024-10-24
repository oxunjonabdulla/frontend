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
import { useNavigate } from "react-router";
import UserApi from "../../../../Service/module/userModule.api";
export const RegisterRegularCreate = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postRegulyator(data);

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
      navigate("/auto-brakes/register-regular/");
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
    <MainHeads title="Regulyator jurnalini ro‘yxatga olish ">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.ptp_type}>
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                5746, PTPП 675, PTPП 675M, РТРП 300 turi 10
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("ptp_type", { required: true })}
                type="text"
                placeholder="5746, PTPП 675, PTPП 675M, РТРП 300 turi"
              />
            </FormControl>

            <FormControl isInvalid={errors?.corp_number}>
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                Zavod raqami
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("corp_number", { required: true })}
                type="text"
                placeholder="Zavod raqami"
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

          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={4}
          >
            <FormControl isInvalid={errors?.date}>
              <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
                Sana
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("date", { required: true })}
                type="date"
              />
            </FormControl>
            <FormControl isInvalid={errors?.kgs_check}>
              <FormLabel>4,0-4,2 kgs/sm2 tekshirish</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("kgs_check", { required: true })}
                type="text"
                placeholder="4,0-4,2 kgs/sm2 tekshirish"
              />
            </FormControl>

            <FormControl isInvalid={errors?.a_ptp_to_mm}>
              <FormLabel>
                «A» 5746, PTPП 675, PTPN 675M, PTPN 300 90-110 MM
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("a_ptp_to_mm", { required: true })}
                type="text"
                placeholder="«A»> 5746, PTPП 675, PTPN 675M, PTPN 300 90-110 MM"
              />
            </FormControl>
          </Flex>
          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={4}
          >
            <FormControl isInvalid={errors?.b_ptp_to_mm}>
              <FormLabel>
                a 5745, PTPN 675, PTPN 675M 300-350 MM РТРП 300 100-150 MM gacha
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("b_ptp_to_mm", { required: true })}
                type="text"
                placeholder="«<a>> 5745, PTPN 675, PTPN 675M 300-350 MM РТРП 300 100-150 MM gacha"
              />
            </FormControl>
            <FormControl isInvalid={errors?.prp_to_mm}>
              <FormLabel>
                5746 5-7 MM, PTPП 675, PTPN 675M 7-20 MM PTPN 300 5-10 MM gacha
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("prp_to_mm", { required: true })}
                type="text"
                placeholder="5746 5-7 MM, PTPП 675, PTPN 675M 7-20 MM PTPN 300 5-10 MM gacha"
              />
            </FormControl>
            <FormControl isInvalid={errors?.repair_check}>
              <FormLabel>Texnik xolati</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("repair_check", { required: true })}
                type="text"
                placeholder="Texnik xolati "
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
