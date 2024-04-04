import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchTrain } from "../../../../utils";
import { Signatur } from "../../../Signature/Signatur";
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
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <SearchTrain setSerachingResult={setSerachingResult} />
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Ta`mirlangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Zavod, VCHD, TXSH yoki vagon ostiga berilgan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligini jo`natilgan joy nomi (Zavod, VCHD, TXSH)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Peresilochniy raqami</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligi berilgan vagon raqami{" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Vagon ta`mir turi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          G`ildirak juftligi o`lchamlari мм (o`ng va chap tomonlari)
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> O`qning рostupochniy qismini diametri </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Yurish qismining diametri</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Obod qalinligi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Greben qalinligi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Greben тiklik o`lchamlari</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> Prokat</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="O'ng"
              />
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder={"Chap"}
              />
            </Flex>
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Obodning ichki yuzalari orasidagi masofa</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>

        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Bajarilgan ta`mir ishlari
        </Text>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirakni almashtirish sababi (klassifikator bo`yicha nosozlik
              raqami )
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Bajarilgan ta`mir ishlari ( Еlementlardan hosil bo`lgan g`ildirak
          juftligi)
        </Text>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Yangi </FormLabel>
            <FormLabel>O`q (kod 1) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
              placeholder="Yangi"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Yangi </FormLabel>
            <FormLabel>G`ildirak (kod 1) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
              placeholder="Yangi"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Eski </FormLabel>
            <FormLabel>O`q (kod 1) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
              placeholder="Eski"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Eski </FormLabel>
            <FormLabel>G`ildirak (kod 1) </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
              placeholder="Eski"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Yig`ilgan g`ildirak juftligi </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>O`rta ta`mir</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Joriy ta`mir</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining yurish qismini qayta tiklangan
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Greben qismi payvandlangandan so`ng g`ildirak juftligining yurish
              qismini qayta tiklangan
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              O`qning bo`yin qismidagi M110 rezbasin qayta tiklash
            </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel> O`qning bo`yin qismini qayta tiklash </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>G`ildirak juftligining yurish qismini</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
                placeholder="G`ildirak juftligining yurish qismini qayta tiklangankbr sababi (klassifikator bo`yicha nosozlik raqami )"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)
            </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
        </Flex>

        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Defektoskop uskunasi bilan tekshiruchining imzosi
        </Text>
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          O`q{" "}
        </Text>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Bo`yni va old postupichniy qismi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>postupichniy qismi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Boyinidagi ichki xalqasi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>O`rta qismi</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
        </Flex>

        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          G`ildirak{" "}
        </Text>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Obod, Disk, Stupitsa</FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Greben qismini payvandlangandan so`ng </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
        </Flex>

        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          Ishlab chiqaruvching imzosi
        </Text>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <Signatur title={" G`ildirak juftliklarini  tekshirgan"} />
          <Signatur title={"  G`ildirak juftliklarini  bergan"} />
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Izoh </FormLabel>
            <Flex flexDir={"column"} gap={3}>
              <Input
                borderColor={"gray.600"}
                {...register("sinovi", { required: true })}
                type="text"
              />
            </Flex>
          </FormControl>
        </Flex>
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
