import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { faBook, faChevronLeft, faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Deleteted, ImageSignature } from "../../../components";
import { useDebounce } from "../../../hooks/useDebounce";
import UserApi from "../../../Service/module/userModule.api";
import { SliderMock } from "../../../utils";
import { carriageDefc } from "../../../utils/mock_heads";
import { timeMoment } from "../../../utils/roleTest";
import { CarriageModel } from "./CarriageModel";

export const Carriage = () => {
    const [searchValue, setSearchValue] = useState(null);
    const [isLoadingFulStatistik, setIsLoading] = useState(true);
    const [gettingData, setGettingData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [delateModal, setDelateModal] = useState(false);
    const [deletedID, setDeleteID] = useState(null);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const carriageSerach = useDebounce(searchValue);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const handleCheckAndDelete = (deletedID) => {
        setDelateModal(true);
        setDeleteID(deletedID);
    };

    const handleDelate = async () => {
        const { response, error } = await new UserApi().deleteCarriageDefc(deletedID);
        if (response) window.location.reload();
        else toast({
            status: "error",
            title:
                error?.detail &&
                deletedID + " vagon raqami ma'lumoti avval o'chirilgan",
            duration: 4000,
            isClosable: true,
            position: "top-right",
            fontSize: "3xl",
        });
    };

    const fetchData = async (page) => {
        setIsLoading(true);
        const { response } = await new UserApi().getCarriageDefc(page);
        if (response) {
            setIsLoading(false);
            setGettingData(response?.data);
        }
    };

    useEffect(() => {
        const params = {
            page: currentPage + 1,
            ...(carriageSerach && { search: carriageSerach }),
        };
        fetchData(params);
    }, [carriageSerach, currentPage]);

    return (
        <Box
            as="div"
            bg={"#ffff"}
            my={8}
            mx="auto"
            rounded={"lg"}
            position={"relative"}>
            <Heading size={"lg"} textAlign={"center"} fontWeight={600}>
                Aravalar
            </Heading>
            <Tooltip
                label="Arava qo'shish"
                placement="top"
                color={"teal.700"}
                bg={"white"}>
                <Button
                    borderRadius={"50%"}
                    colorScheme="teal"
                    width={"50px"}
                    height={"50px"}
                    position={"absolute"}
                    right={50}
                    top={0}
                    onClick={onOpen}>
                    +
                </Button>
            </Tooltip>
            <Box my={3}>
                <FormControl w={"250px"}>
                    <FormLabel>Vagon raqam bo&apos;yicha qidirish</FormLabel>
                    <Input
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Vagon Raqami Yozing"
                        borderColor={"gray.600"}
                        type="text"
                    />
                </FormControl>
            </Box>
            {!isLoadingFulStatistik ? (
                !gettingData?.results?.length ? (
                    <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
                        <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
                        <Text
                            as={"h1"}
                            fontWeight={600}
                            textAlign={"center"}
                            fontSize={"2xl"}
                        >
                            Arava mavjud emas
                        </Text>
                        <Button colorScheme="teal" onClick={onOpen}>
                            Arava qo&apos;shish
                        </Button>
                    </Flex>
                ) : (
                    <TableContainer p={4} border={"1px solid #eeeee"}>
                        <Table borderRadius={10}
                            size={"sm"}
                            whiteSpace={"pre-wrap"}
                            variant={"striped"}
                            overflow={"hidden"}
                            colorScheme="gray"
                            shadow={"lg"}>
                            <Thead bg={"#0c6170"} rounded={10}>
                                <Tr>
                                    {carriageDefc?.nestedHeaders.map((item, i) => (
                                        <Th
                                            fontSize={"12px"}
                                            textAlign={"center"}
                                            key={i}
                                            rowSpan={item.rowspan}
                                            colSpan={item.colspan}
                                        >
                                            {item.label}
                                        </Th>
                                    ))}
                                </Tr>
                            </Thead>
                            <Tbody>
                                {gettingData?.results?.map((item, i) => (
                                    <Tr key={i}>
                                        <Td fontSize={16} textAlign={"center"}>{i + 1}</Td>
                                        <Td fontSize={16}>{item?.carriage}</Td>
                                        <Td fontSize={16}>{timeMoment(item?.date)?.day}</Td>
                                        <Td fontSize={16} textAlign={"center"}>{item?.part_name}</Td>
                                        <Td fontSize={16} textAlign={"center"}>{item?.part_number}</Td>
                                        <Td fontSize={16} textAlign={"center"}>{item?.factory_number}</Td>
                                        <Td fontSize={16} textAlign={"center"}>{item?.manufacture_year}</Td>
                                        <Td fontSize={16} textAlign={"center"}>{item?.part_validity_conclusion}</Td>
                                        <Td>
                                            <ImageSignature
                                                signatureImage={item?.author_info?.user_signature_url}
                                            />
                                        </Td>
                                        <Td>
                                            <ImageSignature
                                                signatureImage={item?.defestoskop_detector_user_info?.signature_image}
                                            />
                                        </Td>
                                        <Td>
                                            <IconButton
                                                onClick={() => handleCheckAndDelete(item?.carriage)}
                                                colorScheme="red"
                                                icon={<FontAwesomeIcon icon={faTrash} />}
                                            />
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
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
                carriageNumber={deletedID}
                deletedFunction={handleDelate}
            />
            <CarriageModel isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};