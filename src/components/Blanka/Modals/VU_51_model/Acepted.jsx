import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Signatur } from "../../../Signature/Signatur";
import { SearchTrain } from "../../../../utils";
import UserApi from "../../../../Service/module/userModule.api";
export const Acepted = ({ onClose }) => {
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

    const { response, error } = await new UserApi().postAcceptedVu51Api(
      serachingResult,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-51 shakl vagon muvaffaqiyatli qo'shildi.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      window.location.reload();
    }
    if (error) {
      toast({
        status: "error",
        title: error?.detail
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun VU-51 shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <SearchTrain setSerachingResult={setSerachingResult} />
        </Flex>

        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Sana va joy
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.last_formation}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Oxirgi Shakllanish
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_formation", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.full_inspaction}>
            <FormLabel>
              Oxirgi to‘liq tekshirish va rolikli rulmonlarni buksaga o‘rnatish{" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("full_inspaction", { required: true })}
              type="text"
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
          __________
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.carriage_using_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              № Vagon uchun ishlatilgan
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("carriage_using_number", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.shipped_vchd}>
            <FormLabel>Yuborilgan VCHD, Zavod PTO si </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("shipped_vchd", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.referance_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Yunaltiruvchi vedomostlar raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("referance_number", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.repair_perfomed}>
            <FormLabel>Bajarilgan tamir turi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("repair_perfomed", { required: true })}
              type="text"
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
          G‘ildirak juftligi o‘lchamlari (mm)
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <Flex flexDir={"column"} gap={3}>
            <FormControl isInvalid={errors?.arrow_neck_length_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                O‘q bo‘yni uzunligi
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("arrow_neck_length_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.arrow_neck_length_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("arrow_neck_length_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3}>
            <FormControl isInvalid={errors?.arrow_neck_diametr_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                O‘q bo‘yni diametr
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("arrow_neck_diametr_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.arrow_neck_diametr_chap}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("arrow_neck_diametr_chap", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3}>
            <FormControl isInvalid={errors?.neck_stupitsa_type_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                O‘q diametri Stupitsa ostidan oldingi qism
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("neck_stupitsa_type_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.neck_stupitsa_type_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("neck_stupitsa_type_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3}>
            <FormControl isInvalid={errors?.neck_stupitsa_diametr_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                O‘q diametri stupitsa osti
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("neck_stupitsa_diametr_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.neck_stupitsa_diametr_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("neck_stupitsa_diametr_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3}>
            <FormControl isInvalid={errors?.shaft_diametr_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                O‘q diametri Obod qalinligi
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("shaft_diametr_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.shaft_diametr_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("shaft_diametr_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <Flex flexDir={"column"} gap={3} w={"100%"}>
            <FormControl isInvalid={errors?.wheel_thickness_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                G‘ildirak Obod qalinligi
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("wheel_thickness_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.wheel_thickness_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("wheel_thickness_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3} w={"100%"}>
            <FormControl isInvalid={errors?.wheel_rolling_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                G‘ildirak prokat
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("wheel_rolling_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.wheel_rolling_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("wheel_rolling_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3} w={"100%"}>
            <FormControl isInvalid={errors?.wheel_diametr_right}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                G‘ildirak Aylana diametri
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("wheel_diametr_right", { required: true })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.wheel_diametr_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("wheel_diametr_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"column"} gap={3} w={"100%"}>
            <FormControl isInvalid={errors?.sinovi}>
              <FormLabel whiteSpace={["wrap", "nowrap"]}>
                G‘ildirak Ichki qirrasi orasidagi masofa
              </FormLabel>
              <Input
                placeholder="O'ng"
                borderColor={"gray.600"}
                {...register("wheel_distance_between_right", {
                  required: true,
                })}
                type="text"
              />
            </FormControl>
            <FormControl isInvalid={errors?.wheel_distance_between_left}>
              <Input
                placeholder="Chap"
                borderColor={"gray.600"}
                {...register("wheel_distance_between_left", { required: true })}
                type="text"
              />
            </FormControl>
          </Flex>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl w={"50%"} isInvalid={errors?.date_of_repair}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Tamirdan chiqarilgan kun
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("date_of_repair", { required: true })}
              type="date"
            />
          </FormControl>
          <Signatur title={"Tekshirilgan va bajrilgan ishlar imzosi"} />
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl w={"50%"} isInvalid={errors?.invited_date}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Qo&apos;yilgan kun imzosi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("invited_date", { required: true })}
              type="date"
            />
          </FormControl>
          <Signatur title={"Imzo (Vagon ostiga berilgan)"} />
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

Acepted.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
