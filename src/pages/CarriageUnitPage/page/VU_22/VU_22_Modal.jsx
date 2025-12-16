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
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import UserApi from "../../../../Service/module/userModule.api";

// Define the default options
const defaultAravaOptions = [
  "SNII-X3 telejkasini ta'mirlash",
  "Kr, Qora/Elektrodlar",
  "Tri.Plankasi/triangel qavsi",
  "Nishab tekisligi plankasi",
  "Yumshatuvchi klin",
  "Shiplintlar/cheka",
  "Rezinkali vtulka"
];

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
      qismlar: defaultAravaOptions.map(title => ({
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
    const { response, error } = await new UserApi().postVu22Arava(dataObj);
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
  const predefinedCount = defaultAravaOptions.length;

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
          <ModalBody maxH="70vh" overflowY="auto">
            {/* PREDEFINED FIELDS */}
            {fields.slice(0, predefinedCount).map((item, idx) => (
              <Box key={item.id} mb={6}>
                <Flex gap={4} my={4} align="center">
                  <FormControl>
                    <FormLabel>Nomi</FormLabel>
                    <Input
                      value={defaultAravaOptions[idx]}
                      isReadOnly
                      {...register(`qismlar.${idx}.title`)}
                    />
                  </FormControl>

                  <FormControl isInvalid={errors?.qismlar?.[idx]?.works_quantity}>
                    <FormLabel>Hajmi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.works_quantity`, {
//                         required: "Ish hajmini kiriting",
                      })}
                      placeholder="Ish hajmi"
                    />
                  </FormControl>
                </Flex>

                <Flex gap={4} my={4} align="center">
                  <FormControl
                    isInvalid={errors?.qismlar?.[idx]?.worker_lastname}
                  >
                    <FormLabel>Ishchi familiyasi</FormLabel>
                    <Input
                      {...register(`qismlar.${idx}.worker_lastname`, {
//                         required: "Ishchi familiyasini kiriting",
                      })}
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
        <FormControl isInvalid={errors?.qismlar?.[actualIndex]?.title}>
          <FormLabel>Nomi</FormLabel>
          <Input
            {...register(`qismlar.${actualIndex}.title`, {
//               required: "Nomini kiriting",
            })}
            placeholder="Nomini kiriting"
          />
        </FormControl>

        <FormControl isInvalid={errors?.qismlar?.[actualIndex]?.works_quantity}>
          <FormLabel>Hajmi</FormLabel>
          <Input
            {...register(`qismlar.${actualIndex}.works_quantity`, {
//               required: "Ish hajmini kiriting",
            })}
            placeholder="Ish hajmi"
          />
        </FormControl>
      </Flex>

      <Flex gap={4} my={4} align="center">
        <FormControl
          isInvalid={errors?.qismlar?.[actualIndex]?.worker_lastname}
        >
          <FormLabel>Ishchi familiyasi</FormLabel>
          <Input
            {...register(`qismlar.${actualIndex}.worker_lastname`, {
//               required: "Ishchi familiyasini kiriting",
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