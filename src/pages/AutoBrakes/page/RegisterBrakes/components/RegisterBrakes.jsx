import { memo, useEffect, useMemo, useState } from "react";
import { vu_31 } from "@/utils/mock_heads";
import {
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import { register_razobshitel } from "@/utils/mock_heads";
import { register_breakes_silindir } from "@/utils/mock_heads";
import UserApi from "../../../../../Service/module/userModule.api";
const RegisterBrakesTable = memo(function RegisterBrakesTable() {
  const [isLoadingData, setIsLoading] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async () => {
    const paramsPage = {
      page: 1,
    };
    setIsLoading(true);
    const { response } = await new UserApi().getRezervuar(paramsPage);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  return (
    <>
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
            {register_breakes_silindir?.map((item) => (
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
        </Thead>

        <Tbody>
          {/* {gettingData?.results?.map((item, idx) => (
            <Tr key={item.carriage}>
              <Td>{idx + 1}</Td>
              <Td fontWeight={700} color={"green.900"}>
                {item.carriage_number}
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
              <Td whiteSpace={"nowrap"}>{item.tamir_vaqtida_gr13} soat</Td>
              <Td whiteSpace={"nowrap"}>{item.umumiy_turish_gr11} soat</Td>
              <Td>{item.nosoz_hujjat_raqam}</Td>
              <Td>
                {" "}
                <Flex gap={2} m={0}>
                  <Button
                    float={"right"}
                    borderColor={"blue.400"}
                    colorScheme="teal"
                    bgColor={"blue.400"}
                    minW={"30px"}
                    p={0}
                    _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </Button>
                  <Button
                    float={"right"}
                    borderColor={"green.400"}
                    colorScheme="teal"
                    bgColor={"green.400"}
                    p={0}
                    minW={"30px"}
                    _hover={{ bgColor: "green.500", opacity: "0.7" }}
                    onClick={() => handleUpdate(item)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  <Button
                    float={"right"}
                    borderColor={"red"}
                    minW={"30px"}
                    colorScheme="teal"
                    bgColor={"red"}
                    p={0}
                    _hover={{ bgColor: "red", opacity: "0.7" }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))} */}
        </Tbody>
      </Table>
    </>
  );
});

RegisterBrakesTable.propTypes = {
  gettingData: PropTypes.object,
};

export default RegisterBrakesTable;
