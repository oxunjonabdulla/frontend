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
  useDisclosure
} from "@chakra-ui/react";
import { faBook, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ReportModal } from "./ReportModal";
import { ShowReportJurnal } from "./page/ShowReportJurnal";

export const Reports = () => {
  const [gettingData, setGettingData] = useState([]);
  const [showData, setShowData] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isOpen: isOpenShow, onClose: onCloseShow, onOpen: onOpenShow } = useDisclosure();

  function listRewrite() {
    let list = [];
    for (let i = 0; i < gettingData?.journals?.length; i += 2) 
      list.push([gettingData?.journals[i], gettingData?.journals[i + 1]]);
    gettingData?.journals?.length % 2 && list.push([gettingData?.journals[gettingData?.journals?.length - 1]]);
    console.log(list);
    return list;
  }

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

        <Flex justifyContent={"flex-end"}>
          <Button colorScheme="teal" my={10} float={"right"} onClick={onOpen}>
            Hisobot olish
          </Button>
        </Flex>

        {listRewrite()?.length > 0 ? (
          <Table variant={"striped"}>
            <Tbody>
              <Tr fontSize={24} h={"50px"} fontWeight={500}>
                <Td textAlign={"center"}>Hisobot nomi</Td>
                <Td textAlign={"center"}>Action</Td>
                <Td textAlign={"center"}>Hisobot nomi</Td>
                <Td textAlign={"center"}>Action</Td>
              </Tr>
              {listRewrite().map((item, idx) => (
                <Tr key={idx}>
                  {item?.map((item2, idx2) => (
                    <>
                      <Td key={idx2} fontSize={"xl"}>{item2?.journal_name}</Td>
                      <Td key={idx2 + ".2"} w={40}>
                        {item2?.data !== null ? (
                          <Box w={"100%"} display={"flex"} justifyContent={"center"}>
                            <Button
                              onClick={() => {
                                setShowData(item2?.data);
                                onOpenShow();
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
                    </>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
            <Button colorScheme="teal" onClick={onOpen} marginTop={5}>
              {" "}
              Hisobot olish
            </Button>
          </Flex>
        )
        }
        <ReportModal onClose={onClose} isOpen={isOpen} setGettingData={setGettingData} />
        <ShowReportJurnal onClose={onCloseShow} isOpen={isOpenShow} data={showData} />
      </Box>
    </Container>
  );
};
