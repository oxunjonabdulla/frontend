import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../../Service/module/userModule.api";

export const Invite = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const [wheelPlumberUser, setWheelPlumberUser] = useState([]);

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    setLoading(true);

    const { response, error } = await new UserApi().postIntiveVu51Api(data);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-51 shakl vagon muvaffaqiyatli qo'shildi.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
      window.location.reload();
    }
    if (error) {
      console.log(error?.detail);
      toast({
        status: "error",
        title: error?.detail
          ? "Vagon raqami kiritilmadi yoki bu turdagi vagon raqami mavjud emas."
          : "Bu vagon raqami uchun VU-51 shakli mavjud.",
        duration: 4000,
        isClosable: true,
        position: "top-right",
        fontSize: "3xl",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await new UserApi().getWheelPlumberUserSignature();
      if (response) setWheelPlumberUser(response?.data);
    };
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.serial_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Tartib raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("serial_number")}
              type="number"
            />
          </FormControl>
          <FormControl isInvalid={errors?.wagon_depot_factory}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon Depo, Zavod
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wagon_depot_factory")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.depo_text}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>J.D</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("depo_text")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.code}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Kod
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("code")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheel_pair_number}>
            <FormLabel>G‘ilidrak juftligi raqami </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheel_pair_number")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}> 
          <FormControl isInvalid={errors?.accepted_date}>
            <FormLabel>Qabul qilingan sana</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("accepted_date")}
              type="date"
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_formulation}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Oxirgi shakllanish
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_formulation")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.axle_bearing_seat_diameter}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              O'qning stupidsa osti diametri
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("axle_bearing_seat_diameter")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.flange_thickness}>
            <FormLabel>Obod qalinligi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("flange_thickness")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>    
          <FormControl isInvalid={errors?.last_full_check_and_assembly}>
            <FormLabel>
              Oxirgi to'liq tekshirish va buksani yig'ish
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_full_check_and_assembly")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_rotational_surface_aligned}>
            <FormLabel>
              G'idirak aylanish yuzasini oxirgi yo'nilganligi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_rotational_surface_aligned")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.rib_thickness}>
            <FormLabel>Greben qalinligi</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("rib_thickness")}
              type="number"
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.rib_inclination}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Greben qiyaligi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("rib_inclination")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.prokat}>
            <FormLabel>Prokat</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("prokat")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.distance_between_wheels}>
            <FormLabel>Gildiraklar orasidagi masofa</FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("distance_between_wheels")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.arrival_place}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Kelgan joyi (Zavod, VCHD, TXSH)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("arrival_place")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.preservation_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Preshilochniy raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("preservation_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheel_pair_extracted_from_wagon_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G‘ildirak juftligi chiqarib olingan vagon raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheel_pair_extracted_from_wagon_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wagon_repair_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon ta'mir turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wagon_repair_type")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.is_newly_assembled_or_repaired}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Soz yangi yig'ilgan yoki ta'mirlangan
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("is_newly_assembled_or_repaired")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.fault_number_classified}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Nosoz (klassifikator bo'yicha nuqson raqami)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("fault_number_classified")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.adjustment}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Soz
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("adjustment")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.defect}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Nosoz
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("defect")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.axle_housing_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Buksa korpusining turi(yo'lovchi yoki yuk vagon)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("axle_housing_type")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.gildirak_juftligi_brigadir}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftliklarini brigadir
            </FormLabel>
            <Select
              borderColor={"gray.600"}
              placeholder="G`ildirak juftliklarini brigadir"
              {...register("gildirak_juftligi_brigadir")}
            >
              {wheelPlumberUser?.map((item) => (
                <option key={item?.id} value={item?.id}>{item?.name}</option>
              ))}
            </Select>
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

Invite.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
