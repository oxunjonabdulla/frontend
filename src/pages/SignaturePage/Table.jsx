/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  ButtonGroup,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

import { SliderMock } from "../../utils";
import ReactPaginate from "react-paginate";
import UserApi from "../../Service/module/userModule.api";
import { timeMoment } from "../../utils/roleTest";
import { signature_head } from "../../utils/mock_heads";

export const SignatureTable = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [dataRefetch, setDataRefetch] = useState(null);
  const [openPopoverIndex, setOpenPopoverIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState(null);
  const toast = useToast();
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getAlSsignatures(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, dataRefetch]);

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postSignsSignature(data);
    setLoading(false);
    if (response) {
      setDataRefetch(Math.random() * 4546);
      toast({
        status: "success",
        title: "Imzo qo'yildi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
    if (error) {
      toast({
        status: "error",
        title: "Imzo qo'yishda hatolik yuz berdi",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  const togglePopover = (index) => {
    setOpenPopoverIndex(openPopoverIndex === index ? null : index);
  };
  return (
    <>
      {!isLoadingFulStatistik ? (
        gettingData?.count > 0 ? (
          <TableContainer p={2} border={"1px solid #eeeee"}>
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
                  {signature_head.map((item) => (
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

                    <Td>
                      <Tag size={"lg"} variant="solid" colorScheme="teal">
                        {item?.log_type}
                      </Tag>
                    </Td>
                    <Td fontWeight={700} color={"teal.500"}>
                      {item?.carriage_number_or_id}
                    </Td>
                    <Td>{item?.user_role}</Td>
                    <Td>{item?.username}</Td>
                    <Td>{timeMoment(item?.created_at).day}</Td>

                    <Td>
                      <Flex gap={2}>
                        <Popover
                          returnFocusOnClose={false}
                          isOpen={openPopoverIndex === idx}
                          onClose={() => setOpenPopoverIndex(null)}
                          onOpen={() => togglePopover(idx)}
                          placement="right"
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <Button colorScheme="blue">Imzoni qo'yish</Button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">
                              Tasdiqlash
                            </PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                              Siz rostanman ushbu raqamli va belgilangan jurnal
                              uchun imzo qo'yishni hohlaysizmi?
                            </PopoverBody>
                            <PopoverFooter
                              display="flex"
                              justifyContent="flex-end"
                            >
                              <ButtonGroup size="sm">
                                <Button
                                  variant="outline"
                                  onClick={() => setOpenPopoverIndex(null)}
                                >
                                  Yo'q
                                </Button>
                                <Button
                                  colorScheme="teal"
                                  onClick={() =>
                                    onSubmit({
                                      identifier: item?.carriage_number_or_id,
                                      log_type: item?.log_type,
                                      user_role: item?.user_role,
                                    })
                                  }
                                  isLoading={isLoading}
                                  loadingText="Imzo qo'yilmoqda"
                                >
                                  Imzo qo'yish
                                </Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon
              icon={faSignature}
              fontSize={"70px"}
              opacity={"0.4"}
            />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Imzolar topilmadi{" "}
            </Text>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}
      {gettingData?.count > 0 && (
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
      )}
    </>
  );
};
