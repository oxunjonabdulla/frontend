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
import UserApi from "@/Service/module/userModule.api";

import PropTypes from "prop-types";
import { register_auto } from "@/utils/mock_heads";
import { timeClear } from "../../../../../utils/timeClear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../../../utils/imageGet";
const RegisterAutoTables = memo(function RegisterAutoTables() {
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
    const { response } = await new UserApi().getAvtoRejimList(paramsPage);
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
            {register_auto?.top_head?.map((item) => (
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
            {register_auto?.middle_head?.map((item) => (
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
            {register_auto?.bottom_head?.map((item) => (
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
              <Td>{item.repair_date}</Td>
              <Td>{item.automode_type}</Td>
              <Td>{item.repair_type}</Td>
              <Td>{item.automode_factory_number}</Td>
              <Td>{item.automode_roll_size}</Td>
              <Td>{item.last_type_jamrak}</Td>
              <Td>{item.tc_type_without_freight}</Td>
              <Td whiteSpace={"nowrap"}>{item.tc_type_middle}</Td>

              <Td whiteSpace={"nowrap"}>{item.tc_type_with_freight}</Td>

              <Td>
                <Image
                  width={"100px"}
                  src={item?.author_info?.user_signature_url}
                />
              </Td>
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

RegisterAutoTables.propTypes = {
  gettingData: PropTypes.object,
};

export default RegisterAutoTables;
