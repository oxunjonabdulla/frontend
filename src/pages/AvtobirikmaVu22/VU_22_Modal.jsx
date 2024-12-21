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
} from "@chakra-ui/react";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import UserApi from "../../Service/module/userModule.api";
import { vu_22_options2 } from "../../utils/mock_heads";

export const VU_22_Model = ({ onClose, isOpen, maintanceRecordId }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={["sm", "md", "lg", "6xl"]}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ma'lumot qo'shish</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            {fields.map((item, idx) => (
              <>
                <Flex key={item.id} gap={4} my={4} align="center">
                  <FormControl isInvalid={errors?.qismlar?.[idx]?.title}>
                    <FormLabel>Nomi</FormLabel>
                    <Input list="fruit-options"
                      {...register(`qismlar.${idx}.title`, {
                        required: "Nomini kiriting",
                      })}
                      placeholder="Nomini kiriting"
                    />
                    <datalist id="fruit-options">
                      {vu_22_options2.map((item, i) => (
                        <option value={item} key={i} />
                      ))}
                    </datalist>
                  </FormControl>

                  <FormControl isInvalid={errors?.qismlar?.[idx]?.works_quantity}>
                    <FormLabel>Hajmi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.works_quantity`, {
                        required: "Ish hajmini kiriting",
                      })}
                      placeholder="Ish hajmi"
                    />
                  </FormControl>
                </Flex>
                <Flex key={idx} gap={4} my={4} align="center">

                  <FormControl
                    isInvalid={errors?.qismlar?.[idx]?.worker_lastname}
                  >
                    <FormLabel>Ishchi familiyasi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.worker_lastname`, {
                        required: "Ishchi familiyasini kiriting",
                      })}
                      placeholder="Ishchi familiyasi"
                    />
                  </FormControl>

                  <FormControl
                    isInvalid={errors?.qismlar?.[idx]?.additional_text}
                  >
                    <FormLabel>Qo'shimcha ma'lumot</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.additional_text`)}
                      placeholder="Qo'shimcha ma'lumot"
                    />
                  </FormControl>

                  <FormControl isInvalid={errors?.qismlar?.[idx]?.vu22_section}>
                    <FormLabel>Bo'lim</FormLabel>
                    <Input
                      defaultValue={"avtobirikma"}
                      readOnly
                      {...register(`qismlar.${idx}.vu22_section`, {
                        required: "Bo'limni kiriting",
                      })}
                    />
                  </FormControl>

                  <Button
                    marginTop={"auto"}
                    colorScheme="red"
                    onClick={() => remove(idx)}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </Flex>
              </>
            ))}

            <Button
              colorScheme="blue"
              onClick={() =>
                append({
                  title: "",
                  works_quantity: "",
                  worker_lastname: "",
                  additional_text: "",
                  vu22_section: "avtobirikma",
                })
              }
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
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
