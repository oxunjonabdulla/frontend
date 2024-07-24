import {
  Button,
  Flex,
  IconButton,
  Image,
  Img,
  Table,
  Tbody,
  Td,
  Text,
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
  faEye,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { imageGet } from "../../../../../utils/imageGet";
import { VU_47_Update } from "./VU_47_Update";
const VU_47_Table = () => {
  const [isLoadingData, setIsLoading] = useState(true);
  const [deletedData, setDeletedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenBack,
    onClose: onCloseBack,
    onOpen: onOpenBack,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleDelete = (id) => {
    onOpen();
    setDeletedData(id);
  };

  const handleDelateFunction = async (carriageID) => {
    const { response } = await new UserApi().deleteVu47(deletedData?.uuid);
    if (response) {
      window.location.reload();
    }
  };

  const handleBack = (data) => {
    setDeletedData(data);
    onOpenBack();
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
              <Tr key={item?.front_detail?.id}>
                <Td>{currentPage * 10 + idx + 1}</Td>

                <Td>{item?.front_detail?.date}</Td>
                <Td>{item?.front_detail?.device_type}</Td>
                <Td>{item?.front_detail?.serial_number}</Td>
                <Td>{item?.front_detail?.charging_time_12}</Td>
                <Td>{item?.front_detail?.charging_time_40}</Td>
                <Td>
                  {item?.front_detail?.slow_release_through_calibrated_orifices}
                </Td>
                <Td>{item?.back_detail?.brake_cylinder_fill_time}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_empty}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_normal}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_full}</Td>
                <Td>{item?.front_detail?.release_time_to_04}</Td>

                <Td>
                  <Image
                    width={"100px"}
                    src={imageGet(item?.author_info?.user_signature_url)}
                  />
                </Td>
                <Td>{item?.front_detail?.acceptor_signature}</Td>
                <Td>
                  {item?.back_detail?.device_type === "null" && (
                    <Flex justify={"center"} align={"center"} gap={2} m={0}>
                      <Text>Orqa tomonini kiritish:</Text>
                      <IconButton
                        onClick={() => handleBack(item?.back_detail)}
                        colorScheme="messenger"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                      />
                    </Flex>
                  )}
                  <Flex gap={2} m={0}>
                    <Button
                      float={"right"}
                      borderColor={"red"}
                      minW={"30px"}
                      colorScheme="teal"
                      bgColor={"red"}
                      p={0}
                      _hover={{ bgColor: "red", opacity: "0.7" }}
                      onClick={() => handleDelete(item?.front_detail)}
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
        carriageNumber={String(deletedData?.id)}
        deletedFunction={handleDelateFunction}
      />

      <VU_47_Update
        updateData={deletedData}
        isOpen={isOpenBack}
        onClose={onCloseBack}
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
