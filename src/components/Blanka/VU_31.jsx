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
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { VU_31_Model } from "./Modals/VU_31_Model";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { timeClear } from "../../utils/timeClear";
import { SliderMock } from "../../utils";
import { vu_31 } from "../../utils/mock_heads";

export const VU_31 = ({ data }) => {
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
        VU-31 Jurnali
      </Heading>
      <Tooltip
        label="VU-31 Jurnalini qo'shish"
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
          <TableContainer p={4} border={"1px solid #eeeee"} shadow={"lg"}>
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
                  {vu_31?.nestedHeaders?.map((item) => (
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
                  {vu_31?.nestedTwo?.map((item, idx) => (
                    <Th fontSize={"10px"} key={idx} textAlign={"center"}>
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {data?.map((item, idx) => (
                  <Tr key={item.carriage}>
                    <Td>{idx + 1}</Td>
                    <Td fontWeight={700} color={"green.900"}>
                      {item.carriage}
                    </Td>
                    <Td>{item.is_freight ? "Yukli" : "Yuksiz"}</Td>
                    <Td>{item.train_number}</Td>
                    <Td>{item.last_repair}</Td>
                    <Td>{item.buksa}</Td>
                    <Td>{item.rolik_podshipnik}</Td>
                    <Td>{item.boshqa_tech_error}</Td>
                    <Td>{item.junatish_park}</Td>
                    <Td whiteSpace={"nowrap"}>{item.nosoz_kirish_date}</Td>
                    <Td>
                      {timeClear(item.nosoz_kirish_hour) +
                        ":" +
                        timeClear(item.nosoz_kirish_minute)}
                    </Td>
                    <Td whiteSpace={"nowrap"}>{item.tamir_uzatish_date}</Td>
                    <Td>
                      {timeClear(item.tamir_uzatish_hour) +
                        ":" +
                        timeClear(item.tamir_uzatish_minute)}
                    </Td>
                    <Td whiteSpace={"nowrap"}>{item.tamir_boshlanish_date}</Td>
                    <Td>
                      {timeClear(item.tamir_boshlanish_hour) +
                        ":" +
                        timeClear(item.tamir_boshlanish_minute)}
                    </Td>
                    <Td whiteSpace={"nowrap"}>{item.nosoz_chiqish_date}</Td>
                    <Td>
                      {timeClear(item.nosoz_chiqish_hour) +
                        ":" +
                        timeClear(item.nosoz_chiqish_minute)}
                    </Td>
                    <Td whiteSpace={"nowrap"}>{item.bekat_yulida_gr11} soat</Td>
                    <Td whiteSpace={"nowrap"}>{item.tamir_yulida_gr13} soat</Td>
                    <Td whiteSpace={"nowrap"}>
                      {item.tamir_vaqtida_gr13} soat
                    </Td>
                    <Td whiteSpace={"nowrap"}>
                      {item.umumiy_turish_gr11} soat
                    </Td>
                    <Td>{item.nosoz_hujjat_raqam}</Td>
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
              VU-31 jurnali topilmadi
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              VU-31 qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <VU_31_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

VU_31.propTypes = {
  data: PropTypes.array,
};
