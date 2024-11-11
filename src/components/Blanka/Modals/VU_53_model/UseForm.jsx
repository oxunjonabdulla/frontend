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

export const UseForm = ({ onClose, isOpen, vu53Id }) => {
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
    const { response, error } = await new UserApi().postVu53Rasxod(data, vu53Id);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-53 Rasxod shakliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-50 shakli mavjud.",
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
      size={"full"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-53 Jurnalini orqa qismini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody style={{ overflow: "auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.axle_seating_diameter}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`qning рostupochniy qismini diametri
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("axle_seating_diameter")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.running_part_diameter}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Yurish qismining diametri
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("running_part_diameter")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.flange_thickness}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Greben qalinligi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("flange_thickness")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.rim_thickness}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Obod qalinligi
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rim_thickness")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.prokat}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Prokat
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("prokat")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.rim_inner_surface_distance}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Obodning ichki yuzalari orasidagi masofa
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rim_inner_surface_distance")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.tire_replacement_reason_code}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirakni almashtirish sababi (klassifikator bo`yicha nosozlik raqami )
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("tire_replacement_reason_code")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.axle_code_1_new}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`q (kod 1)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("axle_code_1_new")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.wheel_code_1_new}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirak (kod 2)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_code_1_new")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.axle_code_1_old}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`q (kod 1)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("axle_code_1_old")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.wheel_code_1_old}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirak (kod 2)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("wheel_code_1_old")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.assembled_wheelset}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Yig`ilgan g`ildirak juftligi 
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("assembled_wheelset")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.medium_repair}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`rta ta`mir	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("medium_repair")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.current_repair}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Joriy ta`mir	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("current_repair")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.restored_running_part}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirak juftligining  yurish qismini  qayta tiklangan	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("restored_running_part")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.restored_running_part_after_welding}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Greben qismi payvandlangandan so`ng  g`ildirak juftligining  yurish qismini  qayta tiklangan	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("restored_running_part_after_welding")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.restored_m110_thread_on_axe_neck}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`qning bo`yin qismidagi M110 rezbasin qayta tiklash	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("restored_m110_thread_on_axe_neck")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.restored_axe_neck_section}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`qning bo`yin qismini  qayta tiklash	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("restored_axe_neck_section")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.restoration_reason_running_part_fault_number}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirak juftligining yurish qismini qayta tiklangankbr sababi (klassifikator bo`yicha nosozlik raqami)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("restoration_reason_running_part_fault_number")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.bearing_shell_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("bearing_shell_type")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.neck_and_front_stepping_part}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Bo`yni va old postupichniy qism	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("neck_and_front_stepping_part")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.stepping_part}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  postupichniy qismi	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("stepping_part")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.inner_neck_ring}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Boyinidagi ichki xalqasi	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("inner_neck_ring")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.middle_part}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  O`rta qismi	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("middle_part")}
                />
              </FormControl>
              <FormControl isInvalid={errors?.rim_disc_hub}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Obod, Disk, Stupitsa	
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("rim_disc_hub")}
                />
              </FormControl>
            </Flex>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl isInvalid={errors?.after_welding_of_gear_part}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Greben qismini payvandlangandan so`ng
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("after_welding_of_gear_part")}
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
              <FormControl isInvalid={errors?.wheelset_type}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  G`ildirak juftliklarini  bergan
                </FormLabel>
                <Select
                  borderColor={"gray.600"}
                  placeholder="G`ildirak juftliklarini  bergan"
                  {...register("provided_gildirak_user_signature")}
                >
                  {wheelUser?.map((item) => (
                    <option key={item?.id} value={item?.id}>{item?.name}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isInvalid={errors?.comment}>
                <FormLabel whiteSpace={["wrap", "nowrap"]}>
                  Izoh
                </FormLabel>
                <Input
                  borderColor={"gray.600"}
                  {...register("comment")}
                />
              </FormControl>
            </Flex>

            {/* <ModalBody>
              <TableContainer>
                <Table
                  borderRadius={10}
                  whiteSpace={"pre-wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="blackAlpha">
                  <Thead bg={"#0c6170"} rounded={10}>
                    {vu_53_form_second2?.map((list, idx) => ( // lists
                      <Tr key={idx}>
                        {list?.map((item, idx) => ( // objects
                          <Td
                            fontSize={"15px"}
                            key={idx}
                            textAlign={"center"}
                            rowSpan={item?.rowspan}
                            colSpan={item?.colspan}
                            style={{ minWidth: "150px", color: "white" }}
                          >
                            {item?.label}
                          </Td>
                        ))}
                      </Tr>
                    ))}
                  </Thead>
                  <Tbody>
                    <Tr>
                      {vu_53_form2.map((item, idx) => (
                        <Td key={idx}>
                          <Input
                            type="number"
                            p={1}
                            {...register(item?.key)}
                          />
                        </Td>
                      ))}
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Smena ustasi imzosi"
                          {...register("gildirak_user_signature")}
                        >
                          {wheelUser?.map((item) => (
                            <option key={item?.id} value={item?.id}>{item?.name}</option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Smena ustasi imzosi"
                          {...register("provided_gildirak_user_signature")}
                        >
                          {wheelUser?.map((item) => (
                            <option key={item?.id} value={item?.id}>{item?.name}</option>
                          ))}
                        </Select>
                      </Td>
                      <Td>
                        <Input
                          p={1}
                          {...register('comment')}
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody> */}

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
    </Modal >
  );
};

UseForm.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  vu53Id: PropTypes.number,
};
