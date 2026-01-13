import {
  Button,
  Flex,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";

import { SimpleLoader } from "@/components/TrainLoader/SimpleLoader";
import PropTypes from "prop-types";
import ImageViewer from "react-simple-image-viewer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faTrainSubway,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import UserApi from "@/Service/module/userModule.api";
import { Deleteted } from "@/components";
import { repairTypesName } from "../../../../utils";

const columnsMock = [
  { header: "T/R", accessorKey: "t/r_id", rowSpan: 2 },
  { header: "Vagon raqami", accessorKey: "train_id", rowSpan: 2 },
  { header: "Ko'rilgan yili", accessorKey: "seen_year", rowSpan: 2 },
  {
    header: "Keyingi ta’mir sanasi",
    accessorKey: "next_set_number",
    rowSpan: 2,
  },
  { header: "Ta’mir turi", accessorKey: "fix_type", rowSpan: 2 },

  { header: "Texnik yechim muddati", accessorKey: "time_texnik", rowSpan: 2 },
  {
    header: "Ta’mirga qo‘yilgan sanasi",
    accessorKey: "texnik_date",
    rowSpan: 2,
  },
  {
    header: "Vagon Rasmi",
    accessorKey: "train_img",
    colSpan: 2,
  },
  { header: "Vagon turi", accessorKey: "train_type", rowSpan: 2 },
  { header: "Tegishli tashkilot", accessorKey: "services", rowSpan: 2 },
  {
    header: "IVTSA ma’lumotnomasi",
    rowSpan: 2,
    accessorKey: "ivtsa_id",
  },
  {
    header: "O'chirish",
    accessorKey: "delete",
    rowSpan: 2,
  },
];

const columnMockShort = [
  {
    header: "Kirish",
    accessorKey: "train_img_in",
    colspan: 2,
  },
];
export const DailyRepairsTable = memo(function DailyRepairsTable({ dataMock }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isViewerOpen2, setIsViewerOpen2] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTdOption, setTdOption] = useState(0);
  const [isTdOption2, setTdOption2] = useState(0);
  const [getTableData, setGetinfTableData] = useState(null);
  const handleCheckAndDelete = (data) => {
    onOpen();

    setGetinfTableData(data);
  };
  const openImageViewer = useCallback((index, idxSec) => {
    setCurrentImage(index);
    setTdOption(idxSec);
    setIsViewerOpen(true);
  }, []);
  const openImageViewer2 = useCallback((index, idxSec) => {
    setCurrentImage2(index);
    setTdOption2(idxSec);
    setIsViewerOpen2(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const closeImageViewer2 = () => {
    setCurrentImage2(0);
    setIsViewerOpen2(false);
  };

  const deleteDaily = async (number) => {
    const { response } = await new UserApi().deleteDaily(number);
    if (response) {
      window.location.reload();
    }
  };

  return (
    <>
      {dataMock ? (
        dataMock?.length ? (
          <TableContainer
            borderRadius={10}
            border={"1px solid #eeeee"}
            shadow={dataMock?.length && "xl"}
          >
            <Table
              size={"sm"}
              whiteSpace={"wrap"}
              variant={"striped"}
              overflow={"hidden"}
              colorScheme="gray"
            >
              <Thead bg={"#0c6170"} rounded={10} shadow={"2xl"}>
                <Tr>
                  {columnsMock?.map((item) => (
                    <Th
                      textAlign={"center"}
                      color={"#ffff"}
                      border={"gray"}
                      key={item.accessorKey}
                      colSpan={item.colSpan}
                      rowSpan={item.rowSpan}
                    >
                      {item.header}
                    </Th>
                  ))}
                </Tr>
                <Tr>
                  {columnMockShort?.map((item) => (
                    <Th
                      textAlign={"center"}
                      color={"#ffff"}
                      border={"gray"}
                      key={item.accessorKey}
                      colSpan={item.colspan}
                    >
                      {item.header}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {dataMock &&
                  dataMock.map((item, idx) => (
                    <Tr key={item.id} fontWeight={500}>
                      <Td>{idx + 1}</Td>
                      <Td color={"green.800"} fontWeight={"800"}>
                        {item.carriage_number}
                      </Td>
                      <Td>{item.year_of_manufacture}</Td>
                      <Td>{item.repair_date}</Td>
                      <Td>{repairTypesName(item?.repair_type)}</Td>
                      <Td>{item.approximate_completion}</Td>
                      <Td>{item.date_of_registration}</Td>
                      <Td cursor={"pointer"} colSpan="2">
                        <Flex
                          w="100%"
                          gap={"1"}
                          flexWrap={"wrap"}
                          align={"center"}
                        >
                          {item.enter_images?.map((elem, idxImage) => (
                            <Img
                              key={idxImage}
                              objectFit={"cover"}
                              onClick={() =>
                                openImageViewer2(idxImage, item.id)
                              }
                              cursor={"pointer"}
                              w="50px"
                              src={`https://api.evagon.uz/${elem.image_url}`}
                            />
                          ))}
                        </Flex>
                      </Td>

                      <Td> {item.carriage_type}</Td>
                      <Td>{item.company_name}</Td>
                      <Td pl={2}>
                        <Flex w="100%" gap={"1"} align={"center"}>
                          {item.ivtsa?.map((elem, idxImage) => (
                            <Img
                              key={idxImage}
                              objectFit={"cover"}
                              onClick={() => openImageViewer(idxImage, item.id)}
                              cursor={"pointer"}
                              w="50px"
                              src={`https://api.evagon.uz/${elem.image_url}`}
                            />
                          ))}
                        </Flex>
                      </Td>
                      <Td>
                        <Flex gap={2}>
                          <Button
                            float={"right"}
                            borderColor={"blue.400"}
                            colorScheme="teal"
                            bgColor={"blue.400"}
                            p={0}
                            _hover={{ bgColor: "blue.400", opacity: "0.7" }}
                          >
                            <FontAwesomeIcon icon={faDownload} />
                          </Button>
                          <Button
                            borderColor={"red"}
                            colorScheme="teal"
                            bgColor={"red"}
                            float={"right"}
                            p={0}
                            _hover={{ bgColor: "red", opacity: "0.7" }}
                            onClick={() => handleCheckAndDelete(item)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
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
          </Flex>
        )
      ) : (
        <SimpleLoader />
      )}

      <Deleteted
        isOpen={isOpen}
        onClose={onClose}
        deletedFunction={deleteDaily}
        carriageNumber={getTableData?.carriage_number}
      />

      {isViewerOpen &&
        dataMock
          .filter((item) => item.id === isTdOption)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.ivtsa) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            );
          })}
      {isViewerOpen2 &&
        dataMock
          .filter((item) => item.id === isTdOption2)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.enter_images) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage2}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer2}
              />
            );
          })}
    </>
  );
});

DailyRepairsTable.propTypes = {
  dataMock: PropTypes.array,
};
