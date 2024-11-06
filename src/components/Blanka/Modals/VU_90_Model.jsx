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
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
export const VU_90_Model = ({ onClose, isOpen }) => {
  const [isLoading, setLoading] = useState(false);
  const [wheelUser, setWheelUser] = useState([]);
  const [wheelPlumberUser, setWheelPlumberUser] = useState([]);

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const {
      maded_factory_creating_back,
      maded_factory_creating_front,
      maded_factory_creating_back_adding,
      maded_factory_creating_front_adding,
    } = data;
    setLoading(true);

    const object = {
      ...data,
      maded_factory_creating_back:
        maded_factory_creating_back + "|" + maded_factory_creating_back_adding,
      maded_factory_creating_front:
        maded_factory_creating_front +
        "|" +
        maded_factory_creating_front_adding,
    };

    const { response, error } = await new UserApi().postVu90(object);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-90 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
        title: error?.detail,
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
      const { response: wheelPlumberUserSignature } = await new UserApi().getWheelPlumberUserSignature();
      if (wheelPlumberUserSignature) setWheelPlumberUser(wheelPlumberUserSignature?.data);
      if (response) setWheelUser(response?.data);
    };
    fetchData();
  }, []);
  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={["sm", "md", "lg", "6xl"]}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-90 Jurnalini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.collection_date}>
                <FormLabel>Yig‘ilgan sana </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("collection_date")}
                  type="date"
                />
              </FormControl>
              <FormControl isInvalid={errors?.wheel_pair}>
                <FormLabel>Qo’yish va g’ildirak juftligi raqami </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_pair")}
                  type="text"
                />
              </FormControl>
              <FormControl isInvalid={errors?.wheel_pair_medal}>
                <FormLabel>
                  G‘ildirak juftligining o‘rta ta’mir tamg‘asi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_pair_medal")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.gildirak_user_signature}>
                <FormLabel>Smena ustasi imzosi</FormLabel>
                <Select
                  borderColor={"gray.600"}
                  placeholder="Smena ustasi imzosi"
                  {...register("gildirak_user_signature", { required: true })}
                >
                  {wheelUser?.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.name}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isInvalid={errors?.gildirak_chilangar_user_signature}>
                <FormLabel>G&rsquo;ildirak Plumber foydalanuvchi imzosi</FormLabel>
                <Select
                  borderColor={"gray.600"}
                  placeholder="G'ildirak Plumber foydalanuvchi imzosi"
                  {...register("gildirak_chilangar_user_signature", { required: true })}
                >
                  {wheelPlumberUser?.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>

            <Text
              as={"h1"}
              textAlign={"center"}
              m={0}
              fontSize={"xl"}
              fontWeight={700}
            >
              O‘qning sheyka va stupisa o‘tiradigan qismdan oldingi qismining
              diametri (mm)
            </Text>

            <Flex
              justifyContent={"space-between"}
              flexWrap={["wrap"]}
              gap={3}
              mt={4}
            >
              <Flex flexDir={"column"} w={"100%"}>
                <Text
                  as={"h1"}
                  textAlign={"center"}
                  m={0}
                  fontSize={"xl"}
                  fontWeight={700}
                >
                  O‘ng O‘q sheykasi
                </Text>
                <Flex
                  gap={3}
                  flexWrap={["wrap", "nowrap"]}
                  align={"center"}
                  my={4}
                >
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_right_d1")}
                      placeholder="d1"
                      type="text"
                    />
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_right_dc1")}
                      placeholder="d'1"
                      type="text"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      placeholder="d2"
                      {...register("neck_stumb_right_d2")}
                      type="text"
                    />
                    <Input
                      borderColor={"gray.600"}
                      placeholder="d'2"
                      {...register("neck_stumb_right_dc2")}
                      type="text"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_right_d3")}
                      type="text"
                      placeholder="d3"
                    />
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_right_dc3")}
                      placeholder="d'3"
                      type="text"
                    />
                  </FormControl>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} w={"100%"}>
                <Text
                  as={"h1"}
                  textAlign={"center"}
                  m={0}
                  fontSize={"xl"}
                  fontWeight={700}
                >
                  Chap O‘q sheykasi
                </Text>
                <Flex
                  gap={3}
                  flexWrap={["wrap", "nowrap"]}
                  align={"center"}
                  my={4}
                >
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_d1")}
                      type="text"
                      placeholder="d1"
                    />
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_dc1")}
                      type="text"
                      placeholder="d'1"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_d2")}
                      type="text"
                      placeholder="d2"
                    />
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_dc2")}
                      placeholder="d'2"
                      type="text"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_d3")}
                      type="text"
                      placeholder="d3"
                    />
                    <Input
                      borderColor={"gray.600"}
                      {...register("neck_stumb_left_dc3")}
                      type="text"
                      placeholder="d'3"
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel> Sheykaning eng katta oval qismi (mm)</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("part_of_neck")}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Sheykaning eng katta konus qismi (mm) </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("large_cone_part")}
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>
                  Labirint halqasini o‘rnatilish diametri (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_d4")}
                  type="text"
                  placeholder="d4"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_dc4")}
                  placeholder="d'4"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  Labirint halqasini o‘rnatishdagi farqi (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_another_d3")}
                  type="text"
                  placeholder="d3"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_another_dc3")}
                  type="text"
                  placeholder="d'3"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_another_d4")}
                  placeholder="d4"
                  type="text"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("labyrinth_ring_another_dc4")}
                  placeholder="d'4"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel whiteSpace={["pre-wrap", "nowrap"]}>
                  Erkin yoki sheykadagi to‘g‘ridan to‘g‘ri radial oraliq (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("radial_free_back")}
                  placeholder="задний 1"
                  type="text"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("radial_free_back1")}
                  placeholder="задний 2"
                  type="text"
                />
                <Input
                  borderColor={"gray.600"}
                  placeholder="передний 1"
                  {...register("radial_free_front")}
                  type="text"
                />
                <Input
                  borderColor={"gray.600"}
                  placeholder="передний 2 "
                  {...register("radial_free_front2")}
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
              Buksani o‘rnatilish diametrlari (mm)
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <Input
                  placeholder="O‘q d1 1"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_d1")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d1 2"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_d1_1")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d'1 1"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_dc1")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d'1 2"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_dc1_1")}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="O‘q d2 1"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_d2")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d2 2"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_d2_1")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d'2 1"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_dc2")}
                  type="text"
                />
                <Input
                  placeholder="O‘q d'2 1"
                  borderColor={"gray.600"}
                  {...register("fasad_buks_dc2_1")}
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
              Podshipnikni ishlab chikargan zavodi, belgisi, raqami, ishlab
              chiqarilgan oyi va yili
            </Text>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>Orqa</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_back")}
                  type="text"
                  placeholder="So'z shakli 1"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_back2")}
                  type="text"
                  placeholder="So'z shakli 2"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_back3")}
                  type="text"
                  placeholder="So'z shakli 3"
                />

                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_back4")}
                  type="text"
                  placeholder="So'z shakli 4"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Oldi</FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_front")}
                  type="text"
                  placeholder="So'z shakli 1"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_front2")}
                  type="text"
                  placeholder="So'z shakli 2"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_front3")}
                  type="text"
                  placeholder="So'z shakli 3"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("maded_factory_creating_front4")}
                  type="text"
                  placeholder="So'z shakli 4"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>
                  Qotirish vtulkasini chiqishi yoki minimal osevoy oraliq (mm)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("bushing_clearance")}
                  type="text"
                  placeholder="1"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("bushing_clearance2")}
                  type="text"
                  placeholder="2"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("bushing_clearance3")}
                  type="text"
                  placeholder="3"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("bushing_clearance4")}
                  type="text"
                  placeholder="4"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Qotirish vtulkasini siljishi diametr (mm)</FormLabel>

                <Input
                  borderColor={"gray.600"}
                  {...register("next_fasad_vtuk")}
                  type="text"
                  placeholder="1"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("next_fasad_vtuk2")}
                  type="text"
                  placeholder="2"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("next_fasad_vtuk3")}
                  type="text"
                  placeholder="3"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("next_fasad_vtuk4")}
                  type="text"
                  placeholder="4"
                />
              </FormControl>
            </Flex>

            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>
                  Vtulkani bosim yordamida preslash farqi (mm){" "}
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("gass_pass_wheel")}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Yog‘ (rusumi, zavod, partiya) </FormLabel>

                <Input
                  borderColor={"gray.600"}
                  {...register("lzsini_1")}
                  type="text"
                />
                <Input
                  borderColor={"gray.600"}
                  {...register("lzsini_2")}
                  type="text"
                />
              </FormControl>
            </Flex>

            <FormControl isInvalid={errors?.comment}>
              <FormLabel>Izoh </FormLabel>

              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="comment"
              />
            </FormControl>
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
      </ModalContent>
    </Modal>
  );
};

VU_90_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
