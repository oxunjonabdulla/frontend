import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  TableContainer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import UserApi from "@/Service/module/userModule.api";
import VU_31_Table from "./components/VU_31_Table";
import { BrendCrumbs, SimpleLoader } from "@/components";
import { Link } from "react-router-dom";
import { useDebounce } from "../../../../hooks/useDebounce";
import { Pagination } from "../../../../components";

export const VU_31 = () => {
  const [isLoadingData, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const carriageSerach = useDebounce(searchValue);
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu31(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    const params = {
      page: currentPage + 1,
      ...(carriageSerach && { carriage_number: carriageSerach }),
    };

    fetchData(params);
  }, [carriageSerach, currentPage]);
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
        VU-31 Jurnali
      </Heading>

      <BrendCrumbs />
      <Tooltip
        label="VU-31 Jurnalini qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
        <Button
          as={Link}
          to={"/statistics/vu-31/create"}
          borderRadius={"50%"}
          colorScheme="teal"
          width={"50px"}
          height={"50px"}
          position={"absolute"}
          right={3}
          top={-12}
        >
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
          />
        </FormControl>
      </Box>

      {memoData?.results?.length ? (
        <TableContainer p={4} border={"1px solid #eeeee"} shadow={"lg"}>
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

          <VU_31_Table gettingData={memoData} currentPage={currentPage} />

          <Pagination
            pageCount={memoData?.count}
            onPageChange={handlePageClick}
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
            VU-31 jurnali topilmadi
          </Text>
          <Button colorScheme="teal" as={Link} to={"/statistics/vu-31/create"}>
            VU-31 qo&apos;shish
          </Button>
        </Flex>
      ) : (
        <SimpleLoader />
      )}
    </Box>
  );
};

VU_31.propTypes = {
  data: PropTypes.array,
};
