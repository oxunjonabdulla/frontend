import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { Signatur } from "../../../Signature/Signatur";
import { vu_53_form_second } from "../../../../utils/mock_heads";
export const UseForm = ({ onClose }) => {
  const [trainFixType, setTrainFixType] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [serachingResult, setSerachingResult] = useState(null);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.secondHeader?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>

              <Tr>
                <Td textAlign={"center"}>27</Td>
                <Td textAlign={"center"}>28</Td>
                <Td textAlign={"center"}>29</Td>
                <Td textAlign={"center"}>30</Td>
                <Td textAlign={"center"}>31</Td>
                <Td textAlign={"center"}>32</Td>
                <Td textAlign={"center"}>33</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer mt={4}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.antoher_loser_second?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.antoher_loser_head_second?.map(
                    (item, idx) => (
                      <Td
                        fontSize={"10px"}
                        key={idx}
                        textAlign={"center"}
                        rowSpan={item?.rowspan}
                        colSpan={item?.colspan}
                      >
                        {item?.label}
                      </Td>
                    )
                  )}
              </Tr>

              <Tr>
                <Td textAlign={"center"}>34</Td>
                <Td textAlign={"center"}>35</Td>
                <Td textAlign={"center"}>36</Td>
                <Td textAlign={"center"}>37</Td>
                <Td textAlign={"center"}>38</Td>
                <Td textAlign={"center"}>39</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer mt={4}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_second?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_head_second?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_sub_head_second?.map(
                    (item, idx) => (
                      <Td
                        fontSize={"10px"}
                        key={idx}
                        textAlign={"center"}
                        rowSpan={item?.rowspan}
                        colSpan={item?.colspan}
                      >
                        {item?.label}
                      </Td>
                    )
                  )}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_sub_extra_head_second?.map(
                    (item, idx) => (
                      <Td
                        fontSize={"10px"}
                        key={idx}
                        textAlign={"center"}
                        rowSpan={item?.rowspan}
                        colSpan={item?.colspan}
                      >
                        {item?.label}
                      </Td>
                    )
                  )}
              </Tr>

              <Tr>
                <Td textAlign={"center"}>40</Td>
                <Td textAlign={"center"}>42</Td>
                <Td textAlign={"center"}>43</Td>
                <Td textAlign={"center"}>44</Td>
                <Td textAlign={"center"}>45</Td>
                <Td textAlign={"center"}>46</Td>
                <Td textAlign={"center"}>47</Td>
                <Td textAlign={"center"}>48</Td>
                <Td textAlign={"center"}>49</Td>
                <Td textAlign={"center"}>50</Td>
                <Td textAlign={"center"}>51</Td>
                <Td textAlign={"center"}>52</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer mt={4}>
          <Table variant="striped" colorScheme="gray">
            <Tbody>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_three?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_head_three?.map((item, idx) => (
                    <Td
                      fontSize={"10px"}
                      key={idx}
                      textAlign={"center"}
                      rowSpan={item?.rowspan}
                      colSpan={item?.colspan}
                    >
                      {item?.label}
                    </Td>
                  ))}
              </Tr>
              <Tr>
                {vu_53_form_second?.secondHeader &&
                  vu_53_form_second?.another_sub_head_three?.map(
                    (item, idx) => (
                      <Td
                        fontSize={"10px"}
                        key={idx}
                        textAlign={"center"}
                        rowSpan={item?.rowspan}
                        colSpan={item?.colspan}
                      >
                        {item?.label}
                      </Td>
                    )
                  )}
              </Tr>
              <Tr>
                <Td textAlign={"center"}>53</Td>
                <Td textAlign={"center"}>54</Td>
                <Td textAlign={"center"}>55</Td>
                <Td textAlign={"center"}>56</Td>
                <Td textAlign={"center"}>57</Td>
                <Td textAlign={"center"}>58</Td>
                <Td textAlign={"center"}>59</Td>
                <Td textAlign={"center"}>60</Td>
                <Td textAlign={"center"}>61</Td>
                <Td textAlign={"center"}>62</Td>
                <Td textAlign={"center"}>63</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="red" mr={3} onClick={onClose}>
          Yopish
        </Button>
        <Button
          colorScheme="teal"
          isLoading={isLoading}
          loadingText="Saqlash"
          spinnerPlacement="end"
          type="submit"
        >
          Saqlash
        </Button>
      </ModalFooter>
    </form>
  );
};

UseForm.propTypes = {
  onClose: PropTypes.func,
};
