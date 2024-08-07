import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { memo, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { BrendCrumbs } from "@/components";
import { Daily } from "./Daily";
import { DailyRapirsArchiveTable } from "../../pages/StatistikaPage/page/components/DailyRapirsArchiveTable";

export const DailyTable = memo(function DailyTable() {
  const [activeComponent, setActiveComponent] = useState("1");
  const { data } = useSelector(({ dailyToday }) => dailyToday);

  const memoData = useMemo(() => data, [data]);
  const renderComponent = () => {
    switch (activeComponent) {
      case "1":
        return <Daily data={memoData} />;
      case "2":
        return <DailyRapirsArchiveTable />;
      default:
        return <Daily data={memoData} />;
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
        Bugungi ta&apos;mirga qo&apos;yilgan vagonlar
      </Heading>

      <ButtonGroup float={"right"} size="md" isAttached>
        <Button
          variant={activeComponent === "1" ? "solid" : "outline"}
          onClick={() => setActiveComponent("1")}
          colorScheme="teal"
        >
          Bugun
        </Button>
        <Button
          variant={activeComponent === "2" ? "solid" : "outline"}
          onClick={() => setActiveComponent("2")}
          colorScheme="teal"
        >
          Arxiv
        </Button>
      </ButtonGroup>
      <BrendCrumbs />

      {renderComponent()}
    </Box>
  );
});
