import {
  Button,
  Flex,
  IconButton,
  Image,
  Img,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from "@chakra-ui/react";

import { vu_47 } from "@/utils/mock_heads";
import {
  faEye,
  faPlus,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Deleteted,
  ImageSignature,
  IsImzo,
  Pagination,
  SimpleLoader,
} from "../../../../../components";
import UserApi from "../../../../../Service/module/userModule.api";
import { reverseDateFormat } from "../../../../../utils";
import { imageGet } from "../../../../../utils/imageGet";
import { VU_47_Update } from "./VU_47_Update";
import { Vu_47ShowBack } from "./Vu_47ShowBack";
import { VU_47_Show } from "./VU_47_show";

const VU_47_Table = () => {
  const [isLoadingData, setIsLoading] = useState(true);
  const [deletedData, setDeletedData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [gettingData, setGettingData] = useState([]);
  const [showBack, setShowBackData] = useState({});
  const [showAllData, setShowAllData] = useState(null);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOpenShowBack,
    onClose: onCloseShowBack,
    onOpen: onOpenShowBack,
  } = useDisclosure();
  const handleShowBack = (data) => {
    onOpenShowBack();
    setShowBackData(data);
  };
  const {
    isOpen: isOpenBack,
    onClose: onCloseBack,
    onOpen: onOpenBack,
  } = useDisclosure();
  const {
    isOpen: isOpenShowAll,
    onClose: onCloseShowAll,
    onOpen: onOpenShowAll,
  } = useDisclosure();

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };
  const handleDelete = (id) => {
    onOpen();
    setDeletedData(id);
  };

  const handleDelateFunction = async (carriageID) => {
    const { response } = await new UserApi().deleteVu47(deletedData?.uuid);
    if (response) {
      window.location.reload();
    }
  };
  const handleBack = (data) => {
    setDeletedData(data);
    onOpenBack();
  };
  const handleShowAll = (data) => {
    onOpenShowAll();
    setShowAllData(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const paramsPage = {
        page: currentPage + 1,
      };
      setIsLoading(true);
      const { response } = await new UserApi().getVu47(paramsPage);
      if (response) {
        setIsLoading(false);
        setGettingData(response?.data);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      {!isLoadingData ? (
        <Table
          borderRadius={10}
          size={"sm"}
          whiteSpace={"pre-wrap"}
          variant={"striped"}
          overflow={"hidden"}
          colorScheme="blackAlpha"
          shadow={"lg"}
        >
          <Thead bg={"#0c6170"} rounded={10}>
            <Tr>
              {vu_47?.headers?.map((item) => (
                <Th
                  fontSize={"10px"}
                  textAlign={"center"}
                  key={item.label}
                  rowSpan={item.rowspan}
                  colSpan={item.colspan}
                >
                  {item.label}
                </Th>
              ))}
              <Th rowSpan={2} colSpan={2}></Th>
            </Tr>
            <Tr>
              {vu_47?.nestedHeaders?.map((item, idx) => (
                <Th
                  fontSize={"10px"}
                  key={idx}
                  textAlign={"center"}
                  rowSpan={item.rowspan}
                  colSpan={item.colspan}
                >
                  {item?.isImg ? (
                    <Img src={item?.label} w={"80%"} mx={"auto"} />
                  ) : (
                    item?.label
                  )}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {gettingData?.results?.map((item, idx) => (
              <Tr key={item?.front_detail?.id}>
                <Td>{currentPage * 10 + idx + 1}</Td>

                <Td whiteSpace={"nowrap"}>
                  {reverseDateFormat(item?.front_detail?.date)}
                </Td>
                <Td>{item?.front_detail?.device_type}</Td>
                <Td>{item?.front_detail?.serial_number}</Td>
                <Td>{item?.front_detail?.charging_time_40}</Td>
                <Td>{item?.back_detail?.charging_time_40}</Td>
                <Td>
                  {item?.front_detail?.slow_release_through_calibrated_orifices}
                </Td>
                <Td>{item?.back_detail?.brake_cylinder_fill_time}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_empty}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_normal}</Td>
                <Td>{item?.back_detail?.cylinder_pressure_full}</Td>
                <Td>{item?.front_detail?.release_time_to_04}</Td>
                <Td>
                  <IsImzo isImzo={item?.author_info?.user_signature_url} />
                </Td>
                <Td>{item?.front_detail?.acceptor_signature}</Td>
                <Td>
                  <IsImzo isImzo={item?.avtotormoz_signature_image_url} />
                </Td>
                <Td>
                  <Flex gap={2} m={0} alignItems={"center"}>
                    {item?.back_detail?.device_type === "null" ? (
                      <Button
                        onClick={() => handleBack(item?.back_detail)}
                        colorScheme="messenger"
                        fontSize={"0.8rem"}
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                      >
                        Orqa tomonini kiritish
                      </Button>
                    ) : (
                      <IconButton
                        colorScheme="green"
                        icon={<FontAwesomeIcon icon={faEye} />}
                        onClick={() => handleShowBack(item?.back_detail)}
                      />
                    )}
                    <IconButton
                      colorScheme="red"
                      icon={<FontAwesomeIcon icon={faTrashAlt} />}
                      onClick={() => handleDelete(item?.front_detail)}
                    />
                  </Flex>
                </Td>
                <Td>
                  <Flex justify={"center"} gap={2} m={0}>
                    <IconButton
                      colorScheme="whatsapp"
                      onClick={() => handleShowAll(item)}
                      icon={<FontAwesomeIcon icon={faEye} />}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <SimpleLoader />
      )}

      <VU_47_Show
        isOpen={isOpenShowAll}
        onClose={onCloseShowAll}
        data={showAllData}
      />
      <Deleteted
        isOpen={isOpen}
        onClose={onClose}
        carriageNumber={String(deletedData?.id)}
        deletedFunction={handleDelateFunction}
      />
      <Vu_47ShowBack
        isOpen={isOpenShowBack}
        onClose={onCloseShowBack}
        showData={showBack}
      />
      <VU_47_Update
        updateData={deletedData}
        isOpen={isOpenBack}
        onClose={onCloseBack}
      />
      {gettingData?.results?.length ? (
        <Pagination
          pageCount={gettingData?.count}
          onPageChange={handlePageClick}
        />
      ) : null}
    </>
  );
};

export default VU_47_Table;
