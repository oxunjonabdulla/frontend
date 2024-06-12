import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const FormWheel = memo(function FormWheel({
  // eslint-disable-next-line react/prop-types
  register,
  // eslint-disable-next-line react/prop-types
  remove,
  // eslint-disable-next-line react/prop-types
  idx,
  // eslint-disable-next-line react/prop-types
  errors,
}) {
  return (
    <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"flex-end"} my="4">
      <FormControl
        isInvalid={
          errors?.wheel_pair && errors?.wheel_pair[idx]?.wheel_pair_number
        }
      >
        <FormLabel>G‘ildirak juftligi raqami</FormLabel>
        <Input
          type="text"
          {...register(`wheel_pair.${idx}.wheel_pair_number`, {
            required: true,
          })}
          borderColor={"gray.600"}
        />
      </FormControl>

      <FormControl
        isInvalid={
          errors?.wheel_pair && errors?.wheel_pair[idx]?.wheel_pair_type
        }
      >
        <FormLabel>G‘ildirak juftligi turi</FormLabel>
        <Input
          type="text"
          {...register(`wheel_pair.${idx}.wheel_pair_type`, { required: true })}
          borderColor={"gray.600"}
        />
      </FormControl>

      <FormControl
        isInvalid={
          errors?.wheel_pair && errors?.wheel_pair[idx]?.wheels_pair_priice_list
        }
      >
        <FormLabel>G‘ildirak juftliklarining ro‘yxat narxi</FormLabel>
        <Input
          type="text"
          {...register(`wheel_pair.${idx}.wheels_pair_priice_list`, {
            required: true,
          })}
          borderColor={"gray.600"}
        />
      </FormControl>
      <FormControl
        isInvalid={
          errors?.wheel_pair &&
          errors?.wheel_pair[idx]?.condition_servicable_defects
        }
      >
        <FormLabel>Holati</FormLabel>
        <Input
          type="text"
          {...register(`wheel_pair.${idx}.condition_servicable_defects`, {
            required: true,
          })}
          borderColor={"gray.600"}
        />
      </FormControl>
      <Button type="button" colorScheme="red" onClick={() => remove(idx)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </Flex>
  );
});
