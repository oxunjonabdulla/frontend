import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { vu_53, vu_53_form } from "../../../../utils/mock_heads";
export const InviteForm = ({ onClose }) => {
  const [trainFixType, setTrainFixType] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <Td>
                  <Input
                    borderColor={"gray.600"}
                    p={0}
                    fontSize={"10px"}
                    {...register("sinovi", { required: true })}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    p={0}
                    fontSize={"10px"}
                    borderColor={"gray.600"}
                    {...register("sinovi", { required: true })}
                    type="text"
                  />
                </Td>
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
                    {...register("sinovi", { required: true })}
                    type="text"
                  />
                </Td>
                <Td>
                  <Input
                    p={0}
                    fontSize={"10px"}
                    borderColor={"gray.600"}
                    {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining egasi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Ta`mirga kelgan vaqti </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Kelgan joyi (Zavod, VCHD, TXSH) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Peresilochniy raqami</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Vagon ta`mir turi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining oxirgi yig`ilgan joyi(formirivaniya)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Oxirgi o`rta ta`mirlangan vaqti</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Oxirgi o`rta ta`mirlangan joyi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan joyi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
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
              {...register("sinovi", { required: true })}
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
