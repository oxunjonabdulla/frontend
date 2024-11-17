import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../../Service/module/userModule.api";

export const Acepted = ({ onClose, isOpen, accaptedData }) => {
  const [isLoading, setLoading] = useState(false);
  const [wheelUser, setWheelUser] = useState([]);

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    
    const { response, error } = await new UserApi().postAcceptedVu51Api(accaptedData.id, data);
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

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await new UserApi().getWheelUserSignature();
      if (response) setWheelUser(response?.data);
    };
    fetchData();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={"6xl"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-51 Jurnalini orqa qismini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.date_of_release_from_repair}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Ta'mirdan chiqarilgan vaqti(kun/oy)
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("date_of_release_from_repair")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.date_of_sending}>
                  <FormLabel>
                    Yuborilgan vaqti(oy/yil)
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("date_of_sending")}
                    type="month"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.place_of_sending}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    YubYuborilgan joyi Pto, VCHD, Zavod
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("place_of_sending")}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.preservation_number}>
                  <FormLabel>Preshilochniy raqami</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("preservation_number")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.given_to_wagon}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Vagonga berilgan
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("given_to_wagon")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.substep_part_diameter}>
                  <FormLabel>Podstupichniy osti qismi diametri</FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("substep_part_diameter")}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.rotation_surface_diameter}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Aylanish yuzasi diametri
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("rotation_surface_diameter")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.hub_thickness}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Obod qalinligi
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("hub_thickness")}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.tooth_thickness}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Greben qalinligi
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("tooth_thickness")}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.prokat}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    prokat
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("prokat")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.distance_between_wheels}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Gildiraklar orasidagi masofa
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("distance_between_wheels")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.wheel_pair_formation_date_factory_number}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    G'ildirak juftligi (formirovaniya) (oy/yil)/ Zavod nomeri
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("wheel_pair_formation_date_factory_number")}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.full_inspection_and_assembly_of_bushing}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    To'liq tekshirish va buksani yig'ish
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("full_inspection_and_assembly_of_bushing")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.current_inspection}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Joriy tekshirish
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("current_inspection")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.wheel_rotation_surface_alignment}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    G'ildirak aylanish yuzasini yo'nilganligi
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("wheel_rotation_surface_alignment")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.thread_restoration_shaft_neck}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Rezbani tiklash o'q bo'yni
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("thread_restoration_shaft_neck")}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.wheel_surface_alignment_and_greben_filling}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    Gildirak aylanasini yuzasini yo'nish bilan birga Greben qismini to'ldirish
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("wheel_surface_alignment_and_greben_filling")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.m110_thread_restoration_shaft_neck}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    M110 rezbasini tiklash, o'q bo'yni
                  </FormLabel>
                  <Input
                    borderColor={"gray.600"}
                    {...register("m110_thread_restoration_shaft_neck")}
                    type="text"
                  />
                </FormControl>
                <FormControl isInvalid={errors?.wheelset_owner}>
                  <FormLabel whiteSpace={["wrap", "nowrap"]}>
                    G`ildirak juftliklarini  tekshirgan
                  </FormLabel>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="G`ildirak juftliklarini  tekshirgan	"
                    {...register("gildirak_user_signature")}
                  >
                    {wheelUser?.map((item) => (
                      <option key={item?.id} value={item?.id}>{item?.name}</option>
                    ))}
                  </Select>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

Acepted.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
