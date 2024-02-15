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
import { Dalolatnoma_Model } from "./Modals/Dalolatnoma/Dalolatnoma_Model";
import { dalolatnoma_head } from "../../utils/mock_heads";
import { Link } from "react-router-dom";
const data = [0];

export const Dalolatnoma = () => {
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
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {dalolatnoma_head?.map((item) => (
                    <Th textAlign={"center"} key={item.label}>
                      {item.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    color={"green.800"}
                    fontWeight={"800"}
                    // textDecor={"underline"}
                  >
                    <Link
                      to={`/assembly-unit/carriage-${544545}`}
                      className="hover_carriage"
                    >
                      4544545
                    </Link>
                  </Td>
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
            <Button variant={"solid"} onClick={onOpen}>
              Қўшиш
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      <Dalolatnoma_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
