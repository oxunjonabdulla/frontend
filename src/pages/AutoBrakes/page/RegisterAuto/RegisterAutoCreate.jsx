import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MainHeads } from "@/components";
import UserApi from "@/Service/module/userModule.api";
import { useNavigate } from "react-router";
export const RegisterAutoCreate = () => {
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
    const { response, error } = await new UserApi().postAvtoRejim(data);

    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Avtorejim ro'yxatga olindi!",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      navigate("/auto-brakes/register-auto/");
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
    <MainHeads title="Avtorejimlarni ro‘yxatga olish">
      <Container maxW={"container.xl"} my={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
            <FormControl isInvalid={errors?.automode_type}>
              <FormLabel>Avtorejim turi </FormLabel>
              <Select
                borderColor={"gray.600"}
                placeholder="Avtorejim turi "
                {...register("automode_type", { required: true })}
              >
                <option value="265 A -1">265 A -1</option>
                <option value=" 265 A -4"> 265 A -4</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={errors?.repair_date}>
              <FormLabel>Ta’mir sana</FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("repair_date", { required: true })}
                type="date"
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

          <Flex
            gap={3}
            flexWrap={["wrap", "nowrap"]}
            alignItems={"center"}
            mb={4}
          >
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
            <FormControl isInvalid={errors?.automode_factory_number}>
              <FormLabel>Avtorejim zavod raqami </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("automode_factory_number", { required: true })}
                type="text"
                placeholder="Ta’mir turi "
              />
            </FormControl>
            <FormControl isInvalid={errors?.automode_roll_size}>
              <FormLabel whiteSpace={"nowrap"}>
                Avtorejim velka razmeri{" "}
              </FormLabel>
              <Select
                borderColor={"gray.600"}
                placeholder="Avtorejim velka razmeri "
                {...register("automode_roll_size", { required: true })}
              >
                <option value="265 A -1 =70 mm">265 A -1 =70 mm</option>
                <option value=" 265 A -4 =120 mm"> 265 A -4 =120 mm</option>
              </Select>
            </FormControl>
            <FormControl display={"none"} isInvalid={errors?.last_type_jamrak}>
              <FormLabel>So’ngi jumrak turi (4304, 4314, 271)</FormLabel>
              <Input
                borderColor={"gray.600"}
                defaultValue={"4304"}
                {...register("last_type_jamrak", { required: true })}
                type="text"
                placeholder="So’ngi jumrak turi "
              />
            </FormControl>
          </Flex>

          <Text
            as={"h1"}
            textAlign={"center"}
            m={0}
            fontSize={"xl"}
            fontWeight={700}
          >
            TC Rejimdagi siqilgan havo bosimi
          </Text>

          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"}>
            <FormControl isInvalid={errors?.tc_type_without_freight}>
              <FormLabel>
                Yuksiz <br /> 265 A-1 265 A-4 TC-1=1,3+0,1 Kgs/sm2
                {"                                                        "}
                <br /> 265 A-1 265 A-4 TC-1=1,3+0,1 Kgs/sm2
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("tc_type_without_freight", { required: true })}
                type="text"
                placeholder="Yuksiz"
              />
            </FormControl>
            <FormControl isInvalid={errors?.tc_type_middle}>
              <FormLabel>
                O`rta <br /> 265 A-1 TC=2,1+0,2 Kgs/sm2 265 A-4 TC=1,95+0,2
                Kgs/sm2
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("tc_type_middle", {
                  required: true,
                })}
                type="text"
                placeholder="O'rta"
              />
            </FormControl>
            <FormControl isInvalid={errors?.tc_type_with_freight}>
              <FormLabel>
                Yukli <br /> 2265 A-1 TC=4,2+0,1 Kgs/sm2 265 A-4 TC-1=1,3+0,1
                Kgs/sm2
              </FormLabel>
              <Input
                borderColor={"gray.600"}
                {...register("tc_type_with_freight", {
                  required: true,
                })}
                type="text"
                placeholder="Yukli"
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
