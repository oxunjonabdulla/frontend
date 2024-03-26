import {
  Box,
  Button,
  Flex,
  Heading,
  TableContainer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SimpleLoader } from "@/components/TrainLoader/SimpleLoader";
import { DailyRepairsTable } from "./components/DailyRepairsTable";
import { DailyRepair_Modal } from "./modals/DailyRepair/DailyRepair_Modal";
import { BrendCrumbs } from "@/components";

export const DailyRepairs = memo(function DailyRepairs() {
  const [isLoadingFulStatistik, setIsLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useSelector(({ dailyToday }) => dailyToday);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const memoData = useMemo(() => data, [data]);

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
        Bugungi ta&apos;mirga qo&apos;yilgan vagonlar
      </Heading>

      <BrendCrumbs />
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

      {!isLoadingFulStatistik ? (
        data?.length ? (
          <TableContainer
            borderRadius={10}
            border={"1px solid #eeeee"}
            shadow={data?.length && "xl"}
          >
            <DailyRepairsTable dataMock={memoData} />
          </TableContainer>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={12} gap={4}>
            <FontAwesomeIcon
              icon={faTrainSubway}
              fontSize={"70px"}
              opacity={"0.4"}
            />
            <Text
              as={"h1"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"2xl"}
            >
              Tamirlash uchun vagon topilmadi
            </Text>
            <Button variant={"solid"} onClick={onOpen}>
              Vagon qo&apos;shish
            </Button>
          </Flex>
        )
      ) : (
        <SimpleLoader />
      )}
      {isOpen && <DailyRepair_Modal isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
});
