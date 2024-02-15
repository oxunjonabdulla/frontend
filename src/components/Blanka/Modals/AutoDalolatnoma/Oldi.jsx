import {
  Button,
  FormControl,
  Input,
  ModalBody,
  ModalFooter,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import PropTypes from "prop-types";
export const Oldi = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <SearchTrain />
        <br />
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                <Td>№</Td>
                <Td>Yon rama raqami</Td>
                <Td>Ishlab chiqarilishi,zavod tamg’asi</Td>
                <Td>Mavjudlik kodi</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td colSpan={4} textAlign={"center"}>
                  Ressor usti balkasi
                </Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
                      type="text"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl isInvalid={errors?.c61_code_builder}>
                    <Input
                      borderColor={"gray.600"}
                      {...register("c61_code_builder", { required: true })}
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
        <Button variant={"outline_red"} mr={3} onClick={onClose}>
          Yopish
        </Button>
        <Button
          variant={"outline"}
          //   isLoading={isLoading}
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
Oldi.propTypes = {
  onClose: PropTypes.func,
};
