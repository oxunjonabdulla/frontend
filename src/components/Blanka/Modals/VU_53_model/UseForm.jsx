import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { vu_53_form_second } from "../../../../utils/mock_heads";
import UserApi from "../../../../Service/module/userModule.api";

export const UseForm = ({ onClose, isOpen, vu53Id }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu53Rasxod(data, vu53Id);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-53 Rasxod shakliga vagon muvaffaqiyatli qo'shildi.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });

      window.location.reload();
    }
    if (error) {
      toast({
        status: "error",
        title: error?.detail
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun VU-50 shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={"full"}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          VU-53 Jurnalini orqa qismini qo&apos;shish
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
                    {/* inputs */}
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="date"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Ta'mir turi"
                          {...register("is_repair_1")}
                        >
                          <option value={true}>Yangi yig`ilgan</option>
                          <option value={false}>Ta`mirlangan</option>
                        </Select>
                      </Td>
                      <Td>Пр</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="date"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Select
                          borderColor={"gray.600"}
                          placeholder="Ta'mir turi"
                          {...register("is_repair_1")}
                        >
                          <option value={true}>Yangi yig`ilgan</option>
                          <option value={false}>Ta`mirlangan</option>
                        </Select>
                      </Td>
                      <Td>Лев</Td>
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
                    {/* inputs */}
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
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
                    {/* inputs */}
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
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
{/* inputs */}
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
                      <Td>
                        <Input
                          borderColor={"gray.600"}
                          p={0}
                          fontSize={"10px"}
                          {...register("date_of_rasxod_1")}
                          type="text"
                        />
                      </Td>
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
        </ModalBody>
      </ModalContent>
    </Modal >
  );
};

UseForm.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  vu53Id: PropTypes.number,
};
