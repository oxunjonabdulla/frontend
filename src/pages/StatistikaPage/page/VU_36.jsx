import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  TableContainer,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { VU_36_Model } from "./modals/VU_36_Model";
import UserApi from "@/Service/module/userModule.api";
import ReactPaginate from "react-paginate";
import { BrendCrumbs } from "@/components";
import VU_36_Table from "./components/VU_36_Table";
import { SimpleLoader } from "@/components";

export const VU_36 = () => {
  const [isLoadingData, setIsLoading] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu36(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const memoData = useMemo(() => gettingData, [gettingData]);

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
        VU-36 Jurnali
      </Heading>
      <BrendCrumbs />

      <Tooltip
        label="VU-36 Jurnalini qo'shish"
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
      {gettingData?.results?.length ? (
        <TableContainer p={4} border={"1px solid #eeeee"}>
          {isLoadingData && (
            <Box
              width={"100%"}
              height={"100%"}
              bg={"rgba(255,255,255,0.3)"}
              backdropFilter={"blur(4px)"}
              position={"absolute"}
              left={0}
              zIndex={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner color="green" size={"xl"} />
            </Box>
          )}
          <VU_36_Table gettingData={memoData} currentPage={currentPage} />
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
        </TableContainer>
      ) : !isLoadingData ? (
        <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
          <FontAwesomeIcon icon={faBook} fontSize={"70px"} opacity={"0.4"} />
          <Text
            as={"h1"}
            fontWeight={600}
            textAlign={"center"}
            fontSize={"2xl"}
          >
            VU-36 jurnali topilmadi
          </Text>
          <Button colorScheme="teal" onClick={onOpen}>
            VU-36 qo&apos;shish
          </Button>
        </Flex>
      ) : (
        <SimpleLoader />
      )}

      {isOpen && <VU_36_Model onClose={onClose} isOpen={isOpen} />}
    </Box>
  );
};
VU_36.propTypes = {
  data: PropTypes.array,
};
