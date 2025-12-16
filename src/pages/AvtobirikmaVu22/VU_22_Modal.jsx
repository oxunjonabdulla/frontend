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
  useToast,
  Box,
  Divider,
} from "@chakra-ui/react";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { vu_22_avtobirikma_options } from "../../utils/mock_heads";

export const VU_22_Model = ({ onClose, isOpen, maintanceRecordId }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      // Initialize with all predefined options
      qismlar: vu_22_avtobirikma_options.map(title => ({
        title,
        works_quantity: "",
        worker_lastname: ""
      }))
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "qismlar",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const dataObj = {
      ...data,
      texnik_xizmat: maintanceRecordId,
    };
    const { response, error } = await new UserApi().postVu22Birikma(dataObj);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Ma'lumot muvaffaqiyatli qo'shildi.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      reset();
      window.location.reload();
    }
    if (error) {
      toast({
        status: "error",
        title: "Xatolik yuz berdi.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  // Calculate the starting index for dynamic fields
  const predefinedCount = vu_22_avtobirikma_options.length;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="6xl"
    >
      <ModalOverlay />
      <ModalContent maxW="80vw" width="80vw">
        <ModalHeader>Ma'lumot qo'shish</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody maxH="70vh" overflowY="auto">
            {/* PREDEFINED FIELDS */}
            {fields.slice(0, predefinedCount).map((item, idx) => (
              <Box key={item.id} mb={6}>
                <Flex gap={4} my={4} align="center">
                  <FormControl>
                    <FormLabel>Nomi</FormLabel>
                    <Input
                      value={vu_22_avtobirikma_options[idx]}
                      isReadOnly
                      {...register(`qismlar.${idx}.title`)}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Hajmi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.works_quantity`)}
                      placeholder="Ish hajmi"
                    />
                  </FormControl>
                </Flex>

                <Flex gap={4} my={4} align="center">
                  <FormControl>
                    <FormLabel>Ishchi familiyasi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.worker_lastname`)}
                      placeholder="Ishchi familiyasi"
                    />
                  </FormControl>
                  {/* No delete button for predefined fields */}
                </Flex>

                {idx < predefinedCount - 1 && <Divider my={4} />}
              </Box>
            ))}

            {/* DYNAMIC USER-ADDED FIELDS */}
            {fields.slice(predefinedCount).map((item, i) => {
              const actualIndex = predefinedCount + i;
              return (
                <Box key={item.id} mb={6}>
                  <Flex gap={4} my={4} align="center">
                    <FormControl>
                      <FormLabel>Nomi</FormLabel>
                      <Input
                        {...register(`qismlar.${actualIndex}.title`,{
                            required: "Ish nomini kiriting",
                        })}
                        placeholder="Ish nomi"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Hajmi</FormLabel>
                      <Input
                        {...register(`qismlar.${actualIndex}.works_quantity`,{
                                                      required: "Ish hajmini kiriting",

                            })}
                        placeholder="Ish hajmi"
                      />
                    </FormControl>
                  </Flex>

                  <Flex gap={4} my={4} align="center">
                    <FormControl>
                      <FormLabel>Ishchi familiyasi</FormLabel>
                      <Input
                        {...register(`qismlar.${actualIndex}.worker_lastname`,{
                             required: "Ishchi familiyasini kiriting",

                            })}
                        placeholder="Ishchi familiyasi"
                      />
                    </FormControl>

                    <Button
                      marginTop="auto"
                      colorScheme="red"
                      onClick={() => remove(actualIndex)}
                      type="button"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </Flex>

                  {(i < fields.slice(predefinedCount).length - 1 || predefinedCount > 0) && <Divider my={4} />}
                </Box>
              );
            })}

            <Button
              colorScheme="blue"
              onClick={() =>
                append({
                  title: "",
                  works_quantity: "",
                  worker_lastname: "",
                })
              }
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
              mt={4}
            >
              Yangi Ma'lumot qo&apos;shish
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Bekor qilish
            </Button>
            <Button colorScheme="green" isLoading={isLoading} type="submit">
              Saqlash
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};