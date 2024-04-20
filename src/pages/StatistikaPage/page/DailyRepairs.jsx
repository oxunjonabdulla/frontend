import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { DailyRepairsTable } from "./components/DailyRepairsTable";
import { DailyRepair_Modal } from "./modals/DailyRepair/DailyRepair_Modal";
import { BrendCrumbs } from "@/components";
import { DailyRapirsArchiveTable } from "./components/DailyRapirsArchiveTable";

export const DailyRepairs = memo(function DailyRepairs() {
  const [activeComponent, setActiveComponent] = useState("1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSelector(({ dailyToday }) => dailyToday);

  const memoData = useMemo(() => data, [data]);
  const renderComponent = () => {
    switch (activeComponent) {
      case "1":
        return <DailyRepairsTable dataMock={memoData} />;
      case "2":
        return <DailyRapirsArchiveTable />;
      default:
        return <DailyRepairsTable dataMock={memoData} />;
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
        <IconButton
          onClick={onOpen}
          variant={"outline"}
          colorScheme="teal"
          aria-label="Add to friends"
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
      </ButtonGroup>
      <BrendCrumbs />

      {renderComponent()}
      {isOpen && <DailyRepair_Modal isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
});
