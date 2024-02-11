import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SliderMock } from "../../utils";
import { Fraza_model } from "./Modals/Fraza_model";
const data = [];
export const VU_10 = () => {
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
        VU-10
      </Heading>
      <Tooltip label="VU-10" placement="top" color={"teal.700"} bg={"white"}>
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
      </Tooltip>
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
              <Thead bg={"#0c6170"} rounded={10}></Thead>

              <Tbody></Tbody>
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
              VU-10 jurnali hali shakllanmagan
            </Text>
            {/* <Button variant={"solid"} onClick={onOpen}>
              VU-90 Shakl qo&apos;shish
            </Button> */}
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      {/* <Fraza_model isOpen={isOpen} onClose={onClose} /> */}
    </Box>
  );
};
