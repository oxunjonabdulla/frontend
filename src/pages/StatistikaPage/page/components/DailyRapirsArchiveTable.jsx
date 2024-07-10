import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState } from "react";

import PropTypes from "prop-types";
import ImageViewer from "react-simple-image-viewer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFileCirclePlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import UserApi from "@/Service/module/userModule.api";
import { Deleteted } from "@/components";
import { SimpleLoader } from "@/components/TrainLoader/SimpleLoader";
import ReactPaginate from "react-paginate";
import { useDebounce } from "../../../../hooks/useDebounce";
import ExitImage from "../modals/DailyRepair/ExitImage";
import { reverseDateFormat } from "../../../../utils";

const columnsMock = [
  { header: "T/R", accessorKey: "t/r_id", rowSpan: 2 },
  { header: "Вагон раками", accessorKey: "train_id", rowSpan: 2 },
  { header: "Курилган йили", accessorKey: "seen_year", rowSpan: 2 },
  {
    header: "Кейинги таъмир санаси",
    accessorKey: "next_set_number",
    rowSpan: 2,
  },
  { header: "Таъмир тури", accessorKey: "fix_type", rowSpan: 2 },

  { header: "Техник ечим муддати", accessorKey: "time_texnik", rowSpan: 2 },
  {
    header: "Ta’mirga qo‘yilgan sanasi",
    accessorKey: "texnik_date",
    rowSpan: 2,
  },
  {
    header: "Vagon Rasmi",
    accessorKey: "train_img",
    colSpan: 2,
  },
  { header: "Vagon turi", accessorKey: "train_type", rowSpan: 2 },
  { header: "Tegishli tashkilot", accessorKey: "services", rowSpan: 2 },
  {
    header: "IVTSA ma’lumotnomasi",
    rowSpan: 2,
    accessorKey: "ivtsa_id",
  },
  {
    header: "",
    accessorKey: "delete",
    rowSpan: 2,
  },
];

