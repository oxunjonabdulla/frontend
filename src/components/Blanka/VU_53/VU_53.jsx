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
import { useState } from "react";
import { SliderMock } from "../../../utils";
import { InviteTable } from "./InviteTable";
import { UseTable } from "./UseTable";
import { VU_53_Model } from "../Modals/VU_53_model/VU_53_Model";
const data = [0];

export const VU_53 = () => {
  const [activeType, setActiveType] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const renderComponent = () => {
    switch (activeType) {
      case 1:
        return <InviteTable />;
      case 2:
        return <UseTable />;
    }
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
          variant={"solid"}
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
        data?.length ? (
          <>
            <Flex gap={4} justify={"center"}>
              <Button
                onClick={() => setActiveType(1)}
                variant={activeType === 1 ? "outline_active" : "outline"}
              >
                Qabul
              </Button>
              <Button
                onClick={() => setActiveType(2)}
                variant={activeType === 2 ? "outline_active" : "outline"}
              >
                Istemol
              </Button>
            </Flex>
            <TableContainer
              p={4}
              border={"1px solid #eeeee"}
              display={"flex"}
              gap={3}
            >
              {renderComponent()}
            </TableContainer>
          </>
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
            <Button onClick={onOpen} variant={"solid"}>
              VU-53 Shakl qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SliderMock setIsLoading={setIsLoading} />
      )}

      <VU_53_Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
