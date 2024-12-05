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
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import UserApi from "../../../../Service/module/userModule.api";

export const VU_32Modal = ({ onClose, isOpen }) => {
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

    const { response, error } = await new UserApi().postVu32(
      serachingResult,
      data
    );
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-32 muvaffaqiyatli yaratildi.",
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
        title: !error?.error
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun VU-32 jurnali mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={["full"]}
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent overflow={"auto"}>
        <ModalHeader textAlign={"center"}>VU-32</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex
              gap={3}
              flexWrap={["wrap", "nowrap"]}
              alignItems={"center"}
              my={4}
            >
              <SearchTrain setSerachingResult={setSerachingResult} />
              <FormControl isInvalid={errors?.repair_master}>
                <FormLabel fontSize={"10px"}>Imzolovchi xodim</FormLabel>
                <Select
                  borderColor={"gray.600"}
                  placeholder="Imzolovchi xodim"
                  {...register("repair_master", { required: true })}
                >
                  <option value={"shamil_shodmonov"}>Shamil Shodmonov</option>
                  <option value={"uzoqov_nusrat"}>Uzoqov Nusrat</option>
                </Select>
              </FormControl>
            </Flex>
            <br />
            <TableContainer p={4} border={"1px solid #eeeee"}>
              <Table
                borderRadius={10}
                size={"sm"}
                whiteSpace={"pre-wrap"}
                variant={"striped"}
                overflow={"hidden"}
                colorScheme="blackAlpha"
                shadow={"lg"}
              >
                <Thead bg={"#0c6170"} rounded={10}>
                  <Tr>
                    <Th>Sana</Th>
                    <Th>Telejka uzatilgan vagonning raqami</Th>
                    <Th>Vagon qurilgan sanasi</Th>
                    <Th>Vagon ostidagi telejkaning tartib raqami</Th>
                    <Th>Yon ramaning raqami</Th>
                    <Th>Ishlab - chiqaruvchi zavod (tamg’asi)</Th>
                    <Th> Ishlab chiqarilgan yili </Th>
                    <Th> M o’lchami - “ Yon ramasining bazasi”, mm.</Th>
                    <Th> Tayanch yuzasining tiklanishi (ha/yo’q)</Th>
                    <Th> Xizmat muddati uzaytirilish belgisi ( ha/yo’q)</Th>
                    <Th> Yangi xizmat muddati tugagan yili</Th>
                    <Th> Xizmat muddatini uzytirgan tashkilotning tamg’asi </Th>
                    <Th> Ressor usti to’sini-ning raqami</Th>
                    <Th> Ishlab- chiqaruvchi zavod (tamg’asi)</Th>
                    <Th> Ishlab chiqarilgan yili</Th>
                    <Th> Pyatnik osti quril-masining chuqurligi, mm.</Th>
                    <Th>
                      Ressor usti to’sini -dagi pyatnik osti qurilmasining
                      di-ametri,mm{" "}
                    </Th>
                    <Th>Pyatnik osti qurilmasini tiklash</Th>
                    <Th>Xizmat muddati uzaytirilish belgisi ( ha/yo’q )</Th>
                    <Th>Yangi xizmat muddati tugashining yili</Th>
                    <Th>Xizmat muddatini uzytirgan tashkilot--ning tamg’asi</Th>
                    <Th colSpan={2}>
                      {" "}
                      Friktsion ponаsining yuqorilаshishi (+) yoki quyilаshishi
                      (-), mm.
                    </Th>
                    <Th colSpan={2}>
                      {" "}
                      Telejkа yon rаmаsining yonаltiruvchilаri vа buksа korpusi
                      o‘rtаsidаgi umumiy bo’ylаmа orаlig‘i
                    </Th>
                    <Th colSpan={2}>
                      Telejkа yon rаmаsi-ning yo‘nаltiruv-chilаri vа buksа
                      korpusi o‘rtаsidаgi umumiy kundаlаng orаlig‘i
                    </Th>
                    <Th>
                      Telejkа vа vаgon sirpаngich-lаri o‘rtаsidаgi orаliq, mm.
                    </Th>
                    <Th>
                      Telejkаdа bаjаrilgаn tаhmir turi: KR-1, DR-2; M-1698-3
                      modernizаtsiyalаnishi; “А.stаki”- 4 turdаgi tebrаnishlаr
                      friktsion so‘ndirgichlаri bilаn jihozlаnishi
                    </Th>
                    <Th>Bog‘lovchi bаlkаning raqаmi </Th>
                    <Th>Ishlаb - chiqаruvchi zаvod (tаmg’аsi) </Th>
                    <Th>Ishlаb chiqаrilgаn yili</Th>
                    <Th>
                      Bog’lovchi bаlkаsi pyatnik osti qurilmаsining diаmetri,
                      mm.
                    </Th>
                  </Tr>
                  <Tr>
                    <Th>1</Th>
                    <Th>2</Th>
                    <Th>3</Th>
                    <Th>4</Th>
                    <Th>5</Th>
                    <Th>6</Th>
                    <Th>7 </Th>
                    <Th>8</Th>
                    <Th>9</Th>
                    <Th>10</Th>
                    <Th>11</Th>
                    <Th>12</Th>
                    <Th>13</Th>
                    <Th>14</Th>
                    <Th>15</Th>
                    <Th>16</Th>
                    <Th>17</Th>
                    <Th>18</Th>
                    <Th>19</Th>
                    <Th>20</Th>
                    <Th>21</Th>
                    <Th>22</Th>
                    <Th>23</Th>
                    <Th>24</Th>
                    <Th>25</Th>
                    <Th>26</Th>
                    <Th>27</Th>
                    <Th>28</Th>
                    <Th>29</Th>
                    <Th>30</Th>
                    <Th>31</Th>
                    <Th>32</Th>
                    <Th>33</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.date}>
                        <Input
                          width={"150px"}
                          borderColor={"gray.600"}
                          {...register("date")}
                          type="date"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.carriage}>
                        <Input
                          width={"150px"}
                          borderColor={"gray.600"}
                          {...register("carriage")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.carriage_build_date}>
                        <Input
                          borderColor={"gray.600"}
                          {...register("carriage_build_date")}
                          placeholder="oy/yil"
                          w={"150px"}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4}>1</Td>
                    <Td colSpan={8} textAlign={"center"}>
                      Chаp yon rаmаsi
                    </Td>

                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_number}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_number")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_factory_medal}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_factory_medal")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_made_year}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_made_year")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_pyatnik_deep}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_pyatnik_deep")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl
                        isInvalid={errors?.ressor_pyatnik_deep_diametr}
                      >
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_pyatnik_deep_diametr")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_reverse}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_reverse")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_service_life}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_service_life")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_new_year_expired}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_new_year_expired")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_extend_factory}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_extend_factory")}
                          type="text"
                        />
                      </FormControl>
                    </Td>

                    <Td colSpan={6} textAlign={"center"}>
                      Chap yon rаmаsi
                    </Td>
                    <Td>Chap</Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.telejka_repair_type}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_repair_type")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.balka_number}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("balka_number")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.balka_factory}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("balka_factory")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.balka_made_year}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("balka_made_year")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={8} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.balka_pyatnik}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("balka_pyatnik")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_number_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("factory_medal_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("created_year_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_baza_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("stump_stend_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_life_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("new_service_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_extend_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>

                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_left_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_right_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_left_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_right_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_left_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_right_first_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register(
                            "telejka_carriage_slip_left_first_levaya"
                          )}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td colSpan="8" textAlign={"center"}>
                      On&#39;g Yon ramasi
                    </Td>
                    <Td colSpan="6" textAlign={"center"}>
                      On&#39;g Yon ramasi
                    </Td>
                    <Td>On&#39;g</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_number_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("factory_medal_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("created_year_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_baza_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("stump_stend_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_life_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("new_service_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_extend_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>

                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_left_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_right_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_left_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_right_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_left_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_right_first_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register(
                            "telejka_carriage_slip_left_first_bokavaya"
                          )}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td rowSpan={4}>2</Td>
                    <Td colSpan={8} textAlign={"center"}>
                      Chаp yon rаmаsi
                    </Td>

                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_number_copy}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_number_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl
                        isInvalid={errors?.ressor_factory_medal_copy}
                      >
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_factory_medal_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_made_year_copy}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_made_year_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_pyatnik_deep_copy}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_pyatnik_deep_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl
                        isInvalid={errors?.ressor_pyatnik_deep_diametr_copy}
                      >
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_pyatnik_deep_diametr_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_reverse_copy}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_reverse_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl isInvalid={errors?.ressor_service_life_copy}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_service_life_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl
                        isInvalid={errors?.ressor_new_year_expired_copy}
                      >
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_new_year_expired_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td rowSpan={4} textAlign={"center"} fontWeight={700}>
                      <FormControl
                        isInvalid={errors?.ressor_extend_factory_copy}
                      >
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("ressor_extend_factory_copy")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td colSpan={6} textAlign={"center"}>
                      Chap yon rаmаsi
                    </Td>
                    <Td>Chap</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_number_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("factory_medal_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("created_year_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_baza_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("stump_stend_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_life_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("new_service_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_extend_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>

                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_left_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_right_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_left_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_right_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_left_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl width={"100px"}>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayto_right_second_levaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register(
                            "telejka_carriage_slip_left_second_levaya"
                          )}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td colSpan="8" textAlign={"center"}>
                      On&#39;g Yon ramasi
                    </Td>
                    <Td colSpan="6" textAlign={"center"}>
                      On&#39;g Yon ramasi
                    </Td>
                    <Td>On&#39;g</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_number_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("factory_medal_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("created_year_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("side_baza_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("stump_stend_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_life_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("new_service_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("service_extend_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>

                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_left_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("friktsion_upper_right_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_left_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_side_right_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayt_left_second_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_wayt_right_seond_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                    <Td textAlign={"center"} fontWeight={700}>
                      <FormControl>
                        <Input
                          width={"110px"}
                          borderColor={"gray.600"}
                          {...register("telejka_carriage_slip_seond_bokavaya")}
                          type="text"
                        />
                      </FormControl>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
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
VU_32Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
