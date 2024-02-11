import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  Spinner,
  TableContainer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import { TableData } from "./TableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import UserApi from "../../Service/module/userModule.api";
import { useSelector } from "react-redux";
import { SimpleLoader } from "../TrainLoader/SimpleLoader";
import { SearchTrain } from "../../utils/SearchTrain";

export const TableTrain = () => {
  const [images, setImages] = useState(null);
  const [images2, setImages2] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [getDataLoading, setDataLoading] = useState(false);
  const [trainFixType, setTrainFixType] = useState(null);

  const [getTestResult, setTestResult] = useState([]);
  const [serarchingResult, setSerachingResult] = useState(null);

  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onChangeImage = (imageList) => {
    setImages(imageList);
  };
  const onChangeImage2 = (imageList) => {
    setImages2(imageList);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useSelector(({ dailyToday }) => dailyToday);

  useEffect(() => {
    const handleCarriageData = async () => {
      setDataLoading(true);
      const { response } = await new UserApi().getCarriageOne(serarchingResult);
      setDataLoading(false);
      setTrainFixType(response?.data);
    };

    if (serarchingResult === getTestResult[0]?.carriage_number) {
      handleCarriageData();
    }
  }, [getTestResult, serarchingResult]);

  const onSubmit = async (datas) => {
    if (!images || !images2) {
      toast({
        status: "error",
        title: "Vagon rasmi va IVTSA kirtilmadi",
        duration: 6000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    } else {
      const formData = new FormData();
      for (const key in datas) {
        formData.append(key, datas[key]);
      }
      formData.append("carriage_number", trainFixType?.carriage_number);
      formData.append("repair_type", trainFixType?.repair_type);

      images?.forEach((image) => {
        formData.append("enter_images", image.file);
      });

      images2?.forEach((image) => {
        formData.append("ivtsa", image.file);
      });
      if (serarchingResult) {
        setLoading(true);
        const { response, error } = await new UserApi().postDaily(formData);

        if (response) {
          setLoading(false);
          toast({
            status: "success",
            title: "Tamir uchun vagon muvaffaqiyatli yaratildi",
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
              (error?.ivtsa && "IVTSA rasmi kiritilmagan"),
            duration: 6000,
            isClosable: true,
            position: "top-right",
            fontSize: "7px",
          });
        }
      } else {
        toast({
          status: "error",
          title: "Vagon raqami kiritilmadi yoki bu raqamdagi vagon mavjud emas",
          duration: 6000,
          isClosable: true,
          position: "top-right",
          fontSize: "7px",
        });
      }
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      as="div"
      bg={"#ffff"}
      my={8}
      mx="auto"
      rounded={"lg"}
      position={"relative"}
    >
      <Heading as={"h3"} size={"lg"} mb={5} textAlign={"center"}>
        Bugungi ta&apos;mirga qo&apos;yilgan vagonlar
      </Heading>

      <Button
        borderRadius={"50%"}
        variant={"solid"}
        width={"50px"}
        height={"50px"}
        position={"absolute"}
        right={3}
        top={-12}
        onClick={onOpen}
      >
        +
      </Button>

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
            Bugungi ta&apos;mirga vagon qo&apos;shish
          </ModalHeader>
          <ModalCloseButton />
          {getDataLoading && (
            <Flex
              position={"absolute"}
              display={"flex"}
              top={0}
              left={0}
              justifyContent={"center"}
              align={"center"}
              width={"100%"}
              height={"100%"}
              bgColor={"rgba(255,255,255,0.5)"}
              backdropFilter={"blur(2px)"}
              rounded={10}
              zIndex={1000}
            >
              <Spinner size={"xl"} color="teal" />
            </Flex>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <SearchTrain
                  setSerachingResult={setSerachingResult}
                  setTestResult={setTestResult}
                />{" "}
                <FormControl isInvalid={errors?.year_of_manufacture}>
                  <FormLabel>Курилган йили:</FormLabel>
                  <NumberInput
                    borderColor={"gray.600"}
                    max={new Date().getUTCFullYear()}
                    defaultValue={new Date().getUTCFullYear()}
                    min={1900}
                    {...register("year_of_manufacture", { required: true })}
                  >
                    <NumberInputField />
                  </NumberInput>
                </FormControl>
                <FormControl isInvalid={errors?.repair_date}>
                  <FormLabel>Кейинги таъмир санаси:</FormLabel>

                  <Input
                    type="date"
                    {...register("repair_date", { required: true })}
                    borderColor={"gray.600"}
                  />
                </FormControl>
              </Flex>

              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl isInvalid={errors?.repair_date}>
                  <FormLabel>Таъмир тури:</FormLabel>
                  <Input
                    type="text"
                    borderColor={"gray.600"}
                    disabled
                    placeholder={trainFixType?.repair_type?.toUpperCase()}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.approximate_completion}>
                  <FormLabel>Техник ечим муддати:</FormLabel>
                  <Input
                    type="date"
                    {...register("approximate_completion", { required: true })}
                    borderColor={"gray.600"}
                  />
                </FormControl>
                <FormControl isInvalid={errors?.date_of_registration}>
                  <FormLabel>Ta&apos;mirga qo&apos;yilgan sanasi:</FormLabel>
                  <Input
                    type="date"
                    {...register("date_of_registration", { required: true })}
                    borderColor={"gray.600"}
                  />
                </FormControl>
              </Flex>

              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl>
                  <FormLabel>Vagon rasmi:</FormLabel>
                  <ReactImageUploading
                    multiple
                    value={images}
                    onChange={onChangeImage}
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
                            variant={"outline_red"}
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
                                variant={"solid"}
                                onClick={() => onImageUpdate(index)}
                              >
                                Yangilash
                              </Button>
                              <Button
                                p={"10px 12px"}
                                fontSize={"sm"}
                                variant={"outline_red"}
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
                  <FormHelperText color={images?.length === 4 && "yellow.400"}>
                    {images?.length ? images?.length : 0}-4 rasmgacha*
                  </FormHelperText>
                </FormControl>
              </Flex>

              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl>
                  <FormLabel>Vagon Turi:</FormLabel>
                  <Select
                    borderColor={"gray.600"}
                    {...register("carriage_type")}
                  >
                    <option value="covered">Крытый</option>
                    <option value="platform">Платформа</option>
                    <option value="gondola">Полувагон</option>
                    <option value="tanker">Цистерна</option>
                    <option value="grainer">Зерновоз</option>
                    <option value="cementer">Цементовоз</option>
                    <option value="fitting">Фитинг платформа</option>
                    <option value="mineral">Минераловоз</option>
                    <option value="another">Другое</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={errors?.company_name}>
                  <FormLabel>Tegishli tashkilot:</FormLabel>
                  <Input
                    type="text"
                    placeholder="Tashkilot nomi"
                    borderColor={"gray.600"}
                    {...register("company_name", { required: true })}
                  />
                </FormControl>
              </Flex>
              <Flex
                gap={3}
                flexWrap={["wrap", "nowrap"]}
                align={"center"}
                my={4}
              >
                <FormControl>
                  <FormLabel>IVTSA ma&apos;lumotnasi:</FormLabel>
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
                            variant={"outline_red"}
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
                                variant={"solid"}
                                onClick={() => onImageUpdate(index)}
                              >
                                Yangilash
                              </Button>
                              <Button
                                p={"10px 12px"}
                                fontSize={"sm"}
                                variant={"outline_red"}
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
              <Button variant={"outline_red"} mr={3} onClick={onClose}>
                Yopish
              </Button>
              <Button
                variant={"outline"}
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

      {!isLoadingFulStatistik ? (
        data?.length ? (
          <TableContainer
            borderRadius={10}
            border={"1px solid #eeeee"}
            shadow={data?.length && "xl"}
          >
            <TableData dataMock={data} />
          </TableContainer>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon
              icon={faTrainSubway}
              fontSize={"70px"}
              opacity={"0.4"}
            />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Tamirlash uchun vagon topilmadi
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              Vagon qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SimpleLoader />
      )}
    </Box>
  );
};
