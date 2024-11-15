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
import { useParams } from "react-router";
import { useState } from "react";
import { BreadCumbs } from "../../utils";
import { SimpleLoader } from "../../components";

export const AssemblyPageUnitId = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [complexData, setComplexData] = useState([null]);
  //   useEffect(() => {
  //     const getCarriageComp = async () => {
  //       setLoading(true);
  //       const { response } = await new UserApi().getCarriageComplectation(
  //         id?.replace("carriage-", "")
  //       );
  //       if (response) {
  //         setComplexData(response?.data);
  //         setLoading(false);
  //       }
  //     };

  //     getCarriageComp();
  //   }, [id]);
  return (
    <Container maxW="container.2xl" position={"relative"} mt={"180px"}>
      <BreadCumbs
        path={{ title: "Yig‘uv bo‘linmasi", link: "/assembly-unit" }}
        current={{ title: "Dalolatnoma", link: "/assembly-unit" }}
      />
      <Heading size={"xl"} textAlign={"center"} fontWeight={500}>
        Kirish va chiqish nazorati dalolatnomasi
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
                Aravalar bo’linmasi
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
                      <Th>Yon rama raqami</Th>
                      <Th>Ishlab chiqarilishi,zavod tamg’asi</Th>

                      <Th>Mavjudlik kodi</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr fontWeight={500}>
                      <Td>1</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>2</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>3</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>4</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table
                  size={"sm"}
                  whiteSpace={"wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="gray"
                >
                  <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                    <Tr>
                      <Th colSpan={4} textAlign={"center"}>
                        Ressor usti balkasi
                      </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr fontWeight={500}>
                      <Td>1</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>2</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
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
                G’ildirak juftligi
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
                      <Th>G’ildirak juftligi raqami</Th>
                      <Th>Ishlab chiqarilishi,zavod tamg’asi</Th>

                      <Th>Mavjudlik kodi</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr fontWeight={500}>
                      <Td>1</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>2</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>3</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>4</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
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
                Avtobirikma bo’linmasi
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
                      <Th>Avtobirikma raqami</Th>
                      <Th>Ishlab chiqarilishi,zavod tamg’asi</Th>
                      <Th>Mavjudlik kodi</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr fontWeight={500}>
                      <Td>1</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>2</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Table
                  size={"sm"}
                  whiteSpace={"wrap"}
                  variant={"striped"}
                  overflow={"hidden"}
                  colorScheme="gray"
                >
                  <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                    <Tr>
                      <Th colSpan={4} textAlign={"center"}>
                        Tortish xomut ponasining borligi
                      </Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    <Tr fontWeight={500}>
                      <Td>1</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                    <Tr fontWeight={500}>
                      <Td>2</Td>
                      <Td>asdasfaf</Td>
                      <Td>asfa</Td>
                      <Td>asfasf</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </>
        ) : (
          <Box as="div" bg={"#ffff"} my={8} mx="auto" rounded={"lg"} p={8}>
            <SimpleLoader />
          </Box>
        )
      ) : (
        <Flex>
          <Spinner mx={"auto"} my={"100"} color="green" size={"xl"} />
        </Flex>
      )}
    </Container>
  );
};
