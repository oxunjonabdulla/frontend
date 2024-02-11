import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
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
import PropTypes from "prop-types";
import { VU_36_Model } from "./Modals/VU_36_Model";
import { timeClear } from "../../utils/timeClear";
import { SliderMock } from "../../utils";
import { vu_36 } from "../../utils/mock_heads";

export const VU_36 = ({ data }) => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
        VU-36 Jurnali
      </Heading>
      <Tooltip
        label="VU-36 Jurnalini qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
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
            >
              <Thead bg={"#0c6170"} rounded={10}>
                <Tr>
                  {vu_36?.nestedHeaders?.map((item, idx) => (
                    <Th fontSize={"10px"} textAlign={"center"} key={idx}>
                      {item.label}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {data?.map((item, idx) => (
                  <Tr key={idx}>
                    <Td>{idx + 1}</Td>
                    <Td fontWeight={700} color={"green.900"}>
                      {item.carriage}
                    </Td>
                    <Td>{item.yuk_vagon_tamir_turi}</Td>
                    <Td>{item.bildirish_number}</Td>
                    <Td>
                      {item.yuk_vagon_tamir_turi}
                      <Divider bgColor={"gray.400"} my={2} />
                      {item.tamir_turi_kodi}
                    </Td>

                    <Td whiteSpace={"nowrap"}>
                      {item.tamir_turi_date}
                      <Divider bgColor={"gray.400"} my={2} />
                      {timeClear(item.tamir_turi_hour) +
                        ":" +
                        timeClear(item.tamir_turi_minute)}
                    </Td>
                    <Td>
                      {item.korxona_tamir_yuli}
                      <Divider bgColor={"gray.400"} my={2} />
                      {item.korxona_kodi}
                    </Td>

                    <Td whiteSpace={"nowrap"}>{item.ega_kodi}</Td>

                    <Td whiteSpace={"nowrap"}>
                      {item.tamir_date}
                      <Divider bgColor={"gray.400"} my={2} />
                      {timeClear(item.tamir_hour) +
                        ":" +
                        timeClear(item.tamir_minute)}
                    </Td>

                    <Td>{item.kod_moder_1}</Td>
                    <Td>{item.kod_moder_2}</Td>
                    <Td>{item.kod_moder_3}</Td>
                    <Td>{item.kod_moder_4}</Td>
                  </Tr>
                ))}
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
              VU-36 jurnali topilmadi
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              VU-36 qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <VU_36_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
VU_36.propTypes = {
  data: PropTypes.array,
};
