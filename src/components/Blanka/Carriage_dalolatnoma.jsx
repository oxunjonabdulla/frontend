import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SliderMock } from "../../utils";
import { carriage_dalolatnoma_head } from "../../utils/mock_heads";
import { Auto_dalolatnoma_model } from "./Modals/AutoDalolatnoma/Auto_dalolatnoma_model";
const data = [0];

export const CarriageDalolatnoma = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoadingFulStatistik, setIsLoading] = useState(true);

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
        Кириш ва чиқиш далолатномаси
      </Heading>
      <Button
        borderRadius={"50%"}
        colorScheme="teal"
        width={"50px"}
        height={"50px"}
        position={"absolute"}
        right={3}
        top={-12}
        onClick={onOpen}
      >
        +
      </Button>
      {!isLoadingFulStatistik ? (
        data?.length ? (
          <TableContainer p={4} border={"1px solid #eeeee"}>
            <Table
              borderRadius={10}
              size={"sm"}
              whiteSpace={"pre-wrap"}
              variant={"striped"}
              overflow={"hidden"}
              colorScheme="blackAlpha"
              shadow={"lg"}
            >
              <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                <Tr>
                  {carriage_dalolatnoma_head?.map((item) => (
                    <Th
                      textAlign={"center"}
                      key={item.label}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                <Tr fontWeight={500}>
                  <Td outline={"1px solid gray"}>1</Td>
                  <Td outline={"1px solid gray"}>asdasfaf</Td>
                  <Td outline={"1px solid gray"}>asfa</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                  <Td outline={"1px solid gray"}>asfasf</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Кириш ва чиқиш назорати далолатномаси топилмади
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              Қўшиш
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <Auto_dalolatnoma_model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