const columnMockShort = [
  {
    header: "Kirish",
    accessorKey: "train_img_in",
  },
  {
    header: "Chiqish",
    accessorKey: "train_img_in",
  },
];
export const DailyRapirsArchiveTable = memo(function DailyRapirsArchiveTable() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isViewerOpen2, setIsViewerOpen2] = useState(false);
  const [isViewerOpen3, setIsViewerOpen3] = useState(false);
  const [isTdOption, setTdOption] = useState(0);
  const [isTdOption2, setTdOption2] = useState(0);
  const [isTdOption3, setTdOption3] = useState(0);
  const [getTableData, setGetinfTableData] = useState(null);
  const [isLoadingData, setIsLoading] = useState(true);

  const [searchValue, setSearchValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const carriageSerach = useDebounce(searchValue);
  const {
    isOpen: isOpenExit,
    onOpen: onOpenExit,
    onClose: onCloseExit,
  } = useDisclosure();
  const handleCheckAndDelete = (data) => {
    onOpen();

    setGetinfTableData(data);
  };
  const handleAddExitImage = (data) => {
    onOpenExit();

    setGetinfTableData(data);
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const paramObj = {
        page: currentPage + 1,
        ...(carriageSerach && { search: carriageSerach }),
      };
      const { response } = await new UserApi().getDailyAll(paramObj);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData(currentPage);
  }, [carriageSerach, currentPage]);

  const openImageViewer = useCallback((index, idxSec) => {
    setCurrentImage(index);
    setTdOption(idxSec);
    setIsViewerOpen(true);
  }, []);
  const openImageViewer2 = useCallback((index, idxSec) => {
    setCurrentImage2(index);
    setTdOption2(idxSec);
    setIsViewerOpen2(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const closeImageViewer2 = () => {
    setCurrentImage2(0);
    setIsViewerOpen2(false);
  };
  const openImageViewer3 = useCallback((index, idxSec) => {
    setCurrentImage3(index);
    setTdOption3(idxSec);
    setIsViewerOpen3(true);
  }, []);

  const closeImageViewer3 = () => {
    setCurrentImage3(0);
    setIsViewerOpen3(false);
  };

  const deleteDaily = async (number) => {
    const { response } = await new UserApi().deleteDaily(number);
    if (response) {
      window.location.reload();
    }
  };

  return (
    <>
      <Box my={3}>
        <FormControl w={"250px"}>
          <FormLabel>Vagon nomer bo&apos;yicha qidirish</FormLabel>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Vagon Raqami Yozing"
            borderColor={"gray.600"}
            type="text"
          />
        </FormControl>
      </Box>
      {isLoadingData ? (
        <SimpleLoader />
      ) : (
        <TableContainer
          borderRadius={10}
          border={"1px solid #eeeee"}
          shadow={gettingData?.length && "xl"}
        >
          {" "}
          <Table
            size={"sm"}
            whiteSpace={"wrap"}
            variant={"striped"}
            overflow={"hidden"}
            colorScheme="gray"
          >
            <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
              <Tr>
                {columnsMock?.map((item) => (
                  <Th
                    textAlign={"center"}
                    color={"#ffff"}
                    border={"gray"}
                    key={item.accessorKey}
                    colSpan={item.colSpan}
                    rowSpan={item.rowSpan}
                  >
                    {item.header}
                  </Th>
                ))}
              </Tr>
              <Tr>
                {columnMockShort?.map((item) => (
                  <Th
                    textAlign={"center"}
                    color={"#ffff"}
                    border={"gray"}
                    key={item.accessorKey}
                    colSpan={item.colspan}
                  >
                    {item.header}
                  </Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {gettingData &&
                gettingData?.results?.map((item, idx) => (
                  <Tr key={item.id} fontWeight={500}>
                    <Td>{currentPage * 10 + idx + 1}</Td>
                    <Td color={"green.800"} fontWeight={"800"}>
                      {item.carriage_number}
                    </Td>
                    <Td>{item.year_of_manufacture}</Td>
                    <Td>{reverseDateFormat(item?.repair_date)}</Td>
                    <Td>{item?.repair_type?.toUpperCase()}</Td>
                    <Td>{reverseDateFormat(item.approximate_completion)}</Td>
                    <Td>{reverseDateFormat(item.date_of_registration)}</Td>
                    <Td cursor={"pointer"}>
                      <Flex
                        w="100%"
                        gap={"1"}
                        flexWrap={"wrap"}
                        align={"center"}
                      >
                        {item.enter_images?.map((elem, idxImage) => (
                          <Img
                            key={idxImage}
                            objectFit={"cover"}
                            onClick={() => openImageViewer2(idxImage, item.id)}
                            cursor={"pointer"}
                            w="50px"
                            src={`https://api.evagon.uz/${elem.image_url}`}
                          />
                        ))}
                      </Flex>
                    </Td>
                    <Td cursor={"pointer"}>
                      <Flex
                        w="100%"
                        gap={"1"}
                        flexWrap={"wrap"}
                        align={"center"}
                      >
                        {item.exit_images?.map((elem, idxImage) => (
                          <Img
                            key={idxImage}
                            objectFit={"cover"}
                            onClick={() => openImageViewer3(idxImage, item.id)}
                            cursor={"pointer"}
                            w="50px"
                            src={`https://api.evagon.uz/${elem.image_url}`}
                          />
                        ))}
                      </Flex>
                    </Td>

                    <Td> {item.carriage_type}</Td>
                    <Td>{item.company_name}</Td>
                    <Td pl={2}>
                      <Flex w="100%" gap={"1"} align={"center"}>
                        {item.ivtsa?.map((elem, idxImage) => (
                          <Img
                            key={idxImage}
                            objectFit={"cover"}
                            onClick={() => openImageViewer(idxImage, item.id)}
                            cursor={"pointer"}
                            w="50px"
                            src={`https://api.evagon.uz/${elem.image_url}`}
                          />
                        ))}
                      </Flex>
                    </Td>
                    <Td>
                      <Flex gap={2}>
                        <Button
                          float={"right"}
                          borderColor={"teal.400"}
                          colorScheme="teal"
                          bgColor={"teal.400"}
                          p={0}
                          onClick={() => handleAddExitImage(item)}
                          _hover={{ bgColor: "teal.400", opacity: "0.7" }}
                        >
                          <FontAwesomeIcon icon={faFileCirclePlus} />
                        </Button>
                        <Button
                          borderColor={"red"}
                          colorScheme="teal"
                          bgColor={"red"}
                          float={"right"}
                          p={0}
                          _hover={{ bgColor: "red", opacity: "0.7" }}
                          onClick={() => handleCheckAndDelete(item)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
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
        isOpen={isOpen}
        onClose={onClose}
        deletedFunction={deleteDaily}
        carriageNumber={getTableData?.carriage_number}
      />
      <ExitImage
        isOpen={isOpenExit}
        onClose={onCloseExit}
        carriageNumber={getTableData?.id}
      />

      {isViewerOpen &&
        gettingData?.results
          ?.filter((item) => item.id === isTdOption)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.ivtsa) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            );
          })}
      {isViewerOpen2 &&
        gettingData?.results
          ?.filter((item) => item.id === isTdOption2)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.enter_images) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage2}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer2}
              />
            );
          })}
      {isViewerOpen3 &&
        gettingData?.results
          ?.filter((item) => item.id === isTdOption3)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.exit_images) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage3}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer3}
              />
            );
          })}
    </>
  );
});

DailyRapirsArchiveTable.propTypes = {
  dataMock: PropTypes.array,
};
