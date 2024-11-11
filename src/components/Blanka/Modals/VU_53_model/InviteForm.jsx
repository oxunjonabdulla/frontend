import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserApi from "../../../../Service/module/userModule.api";
export const InviteForm = ({ onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { response, error } = await new UserApi().postVu53Prihod(data);
    setLoading(false);
    if (response) {
      toast({
        status: "success",
        title: "VU-53 shakliga vagon muvaffaqiyatli qo'shildi.",
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* VU-53 Create */}
      <ModalBody>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={4}>
          <FormControl isInvalid={errors?.wheelset_serial_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining maxsus raqam
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_serial_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheelset_owner}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining  egasi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_owner")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheelset_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_type")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.repair_arrival_time}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Ta`mirga kelgan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("repair_arrival_time")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.origin_location}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Kelgan joyi (Zavod, VCHD, TXSH)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("origin_location")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.transshipment_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Peresilochniy raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("transshipment_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.carriage_repair_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon ta`mir turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("carriage_repair_type")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_assembly_time}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining oxirgi yig`ilgan vaqti (formirivaniya)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_assembly_time")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_medium_repair_time}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Oxirgi o`rta ta`mirlangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_medium_repair_time")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_medium_repair_location}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Oxirgi o`rta ta`mirlangan joyi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_medium_repair_location")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.last_restoration_time_running_part}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_restoration_time_running_part")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.last_restoration_location_running_part}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining yurish qismini oxirgi qayta tiklangan joyi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("last_restoration_location_running_part")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.wheelset_sides}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining tomonlari
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_sides")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.bearing_casing_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("bearing_casing_type")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.operational_or_faulty}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Soz yoki Nosoz
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("operational_or_faulty")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.operational_newly_assembled_or_repaired}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Soz (yangi yig`ilgan yoki ta`mirlangan)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("operational_newly_assembled_or_repaired")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.fault_defect_number_classifier}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Nosoz(klassifikator bo`yicha nuqson raqami)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("fault_defect_number_classifier")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.running_part_diameter}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Yurish qismining diametri
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("running_part_diameter")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.bushing_thickness}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Obod qalinligi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("bushing_thickness")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.rim_thickness}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Greben qalinligi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("rim_thickness")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.rim_thickness_dimensions}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Greben тiklik o`lchamlari
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("rim_thickness_dimensions")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.rolling}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Prokat
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("rolling")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.distance_between_inner_surfaces}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Obodning ichki yuzalari orasidagi masofa
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("distance_between_inner_surfaces")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.repair_time}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Ta`mirlangan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("repair_time")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.time_given_to_factory_or_under_wagon}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Zavod, VCHD, TXSH yoki vagon ostiga berilgan vaqti
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("time_given_to_factory_or_under_wagon")}
            />
          </FormControl>
        </Flex>
        <Flex gap={3} flexWrap={["wrap", "nowrap"]} align={"center"} my={8}>
          <FormControl isInvalid={errors?.wheelset_sent_location_name}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligini jo`natilgan joy nomi (Zavod, VCHD, TXSH)
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_sent_location_name")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.transfer_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Peresilochniy raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("transfer_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.assigned_carriage_number}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligi berilgan vagon raqami
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("assigned_carriage_number")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wagon_repair_type}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              Vagon ta`mir turi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wagon_repair_type")}
            />
          </FormControl>
          <FormControl isInvalid={errors?.wheelset_sides2}>
            <FormLabel whiteSpace={["wrap", "nowrap"]}>
              G`ildirak juftligining tomonlari
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("wheelset_sides2")}
            />
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

InviteForm.propTypes = {
  onClose: PropTypes.func,
};
