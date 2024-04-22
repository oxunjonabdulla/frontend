import { memo, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import ReactImageUploading from "react-images-uploading";
import { useForm } from "react-hook-form";
import UserApi from "../../../../../Service/module/userModule.api";

const ExitImage = memo(function ExitImage({ isOpen, carriageNumber, onClose }) {
  const [images2, setImages2] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const onChangeImage2 = (imageList) => {
    setImages2(imageList);
  };
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    const formData = new FormData();

    images2?.forEach((image) => {
      formData.append("exit_images", image.file);
    });

    if (images2) {
      setLoading(true);
      const { response, error } = await new UserApi().postExitImage(
        carriageNumber,
        formData
      );

      if (response) {
        setLoading(false);
        toast({
          status: "success",
          title: "Chiqish rasmi muvaffaqiyatli qo'shildi!",
          duration: 6000,
          isClosable: true,
          position: "top-right",
          fontSize: "3xl",
        });
        window.location.reload();
      }
      if (error) {
        setLoading(false);
        toast({
          status: "error",
          title:
            error?.detail ||
            (error?.enter_images && "Vagon rasmi kiritilmagan") ||
            (error?.ivtsa && "Chiqish rasmi kiritilmagan"),
          duration: 6000,
          isClosable: true,
          position: "top-right",
          fontSize: "7px",
        });
      }
    } else {
      toast({
        status: "error",
        title: "Ma'lumnotlar orasida xatolik mavjud!",
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "7px",
      });
    }
  };

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
      <ModalContent position={"relative"}>
        <ModalHeader textAlign={"center"}>
          Chiqish rasmini kiritish!
        </ModalHeader>
        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
              <FormControl>
                <FormLabel>Chiqish rasmini qo&apos;shish:</FormLabel>
                <ReactImageUploading
                  multiple
                  value={images2}
                  onChange={onChangeImage2}
                  maxNumber={4}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <Flex flexWrap={"wrap"} gap={4}>
                      <Flex>
                        <Button
                          style={isDragging ? { color: "red" } : undefined}
                          p={"10px 12px"}
                          onClick={onImageUpload}
                          fontSize={"sm"}
                          {...dragProps}
                        >
                          Rasm qo&apos;shish
                        </Button>
                        &nbsp;
                        <Button
                          p={"10px 12px"}
                          fontSize={"sm"}
                          colorScheme="red"
                          onClick={onImageRemoveAll}
                        >
                          Barchasini o&apos;chirish
                        </Button>
                      </Flex>
                      {imageList.map((image, index) => (
                        <Flex
                          key={index}
                          align={"center"}
                          gap={1}
                          border={"1px solid"}
                          borderColor={"gray.500"}
                          p={2}
                          rounded={"xl"}
                        >
                          <Img
                            src={image["data_url"]}
                            alt=""
                            w="150px"
                            objectFit={"cover"}
                          />
                          <Flex flexDir={"column"} gap={2}>
                            <Button
                              p={"10px 12px"}
                              fontSize={"sm"}
                              colorScheme="teal"
                              onClick={() => onImageUpdate(index)}
                            >
                              Yangilash
                            </Button>
                            <Button
                              p={"10px 12px"}
                              fontSize={"sm"}
                              colorScheme="red"
                              onClick={() => onImageRemove(index)}
                            >
                              O&apos;chirish
                            </Button>
                          </Flex>
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </ReactImageUploading>
                <FormHelperText color={images2?.length === 4 && "yellow.400"}>
                  {images2?.length ? images2?.length : 0}-4 rasmgacha*
                </FormHelperText>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
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
});

export default ExitImage;
