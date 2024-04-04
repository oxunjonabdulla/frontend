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
import { vu_90 } from "../../utils/mock_heads";
import { VU_90_Model } from "./Modals/VU_90_Model";
const data = [0];
export const VU_90 = () => {
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
        VU-90 Shakl
      </Heading>
      <Tooltip
        label="VU-90 Shaklini qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
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
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_90?.headers?.map((item) => (
                    <Th
                      fontSize={"10px"}
                      textAlign={"center"}
                      key={item.label}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}
                    >
                      {item.label}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {vu_90?.nestedHeaders?.map((item, idx) => (
                    <Th
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item.rowspan}
                      colSpan={item.colspan}
                    >
                      {item?.isImg ? (
                        <Img src={item?.label} w={"80%"} mx={"auto"} />
                      ) : (
                        item?.label
                      )}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {vu_90?.nestedDeepHeaders?.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item?.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td rowSpan={2}>asd</Td>
                  <Td rowSpan={2}>asd</Td>
                  <Td rowSpan={2}>asd</Td>
                  <Td rowSpan={2}>asd</Td>
                  <Td rowSpan={2}>asd</Td>
                  <Td>o&apos;ng</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                </Tr>
                <Tr>
                  <Td>Chap</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
                  <Td>asd</Td>
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
              VU-90 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              VU-90 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <VU_90_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
