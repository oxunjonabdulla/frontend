import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { vu_53_form } from "../../../../utils/mock_heads";
import UserApi from "../../../../Service/module/userModule.api";
export const InviteForm = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu53Prihod(data);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-53 shakliga vagon muvaffaqiyatli qo'shildi.",
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* VU-53 Create */}
      <ModalBody>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form?.headers?.map((item) => (
                  <Td
                    fontSize={"12px"}
                    textAlign={"center"}
                    key={item.label}
                    whiteSpace={"pre-wrap"}
                    fontWeight={700}
                  >
                    {item.label}
                  </Td>
                ))}
              </Tr>
              <Tr>
                <Td textAlign={"center"}>1</Td>
                <Td textAlign={"center"}>2</Td>
                <Td textAlign={"center"}>3</Td>
                <Td textAlign={"center"}>4</Td>
                <Td textAlign={"center"}>5</Td>
                <Td textAlign={"center"}>6</Td>
                <Td textAlign={"center"}>7</Td>
                <Td textAlign={"center"}>8</Td>
                <Td textAlign={"center"}>9</Td>
                <Td textAlign={"center"}>10</Td>
                <Td textAlign={"center"}>11</Td>
                <Td textAlign={"center"}>12</Td>
                <Td textAlign={"center"}>13</Td>
                <Td textAlign={"center"}>14</Td>

                <Td textAlign={"center"}>15</Td>
                <Td textAlign={"center"}>16</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("wheel_pair_sostav_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("sobstva_wheel_pair_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("type_wheel_pair_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("date_of_pustupleniya_1")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("factory_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("vedimis_nomer_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("is_pod_carriage_number_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("repair_type_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("last_repair_date_1")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("last_repair_punkt_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("buks_montaj_uzel_date_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("buks_montaj_uzel_last_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("obot_pair_date_1")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("obot_pair_1")}
                    type="text"
                  />
                </Td>
                <Td>Пр</Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("wheel_pair_sostav_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("sobstva_wheel_pair_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("type_wheel_pair_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("date_of_pustupleniya_2")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("factory_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("vedimis_nomer_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("is_pod_carriage_number_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("repair_type_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("last_repair_date_2")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("last_repair_punkt_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("buks_montaj_uzel_date_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("buks_montaj_uzel_last_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("obot_pair_date_2")}
                    type="date"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("obot_pair_2")}
                    type="text"
                  />
                </Td>
                <Td>Лев</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer mt={10}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form?.antoher?.map((item) => (
                  <Td
                    fontSize={"12px"}
                    textAlign={"center"}
                    key={item.label}
                    whiteSpace={"pre-wrap"}
                    rowSpan={item.rowspan}
                    fontWeight={700}
                    colSpan={item.colspan}
                  >
                    {item.label}
                  </Td>
                ))}
              </Tr>
              <Tr>
                {vu_53_form?.nestedHeaders?.map((item) => (
                  <Td
                    fontSize={"12px"}
                    fontWeight={700}
                    textAlign={"center"}
                    whiteSpace={"pre-wrap"}
                    key={item.label}
                    rowSpan={item.rowspan}
                    colSpan={item.colspan}
                  >
                    {item.label}
                  </Td>
                ))}
              </Tr>
              <Tr>
                <Td textAlign={"center"}>17</Td>
                <Td textAlign={"center"}>18</Td>
                <Td textAlign={"center"}>19</Td>
                <Td textAlign={"center"}>20</Td>
                <Td textAlign={"center"}>21</Td>
                <Td textAlign={"center"}>22</Td>
                <Td textAlign={"center"}>23</Td>
                <Td textAlign={"center"}>24</Td>
                <Td textAlign={"center"}>25</Td>
                <Td textAlign={"center"}>26</Td>
              </Tr>
              <Tr>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("strona_pair_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("type_buks_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_1")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_newtype_1")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_error_1")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("katana_diametr_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("tolshnik_obod_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("greb_setting_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("prokat_1")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("away_obod_1")}
                    type="text"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("strona_pair_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("type_buks_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_2")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_newtype_2")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Select
                    borderColor={"gray.600"}
                    placeholder="Ta'mir turi"
                    {...register("is_repair_error_2")}
                  >
                    <option value={true}>Yangi yig`ilgan</option>
                    <option value={false}>Ta`mirlangan</option>
                  </Select>
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("katana_diametr_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("tolshnik_obod_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("greb_setting_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("prokat_2")}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("away_obod_2")}
                    type="text"
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <SearchTrain setSerachingResult={setSerachingResult} />
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining maxsus raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining egasi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Ta`mirga kelgan vaqti </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Kelgan joyi (Zavod, VCHD, TXSH) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Peresilochniy raqami</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligi chiqarib olingan vagon raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Vagon ta`mir turi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining oxirgi yig`ilgan vaqti (formirivaniya){" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining oxirgi yig`ilgan joyi(formirivaniya)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Oxirgi o`rta ta`mirlangan vaqti</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Oxirgi o`rta ta`mirlangan joyi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan joyi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
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
          G`ildirak juftligining tomonlari O`ng, Chap
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Buksa holatining belgisi, Buksa qobig`ining turi (yo`lovchi yoki
              yuk vagon)
            </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Buksa holatining belgisi, Soz yoki Nosoz </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak holatining belgisi, Soz (yangi yig`ilgan yoki
              ta`mirlangan)
            </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              {" "}
              G`ildirak holatining belgisi, Nosoz(klassifikator bo`yicha nuqson
              raqami ){" "}
            </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
        </Flex>
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          G`ildirak juftligi o`lchamlari (мм)
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Yurish qismining diametri</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Obod qalinligi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Greben qalinligi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Greben тiklik o`lchamlari</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Prokat</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi")}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Obodning ichki yuzalari orasidagi masofa</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi")}
              type="text"
            />
          </FormControl>
        </Flex> */}
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
  );
};

InviteForm.propTypes = {
  onClose: PropTypes.func,
};
