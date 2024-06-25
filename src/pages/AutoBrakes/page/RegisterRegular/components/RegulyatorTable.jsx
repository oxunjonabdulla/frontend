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

import PropTypes from "prop-types";
import UserApi from "../../../../../Service/module/userModule.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "@/utils/imageGet";
import { SimpleLoader } from "@/components";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../../../../../components";
import { register_rehulyator } from "../../../../../utils/mock_heads";
import { timeMoment } from "../../../../../utils/roleTest";
const RegulyatorTable = memo(function RegulyatorTable() {
  const [isLoadingData, setIsLoading] = useState(true);
  const [deletedData, setDeletedData] = useState(true);
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
    const { response } = await new UserApi().deleteRegulyator(carriageID);
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
      const { response } = await new UserApi().getRegulyator(paramsPage);
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
              {register_rehulyator?.map((item) => (
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
              <Tr key={item.id}>
                <Td>{currentPage * 10 + idx + 1}</Td>
                <Td>{timeMoment(item.created_at)?.day}</Td>
                <Td>{item.carriage_number}</Td>
                <Td>{item.ptp_type}</Td>
                <Td>{item.corp_number}</Td>
                <Td>{item.kgs_check}</Td>
                <Td>{item.a_ptp_to_mm}</Td>
                <Td>{item.b_ptp_to_mm}</Td>
                <Td>{item.prp_to_mm}</Td>
                <Td>{item.prp_to_mm}</Td>
                <Td>{item.repair_check}</Td>

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
                      borderColor={"red"}
                      minW={"30px"}
                      colorScheme="teal"
                      bgColor={"red"}
                      p={0}
                      _hover={{ bgColor: "red", opacity: "0.7" }}
                      onClick={() => handleDelete(item?.carriage)}
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

RegulyatorTable.propTypes = {
  gettingData: PropTypes.object,
};

export default RegulyatorTable;
