import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  TableContainer,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../../utils";
import { VU_51_Model } from "../Modals/VU_51_model/VU_51_Model";
import UserApi from "../../../Service/module/userModule.api";

import { InviteTable } from "./Invite";
import { Pagination } from "../../pagination/Pagination";
import { useDebounce } from "../../../hooks/useDebounce";

export const VU_51 = () => {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const carriageSerach = useDebounce(searchValue);

  const handlePageClick = data => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const fetchData = async (page) => {
    setIsLoading(true);
    
    const paramsPage = {
      page: page + 1,
      ...(carriageSerach && { search: carriageSerach }),
    };
    const { response } = await new UserApi().getVu51All(paramsPage);

    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, carriageSerach]);

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
        VU-51 Shakl
      </Heading>
      <Tooltip
        label=" VU-51 Shaklni qo'shish"
        placement="top"
        color={"teal.700"}
        bg={"white"}
      >
        <Button
          borderRadius={"51%"}
          colorScheme="teal"
          width={"51px"}
          height={"51px"}
          position={"absolute"}
          right={3}
          top={-12}
          onClick={onOpen}
        >
          +
        </Button>
      </Tooltip>
      <Box my={3} mt={0}>
        <FormControl w={"250px"}>
          <FormLabel>G&#39;ildirak juftligi chiqarib olingan vagon raqami</FormLabel>
          <Input
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Vagon Raqami Yozing"
            borderColor={"gray.600"}
            type="text"
          />
        </FormControl>
      </Box>
      {!isLoadingFulStatistik ? (
        gettingData?.count > 0 ? (
          <TableContainer p={4} border={"1px solid #eeeee"}>
            <InviteTable data={gettingData?.results} />
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
              VU-51 Shakl topilmadi
            </Text>
            <Button colorScheme="teal" onClick={onOpen}>
              {" "}
              VU-51 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <Pagination
        pageCount={gettingData?.count}
        onPageChange={handlePageClick}
      />

      <VU_51_Model onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};
