import { memo, useEffect, useMemo, useState } from "react";
import { vu_31 } from "@/utils/mock_heads";
import {
  Button,
  Flex,
  Image,
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
import UserApi from "../../../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const RegisterRazobshitelTable = memo(function RegisterRazobshitelTable() {
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
    const { response } = await new UserApi().getRazobkran(paramsPage);
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
            {register_razobshitel?.map((item) => (
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
          {gettingData?.results?.map((item, idx) => (
            <Tr key={item.carriage}>
              <Td>{idx + 1}</Td>
              <Td>{item.razabshitel_date}</Td>
              <Td>{item.carriage}</Td>
              <Td>{item.repair_type}</Td>
              <Td>{item.razabshitel_kran_type}</Td>
              <Td>{item.check_gass_1}</Td>
              <Td>{item.last_jumfrk_type_1}</Td>
              <Td>{item.check_gass_2}</Td>
              <Td>{item.last_jumfrk_type_2}</Td>
              <Td>{item.check_gass_3}</Td>
              <Td>{item.check_result}</Td>

              <Td>
                <Image
                  width={"100px"}
                  src={item?.author_info?.user_signature_url}
                />
              </Td>
              <Td></Td>
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
                    // onClick={() => handleUpdate(item)}
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
          ))}
        </Tbody>
      </Table>
    </>
  );
});

RegisterRazobshitelTable.propTypes = {
  gettingData: PropTypes.object,
};

export default RegisterRazobshitelTable;
