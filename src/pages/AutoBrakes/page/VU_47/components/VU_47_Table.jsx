import {
  Button,
  Flex,
  Image,
  Img,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import UserApi from "../../../../../Service/module/userModule.api";
import { vu_47 } from "@/utils/mock_heads";
import { useEffect, useState } from "react";
import { Deleteted, SimpleLoader } from "../../../../../components";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../../../utils/imageGet";
const VU_47_Table = () => {
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
    const { response } = await new UserApi().deleteVu47(carriageID);
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
      const { response } = await new UserApi().getVu47(paramsPage);
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
          shadow={"lg"}
        >
          <Thead bg={"#0c6170"} rounded={10}>
            <Tr>
              {vu_47?.headers?.map((item) => (
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
              <Th rowSpan={2}></Th>
            </Tr>
            <Tr>
              {vu_47?.nestedHeaders?.map((item, idx) => (
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
          </Thead>

          <Tbody>
            {gettingData?.results?.map((item, idx) => (
              <Tr key={item.id}>
                <Td>{currentPage * 10 + idx + 1}</Td>

                <Td>{item.date}</Td>
                <Td>{item.device_type}</Td>
                <Td>{item.serial_number}</Td>
                <Td>{item.charging_time_12}</Td>
                <Td>{item.charging_time_40}</Td>
                <Td>{item.slow_release_through_calibrated_orifices}</Td>
                <Td>{item.brake_cylinder_fill_time}</Td>
                <Td>{item.cylinder_pressure_empty}</Td>
                <Td>{item.cylinder_pressure_normal}</Td>
                <Td>{item.cylinder_pressure_full}</Td>
                <Td>{item.release_time_to_04}</Td>

                <Td>
                  <Image
                    width={"100px"}
                    src={imageGet(item?.author_info?.user_signature_url)}
                  />
                </Td>
                <Td>{item.acceptor_signature}</Td>
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
                      onClick={() => handleDelete(item?.id)}
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
};

export default VU_47_Table;
