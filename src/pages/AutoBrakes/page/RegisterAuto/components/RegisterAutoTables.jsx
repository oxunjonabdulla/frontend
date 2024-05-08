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
  useDisclosure,
} from "@chakra-ui/react";
import UserApi from "@/Service/module/userModule.api";

import PropTypes from "prop-types";
import { register_auto } from "@/utils/mock_heads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../../../utils/imageGet";
import { Deleteted, SimpleLoader } from "../../../../../components";
import ReactPaginate from "react-paginate";
const RegisterAutoTables = memo(function RegisterAutoTables() {
  const [isLoadingData, setIsLoading] = useState(true);
  const [deletedData, setDeletedData] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleDelete = (id) => {
    onOpen();
    setDeletedData(id);
  };

  const handleDelateFunction = async (carriageID) => {
    const { response } = await new UserApi().deleteAvtoRejim(carriageID);
    if (response) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
      };
      setIsLoading(true);
      const { response } = await new UserApi().getAvtoRejimList(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      {!isLoadingData ? (
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
                <Td>{currentPage * 10 + idx + 1}</Td>
                <Td>{item.repair_date}</Td>
                <Td>{item.automode_type}</Td>
                <Td>{item.repair_type}</Td>
                <Td>{item.automode_factory_number}</Td>
                <Td>{item.automode_roll_size}</Td>
                <Td>{item.tc_type_without_freight}</Td>
                <Td whiteSpace={"nowrap"}>{item.tc_type_middle}</Td>

                <Td whiteSpace={"nowrap"}>{item.tc_type_with_freight}</Td>

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
                      onClick={() => handleDelete(item.carriage)}
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
      ) : (
        <SimpleLoader />
      )}
      <Deleteted
        isOpen={isOpen}
        onClose={onClose}
        carriageNumber={deletedData}
        deletedFunction={handleDelateFunction}
      />
      {gettingData?.results?.length ? (
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
      ) : null}
    </>
  );
});

RegisterAutoTables.propTypes = {
  gettingData: PropTypes.object,
};

export default RegisterAutoTables;
