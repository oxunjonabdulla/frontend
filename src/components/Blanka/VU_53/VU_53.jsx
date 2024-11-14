import {
  Box,
  Button,
  Flex,
  Heading,
  TableContainer,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SliderMock } from "../../../utils";
import { InviteTable } from "./InviteTable";
import { VU_53_Model } from "../Modals/VU_53_model/VU_53_Model";
import { Pagination } from "../../pagination/Pagination";
import UserApi from "../../../Service/module/userModule.api";

const data = [0];

export const VU_53 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);

  const fetchData = async (page) => {
    setIsLoading(true);
    const { response } = await new UserApi().getVu53All(page);
    if (response) {
      setIsLoading(false);
      setGettingData(response?.data);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

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
        VU-53 Shakl
      </Heading>

      <Tooltip
        label="VU-53 Shaklini qo'shish"
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
        gettingData?.count > 0 ? (
          <TableContainer
            p={4}
            border={"1px solid #eeeee"}
            display={"flex"}
            gap={3}
          >
            <InviteTable data={gettingData?.results} currentPage={currentPage} />
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
              VU-53 Shakl topilmadi
            </Text>
            <Button onClick={onOpen} colorScheme="teal">
              VU-53 Shakl qo&apos;shish
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

      <VU_53_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
