import { memo, useMemo, useState } from "react";
import {
  Divider,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { timeClear } from "@/utils/timeClear";
import { vu_36 } from "@/utils/mock_heads";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import UserApi from "../../../../Service/module/userModule.api";
import { Deleteted } from "../../../../components";
import { VU_36_Update } from "./VU_36_Update";
import { reverseDateFormat } from "../../../../utils";
const VU_36_Table = memo(function VU_36_Table({ gettingData, currentPage }) {
  const [updateData, setUpdateData] = useState(null);
  const [getTableData, setGetinfTableData] = useState(null);
  const {
    isOpen: openDelateModal,
    onOpen: onOpenDelateModal,
    onClose: onCloseDelateModal,
  } = useDisclosure();
  const {
    isOpen: onUpdateIsOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const handleUpdate = (data) => {
    onUpdateOpen();
    setUpdateData(data);
  };

  const memoData = useMemo(() => updateData, [updateData]);
  const handleCheckAndDelete = (deletedID) => {
    onOpenDelateModal();
    setGetinfTableData(deletedID);
  };
  const toast = useToast();
  const handleDelate = async (carriageID) => {
    const { response, error } = await new UserApi().deleteVu36(carriageID);
    if (response) {
      window.location.reload();
    } else {
      toast({
        status: "error",
        title:
          error?.detail &&
          carriageID + " vagon raqami ma'lumoti avval o'chirilgan",
      });
    }
  };

  return (
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
          {vu_36?.nestedHeaders?.map((item, idx) => (
            <Th fontSize={"10px"} textAlign={"center"} key={idx}>
              {item.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {gettingData?.results?.map((item, idx) => (
          <Tr key={idx}>
            <Td>{currentPage * 10 + idx + 1}</Td>
            <Td fontWeight={700} color={"green.900"}>
              {item.carriage}
            </Td>
            <Td>{item.yuk_vagon_tamir_turi}</Td>
            <Td>{item.bildirish_number}</Td>
            <Td>
              {item.yuk_vagon_tamir_turi}
              <Divider bgColor={"gray.400"} my={2} />
              {item.tamir_turi_kodi}
            </Td>

            <Td whiteSpace={"nowrap"}>
              {reverseDateFormat(item.tamir_turi_date)}
              <Divider bgColor={"gray.400"} my={2} />
              {timeClear(item.tamir_turi_hour) +
                ":" +
                timeClear(item.tamir_turi_minute)}
            </Td>
            <Td>
              {item.korxona_tamir_yuli}
              <Divider bgColor={"gray.400"} my={2} />
              {item.korxona_kodi}
            </Td>

            <Td whiteSpace={"nowrap"}>{item.ega_kodi}</Td>

            <Td whiteSpace={"nowrap"}>
              {reverseDateFormat(item.tamir_date)}
              <Divider bgColor={"gray.400"} my={2} />
              {timeClear(item.tamir_hour) + ":" + timeClear(item.tamir_minute)}
            </Td>

            <Td>{item.kod_moder_1}</Td>
            <Td>{item.kod_moder_2}</Td>
            <Td>{item.kod_moder_3}</Td>
            <Td>{item.kod_moder_4}</Td>
            <Td>
              <Flex gap={2}>
                <IconButton
                  colorScheme="whatsapp"
                  icon={<FontAwesomeIcon icon={faPenToSquare} />}
                  onClick={() => handleUpdate(item)}
                />
                <IconButton
                  colorScheme="red"
                  icon={<FontAwesomeIcon icon={faTrashAlt} />}
                  onClick={() => handleCheckAndDelete(item?.carriage)}
                />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
      {openDelateModal && (
        <Deleteted
          isOpen={openDelateModal}
          onClose={onCloseDelateModal}
          carriageNumber={getTableData}
          deletedFunction={handleDelate}
        />
      )}{" "}
      {onUpdateIsOpen && (
        <VU_36_Update
          isOpen={onUpdateIsOpen}
          onClose={onUpdateClose}
          updateData={memoData}
        />
      )}
    </Table>
  );
});

export default VU_36_Table;
