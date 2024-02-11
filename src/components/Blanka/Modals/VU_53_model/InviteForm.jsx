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
export const InviteForm = ({ onClose }) => {
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
              G`ildirak juftligining maxsus raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining egasi
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
              G`ildirak juftligining turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Ta`mirga kelgan vaqti </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Kelgan joyi (Zavod, VCHD, TXSH) </FormLabel>
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
              type="text"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligi chiqarib olingan vagon raqami
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
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining oxirgi yig`ilgan vaqti (formirivaniya){" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="text"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining oxirgi yig`ilgan joyi(formirivaniya)
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
            <FormLabel>Oxirgi o`rta ta`mirlangan vaqti</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>Oxirgi o`rta ta`mirlangan joyi</FormLabel>
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
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("sinovi", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan joyi
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
          G`ildirak juftligining tomonlari O`ng, Chap
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.sinovi}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Buksa holatining belgisi, Buksa qobig`ining turi (yo`lovchi yoki
              yuk vagon)
            </FormLabel>
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
            <FormLabel> Buksa holatining belgisi, Soz yoki Nosoz </FormLabel>
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
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak holatining belgisi, Soz (yangi yig`ilgan yoki
              ta`mirlangan)
            </FormLabel>
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
            <FormLabel>
              {" "}
              G`ildirak holatining belgisi, Nosoz(klassifikator bo`yicha nuqson
              raqami ){" "}
            </FormLabel>
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
        <Text
          as={"h1"}
          textAlign={"center"}
          m={0}
          fontSize={"xl"}
          fontWeight={700}
        >
          G`ildirak juftligi o`lchamlari (мм)
        </Text>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
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
      </ModalBody>

      <ModalFooter>
        <Button variant={"outline_red"} mr={3} onClick={onClose}>
          Yopish
        </Button>
        <Button
          variant={"outline"}
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

InviteForm.propTypes = {
  onClose: PropTypes.func,
};
