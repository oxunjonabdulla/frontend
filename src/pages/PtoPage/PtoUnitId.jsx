import {
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router";
import UserApi from "../../Service/module/userModule.api";
import { useState } from "react";
import { BreadCumbs } from "../../utils";

export const PtoUnitId = () => {
  const [complexData, setComplexData] = useState(null);
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const getCarriageComp = async () => {
      setLoading(true);
      const { response } = await new UserApi().getCarriageComplectation(
        id?.replace("carriage-", "")
      );
      if (response) {
        setComplexData(response?.data);
        setLoading(false);
      }
    };

    getCarriageComp();
  }, [id]);
  return (
    <Container maxW="container.2xl" position={"relative"} mt={"100px"}>
      <BreadCumbs
        path={{ title: "PTO operator", link: "/pto-unit" }}
        current={{ title: "Vagon komplektatsiyasi", link: "/pto-unit" }}
      />
      <Heading size={"xl"} textAlign={"center"} fontWeight={500}>
        Vagon komplektatsiyasi
      </Heading>

      <Heading size={"md"} textAlign={"center"} mt={4} fontWeight={500}>
        Vagon Raqami: <b> {id.replace("carriage-", "")} </b>
      </Heading>

      {complexData?.length ? (
        !isLoading ? (
          <>
            <Box
              as="div"
              bg={"#ffff"}
              my={8}
              mx="auto"
              rounded={"lg"}
              position={"relative"}
              p={8}
            >
              <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"}>
                Kol/para
              </Heading>

              <TableContainer shadow={"lg"} borderRadius={"lg"}>
                <Table
                  size={"sm"}
                  whiteSpace={"wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="gray"
                >
                  <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                    <Tr>
                      <Th>T/R</Th>
                      <Th>Zavod raqam</Th>
                      <Th>Raqam</Th>
                      <Th>Yili</Th>
                      <Th>
                        {" "}
                        O{"'"}ng g{"'"}ildirak qalinligi
                      </Th>
                      <Th> Chap g{"'"}ildirak qalinligi</Th>
                      <Th> Соответсвует или не соответсвует </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {complexData[0]?.kol_para?.map((item, idx) => (
                      <Tr key={item.id} fontWeight={500}>
                        <Td>{idx + 1}</Td>
                        <Td color={"green.800"} fontWeight={"800"}>
                          {item?.factory_number}
                        </Td>
                        <Td>{item?.number}</Td>
                        <Td>{item?.year}</Td>
                        <Td>{item?.wheel_width_right}</Td>
                        <Td>{item?.wheel_width_left}</Td>
                        <Td>
                          {item?.is_correct
                            ? "cоответсвует"
                            : "не соответсвует"}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              as="div"
              bg={"#ffff"}
              my={8}
              mx="auto"
              rounded={"lg"}
              position={"relative"}
              p={8}
            >
              <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"}>
                Nad/Balka
              </Heading>

              <TableContainer shadow={"lg"} borderRadius={"lg"}>
                <Table
                  size={"sm"}
                  whiteSpace={"wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="gray"
                >
                  <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                    <Tr>
                      <Th>T/R</Th>
                      <Th>Zavod raqam</Th>
                      <Th>Raqam</Th>
                      <Th>Yili</Th>
                      <Th>Соответсвует или не соответсвует </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {complexData[0]?.nad_balka?.map((item, idx) => (
                      <Tr key={item.id} fontWeight={500}>
                        <Td>{idx + 1}</Td>
                        <Td color={"green.800"} fontWeight={"800"}>
                          {item?.factory_number}
                        </Td>
                        <Td>{item?.number}</Td>
                        <Td>{item?.year}</Td>
                        <Td>
                          {item?.is_correct
                            ? "cоответсвует"
                            : "не соответсвует"}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              as="div"
              bg={"#ffff"}
              my={8}
              mx="auto"
              rounded={"lg"}
              position={"relative"}
              p={8}
            >
              <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"}>
                Bok/Rama
              </Heading>

              <TableContainer shadow={"lg"} borderRadius={"lg"}>
                <Table
                  size={"sm"}
                  whiteSpace={"wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="gray"
                >
                  <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                    <Tr>
                      <Th>T/R</Th>
                      <Th>Zavod raqam</Th>
                      <Th>Raqam</Th>
                      <Th>Yili</Th>
                      <Th> Соответсвует или не соответсвует </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {complexData[0]?.bok_rama?.map((item, idx) => (
                      <Tr key={item.id} fontWeight={500}>
                        <Td>{idx + 1}</Td>
                        <Td color={"green.800"} fontWeight={"800"}>
                          {item?.factory_number}
                        </Td>
                        <Td>{item?.number}</Td>
                        <Td>{item?.year}</Td>
                        <Td>
                          {item?.is_correct
                            ? "cоответсвует"
                            : "не соответсвует"}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </>
        ) : (
          <Flex>
            <Spinner mx={"auto"} my={"100"} color="green" size={"xl"} />
          </Flex>
        )
      ) : (
        <Flex>
          <Spinner mx={"auto"} my={"100"} color="green" size={"xl"} />
        </Flex>
      )}
    </Container>
  );
};
