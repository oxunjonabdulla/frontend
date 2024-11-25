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
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import UserApi from "../../../Service/module/userModule.api";
import { VU_50_Form } from "./VU_54_Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const VU_54_Model = ({ onClose, isOpen }) => {
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
    name: "data",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu54({vu54_fields: [data]});
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-54 jurnaliga vagon muvaffaqiyatli qo'shildi.",
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
          : "Bu vagon raqami uchun VU-68 jurnali mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  useEffect(() => {
    if (fields.length == 0) append();
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
          VU-54 Shaklini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            {fields.map((group, idx) => (
              <VU_50_Form
                key={group.id}
                {...{
                  group,
                  idx,
                  control,
                  register,
                  remove,
                  errors,
                }}
              />
            ))}
            {fields?.length < 10 ? (
              <Button
                colorScheme="messenger"
                onClick={() => append({ key: fields.length + 1 })}
                leftIcon={
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "5px",
                      borderRadius: 50,
                    }}
                  />
                }
              >
                Ma&apos;lumor birligi qushish
              </Button>
            ) : (
              <Text
                fontWeight={700}
                color="white"
                bgColor={"orange"}
                rounded={4}
                p={"5px 10px"}
              >
                Ma&apos;lumot chegarasi 10 ta dan oshmasligi kerak
              </Text>
            )}
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

VU_54_Model.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
