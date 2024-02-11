import {
  Box,
  Flex,
  Heading,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import { SimpleLoader } from "../TrainLoader/SimpleLoader";
const columnsMock = [
  { header: "Вагон раками", accessorKey: "train_id", rowSpan: 2 },
  { header: "Курилган йили", accessorKey: "seen_year", rowSpan: 2 },
  {
    header: "Кейинги таъмир санаси",
    accessorKey: "next_set_number",
    rowSpan: 2,
  },
  { header: "Таъмир тури", accessorKey: "fix_type", rowSpan: 2 },

  { header: "Техник ечим муддати", accessorKey: "time_texnik", rowSpan: 2 },
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
];

const columnMockShort = [
  {
    header: "Kirish",
    accessorKey: "train_img_in",
  },
];
export const DailyTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isTdOption, setTdOption] = useState(0);
  const [currentImageEnter, setCurrentImageEnter] = useState(0);
  const [isViewerOpenEnter, setIsViewerOpenEnter] = useState(false);
  const [isTdOptionEnter, setTdOptionEnter] = useState(0);

  const { data } = useSelector(({ dailyToday }) => dailyToday);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openImageViewer = useCallback((index, idxSec) => {
    setCurrentImage(index);
    setTdOption(idxSec);
    setIsViewerOpen(true);
  }, []);
  const openEnterImageViewer = useCallback((index, idxSec) => {
    setCurrentImageEnter(index);
    setTdOptionEnter(idxSec);
    setIsViewerOpenEnter(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return !isLoading ? (
    <Box
      as="div"
      bg={"#ffff"}
      p={4}
      mx="auto"
      rounded={"lg"}
      position={"relative"}
    >
      <Heading as={"h3"} size={"lg"} mb={5} textAlign={"center"}>
        Bugungi ta&apos;mirga qo&apos;yilgan vagonlar
      </Heading>
      <TableContainer
        borderRadius={10}
        border={"1px solid #eeeee"}
        shadow={data?.length && "xl"}
      >
        {data?.length ? (
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
                    colSpan={2}
                    textAlign={"center"}
                    color={"#ffff"}
                    border={"gray"}
                    key={item.accessorKey}
                  >
                    {item.header}
                  </Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {data &&
                data.map((item) => (
                  <Tr key={item.id} fontWeight={500}>
                    <Td>{item.carriage_number}</Td>
                    <Td>{item.year_of_manufacture}</Td>
                    <Td>{item.repair_date}</Td>
                    <Td>{item?.repair_type?.toUpperCase()}</Td>
                    <Td>{item.approximate_completion}</Td>
                    <Td>{item.date_of_registration}</Td>
                    <Td cursor={"pointer"} colSpan={2}>
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
                              openEnterImageViewer(idxImage, item.id)
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
                      <Flex
                        w="100%"
                        gap={"1"}
                        align={"center"}
                        flexWrap={"wrap"}
                      >
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
                  </Tr>
                ))}
            </Tbody>
          </Table>
        ) : (
          <Flex align={"center"} flexDir={"column"} my={8} gap={4}>
            <FontAwesomeIcon
              icon={faTrainSubway}
              fontSize={"70px"}
              opacity={"0.4"}
            />
            <Text
              as={"h1"}
              whiteSpace={"pre-wrap"}
              fontWeight={600}
              textAlign={"center"}
              fontSize={"xl"}
            >
              Tamirlash uchun vagon qo&apos;shilmagan
            </Text>
          </Flex>
        )}
      </TableContainer>

      {isViewerOpen &&
        data
          ?.filter((item) => item.id === isTdOption)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.ivtsa) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ReactSimpleImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            );
          })}
      {isViewerOpenEnter &&
        data
          ?.filter((item) => item.id === isTdOptionEnter)
          .map((item, idxs) => {
            const newArray = [];
            for (const iterator of item.enter_images) {
              newArray.push(`https://api.evagon.uz/${iterator.image_url}`);
            }

            return (
              <ReactSimpleImageViewer
                key={idxs}
                src={newArray}
                currentIndex={currentImageEnter}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={() => {
                  setIsViewerOpenEnter(false), setCurrentImageEnter(0);
                }}
              />
            );
          })}
    </Box>
  ) : (
    <SimpleLoader />
  );
};

export default DailyTable;
