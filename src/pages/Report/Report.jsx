import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { faBook, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { ReportModal } from "./ReportModal"; // TODO agar ishlatilmasa yuq qilish kerak;
import { ShowReportJurnal } from "./page/ShowReportJurnal";
import { SearchTrain } from "../../utils";
import UserApi from "../../Service/module/userModule.api";

export const Reports = () => {
  const [gettingData, setGettingData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [serachingResult, setSerachingResult] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = async () => {
    setLoading(true);

    const { response, error } = await new UserApi().getGeneralReport(serachingResult);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "Xisobot Tayyorlash muvaffaqiyatli amalga oshirildi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      setGettingData(response?.data);
      onClose();
      setSerachingResult(null);
    }
    if (error) toast({
        status: "error",
        title: error?.error ? error?.error : "Bu vagon raqami uchun Jurnallar mavjud emas.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
  };

  console.log(gettingData);
  

  return (
    <Container maxW="container.2xl">
      <Heading size={"xl"} textAlign={"center"} mt={14} fontWeight={500}>
        Hisbotlar
      </Heading>

      <Box
        as="div"
        bg={"#ffff"}
        my={8}
        mx="auto"
        rounded={"lg"}
        position={"relative"}
      >
        <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"} mx={"auto"}>
          Jurnallar hisbotlar ro'yxati
        </Heading>

        <Flex alignItems={"end"} mb={10}>
          <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} me={10}>
            <SearchTrain setSerachingResult={setSerachingResult} key={gettingData?.carriage_number} />
          </Flex>
          <Button colorScheme="teal" onClick={onSubmit} isLoading={isLoading}>
            Hisobot Tayyorlash
          </Button>
        </Flex>

        {gettingData?.journals?.length > 0 ? (
          <Table variant={"striped"} style={{ borderRadius: "10px" }}>
            <Tbody>
              <Tr fontSize={24} h={"50px"} fontWeight={500}>
                <Td textAlign={"center"}>T/r</Td>
                <Td textAlign={"center"}>Vagon raqami</Td>
                <Td textAlign={"center"}>Jurnal nomi</Td>
                <Td textAlign={"center"}>Malumotni ko'rish</Td>
              </Tr>
              {gettingData?.journals?.map((item, idx) => (
                <Tr key={idx}>
                  <Td textAlign={"center"} fontSize={"xl"} w={100}>{idx + 1}</Td>
                  <Td textAlign={"center"} fontSize={"xl"} w={200}>{gettingData?.carriage_number}</Td>
                  <Td fontSize={"xl"}>{item?.journal_name}</Td>
                  <Td width={"200px"}>
                    {item?.data !== null ? (
                      <Box w={"100%"} display={"flex"} justifyContent={"center"}>
                        <Button
                          onClick={() => {
                            setShowData(item?.data);
                            onOpen();
                          }}
                          colorScheme="teal"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                      </Box>
                    ) : (
                      <Text textAlign={"center"} color={"red"}>
                        Jurnal mavjud emas
                      </Text>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4} mt={40}>
            <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
            <Text>
              Jurnallar hisbotlar ro'yxati
            </Text>
          </Flex>
        )
        }
        <ShowReportJurnal onClose={onClose} isOpen={isOpen} data={showData} />
      </Box>
    </Container>
  );
};
