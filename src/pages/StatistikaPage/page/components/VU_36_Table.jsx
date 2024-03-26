import { memo } from "react";
import { Divider, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { timeClear } from "@/utils/timeClear";
import { vu_36 } from "@/utils/mock_heads";
const VU_36_Table = memo(function VU_36_Table({ gettingData }) {
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
            <Td>{idx + 1}</Td>
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
              {item.tamir_turi_date}
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
              {item.tamir_date}
              <Divider bgColor={"gray.400"} my={2} />
              {timeClear(item.tamir_hour) + ":" + timeClear(item.tamir_minute)}
            </Td>

            <Td>{item.kod_moder_1}</Td>
            <Td>{item.kod_moder_2}</Td>
            <Td>{item.kod_moder_3}</Td>
            <Td>{item.kod_moder_4}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
});

export default VU_36_Table;
