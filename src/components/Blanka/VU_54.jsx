import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faDownload,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../utils";
import { VU_54_Model } from "./Modals/VU_54_model";
import UserApi from "../../Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { Deleteted } from "../Deletete";
import { ImageSignature } from "../ImageSignature";
import { vu_50, vu_54 } from "../../utils/mock_heads";
export const VU_54 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [getTableData, setGetinfTableData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [delateModal, setDelateModal] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenShowModel,
    onOpen: onOpenShowModel,
    onClose: onCloseShowModel,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu54All(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };
  const handleCheckAndDelete = (deletedID) => {
    setDelateModal(true);
    setGetinfTableData(deletedID);
  };

  const handleDelate = async (carriageID) => {
    const { response } = await new UserApi().deleteVu54(carriageID);
    if (response) {
      window.location.reload();
    }
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

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
        VU-54 Shakl
      </Heading>
      <Tooltip
        label=" VU-50 Shaklni qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
        <Button
          borderRadius={"50%"}
          colorScheme="teal"
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
        gettingData?.results?.length ? (
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
                  {vu_54?.map((item) => (
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
                  <Tr key={item?.id}>
                    <Td>{currentPage * 10 + idx + 1}</Td>

                    <Td>{item?.wheel_pair_number}</Td>
                    <Td>{item?.grph_3_4_plus}</Td>
                    <Td>{item?.vkm_get_new}</Td>
                    <Td>{item?.vkm_get_depot_new}</Td>
                    <Td>{item?.not_change_elements}</Td>
                    <Td>{item?.change_elements}</Td>
                    <Td>{item?.defective}</Td>
                    <Td>{item?.is_defect_not_change}</Td>
                    <Td>{item?.is_defect_change}</Td>
                    <Td>{item?.grph_11_12_13_plus}</Td>
                    <Td>{item?.new_elements}</Td>
                    <Td>{item?.new_point_enter}</Td>
                    <Td>{item?.new_wheel_enter}</Td>
                    <Td>{item?.expired_elements_made}</Td>
                    <Td>{item?.buks_circle_face_repair}</Td>
                    <Td>{item?.buks_circle_face_repair_not_turn}</Td>
                    <Td>{item?.three_typeof_wheel_turn}</Td>
                    <Td>{item?.rolls_gun_repair}</Td>
                    <Td>{item?.rolls_neeg_with_repair}</Td>
                    <Td>{item?.rolls_circle_face_repair}</Td>
                    <Td>{item?.rolls_circle_face_repair_not_turn}</Td>
                    <Td>{item?.antoher_works}</Td>
                    <Td>{item?.grph_24_25_28_plus}</Td>
                    <Td>{item?.after_repair_send_way}</Td>
                    <Td>{item?.under_carriage_number}</Td>
                    <Td>{item?.invetor_sended}</Td>
                    <Td>{item?.vkm_with_changes}</Td>
                    <Td>{item?.vkm_without_changes}</Td>
                    <Td>{item?.grph_30_31_32_plus}</Td>
                    <Td>{item?.is_use}</Td>
                    <Td>{item?.grph_32_33_34_plus}</Td>
                    <Td>{item?.do_repair_with_changes}</Td>
                    <Td>{item?.do_repair_without_changes}</Td>
                    <Td>{item?.grph_35_36_38_plus}</Td>
                    <Td>{item?.sheyk_type}</Td>
                    <Td>{item?.stupid_under_type}</Td>
                    <Td>{item?.between_type}</Td>
                    <Td>{item?.resba_is_break}</Td>
                    <Td>{item?.is_energy_uq}</Td>
                    <Td>{item?.is_energy_uq}</Td>

                    <Td>
                      <ImageSignature
                        signatureImage={item?.wheel_signature_user}
                      />
                    </Td>

                    <Td>
                      <Flex gap={2} justifyContent={"center"}>
                        <IconButton
                          colorScheme="red"
                          onClick={() => handleCheckAndDelete(item?.id)}
                          icon={<FontAwesomeIcon icon={faTrashAlt} />}
                        />
                      </Flex>
                    </Td>
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
              VU-50 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-50 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
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
      <Deleteted
        isOpen={delateModal}
        onClose={setDelateModal}
        carriageNumber={String(getTableData)}
        deletedFunction={handleDelate}
      />
      <VU_54_Model onClose={onClose} isOpen={isOpen} />

      {/* <Show_VU50_model
        isOpen={isOpenShowModel}
        onClose={onCloseShowModel}
        showData={showModel}
      /> */}
    </Box>
  );
};
