import {
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserApi from "../../../Service/module/userModule.api";
import { BreadCumbs } from "../../../utils";
import moment from "moment";
import { ImageSignature } from "../../../components";
import { timeMoment } from "../../../utils/roleTest";
export const ReportUniqPage = () => {
  const [complexData, setComplexData] = useState(null);
  const { reportId } = useParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getCarriageComp = async () => {
      setLoading(true);
      const { response } = await new UserApi().getUniqGeneralReport(reportId);
      if (response) {
        setComplexData(response?.data);
        setLoading(false);
      }
    };

    getCarriageComp();
  }, [reportId]);

  const renderTableRows = (data) => {
    return data.map((item, index) => {
      const fieldName = item.field_name;
      const value = item[Object.keys(item).find((key) => key !== "field_name")];

      if (
        typeof value === "string" &&
        moment(value, moment.ISO_8601, true).isValid()
      ) {
        return (
          <Tr key={index}>
            <Td>{fieldName}</Td>
            <Td>{timeMoment(value)?.day}</Td>
          </Tr>
        );
      }

      if (typeof value === "string" && value.includes("/media/")) {
        return (
          <Tr key={index}>
            <Td>{fieldName}</Td>
            <Td>
              <ImageSignature signatureImage={value} />
            </Td>
          </Tr>
        );
      }

      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          return (
            <Tr key={index}>
              <Td colSpan={2}>
                <Heading size="sm" mb={2}>
                  {fieldName}
                </Heading>
                <Table variant="simple" size="sm">
                  <Tbody>
                    {value.map((detail, subIndex) => (
                      <Tr key={subIndex}>
                        <Td> {detail.field_name}</Td>
                        <Td>
                          {
                            detail[
                              Object.keys(detail).find(
                                (key) => key !== "field_name"
                              )
                            ]
                          }
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Td>
            </Tr>
          );
        } else {
          return (
            <Tr key={index}>
              <Td>{fieldName}</Td>
              <Td>{JSON.stringify(value)}</Td>
            </Tr>
          );
        }
      }

      return (
        <Tr key={index}>
          <Td>{fieldName}</Td>
          <Td>{value}</Td>
        </Tr>
      );
    });
  };

  const reportUniqData = complexData ? complexData[0] : null;

  return (
    <Container maxW="container.2xl" position={"relative"} mt={"100px"}>
      <BreadCumbs
        path={{ title: "Hisbotlar", link: "/report" }}
        current={{ title: "Hisbot batafsil" }}
      />
      <Heading size={"xl"} textAlign={"center"} fontWeight={500}>
        Ma'lumotlar ro'yxati jurnali turi: {reportUniqData?.journal_type}
      </Heading>

      {reportUniqData?.carriage_number && (
        <Heading size={"md"} textAlign={"center"} mt={4} fontWeight={500}>
          Vagon Raqami: <b>{reportUniqData?.carriage_number}</b>
        </Heading>
      )}

      {complexData?.length ? (
        !isLoading ? (
          <Box bg={"#ffff"} my={8} mx="auto" rounded={"lg"} p={8}>
            <Heading as={"h3"} size={"md"} mb={5} textAlign={"center"}>
              Ma'lumotlar
            </Heading>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Field Name</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>{renderTableRows(reportUniqData?.data)}</Tbody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <Flex>
            <Spinner mx={"auto"} my={"100"} color="green" size={"xl"} />
          </Flex>
        )
      ) : (
        <Flex>
          <Spinner mx={"auto"} my={"100"} color="green" size={"xl"} />
        </Flex>
      )}
    </Container>
  );
};
