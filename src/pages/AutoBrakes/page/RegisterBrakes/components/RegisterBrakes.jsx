import { memo, useEffect, useState } from "react";
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
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import { register_breakes_silindir } from "@/utils/mock_heads";
import UserApi from "../../../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../../../utils/imageGet";
import { SimpleLoader } from "../../../../../components";
import ReactPaginate from "react-paginate";
const RegisterBrakesTable = memo(function RegisterBrakesTable() {
  const [isLoadingData, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
      };
      setIsLoading(true);
      const { response } = await new UserApi().getRezervuar(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
  }, [currentPage]);
  return (
    <>
      {isLoadingData ? (
        <SimpleLoader />
      ) : (
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
            {gettingData?.results?.map((item, idx) => (
              <Tr key={item.carriage}>
                <Td>{idx + 1}</Td>
                <Td>{item.rezervuar_date}</Td>
                <Td color={"teal.600"} fontWeight={700}>
                  {item.carriage}
                </Td>
                <Td>{item.repair_type}</Td>
                <Td>{item.spare_sum}</Td>
                <Td>{item.water_gass}</Td>
                <Td>{item.rapair_roll}</Td>
                <Td>{item.check_gass_2}</Td>
                <Td>{item.last_jumfrk_type_2}</Td>
                <Td>{item.check_gass_3}</Td>
                <Td>{item.check_result}</Td>

                <Td>
                  <Image
                    width={"100px"}
                    src={imageGet(item?.author_info?.user_signature_url)}
                  />
                </Td>
                <Td>
                  <Image
                    width={"100px"}
                    src={imageGet(item?.author_info?.user_signature_url)}
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
      )}

      <ReactPaginate
        pageCount={Math.ceil(
          (gettingData?.count ? gettingData?.count : 0) / 10
        )}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
      />
    </>
  );
});

RegisterBrakesTable.propTypes = {
  gettingData: PropTypes.object,
};

export default RegisterBrakesTable;
