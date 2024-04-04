import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Signatur } from "../Signature/Signatur";
import { useState } from "react";
import { option_kodpaa_data } from "../../utils/mock_heads";

export const PtoAddTrain = ({
  register,
  errors,
  handleSubmit,
  loading,
  onSubmit,
}) => {
  const [signautreData, setSiganturtoData] = useState(null);
  const localDate = new Date();

  return (
    <Box position={"relative"}>
      <Heading as="h1" size={"md"} textAlign={"center"} mb={5}>
        Shakl VU-23
      </Heading>

      <Text
        as={"h1"}
        my={4}
        fontSize={"xl"}
        textAlign={"center"}
        fontWeight={500}
      >
        “O‘zbekiston temir yo‘llari” AJ
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my="4"
        >
          <FormControl isInvalid={errors?.station}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Bekat / &quot;O&apos;TY&quot; AJ
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              placeholder="Vagonni ta’mirga jo‘natish"
              type="text"
              {...register("station", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.newsletter}>
            <FormLabel as={"h1"} fontWeight={600}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Xabarnoma №
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              type="text"
              placeholder="Xabarnoma №"
              {...register("newsletter", { required: true })}
            />
          </FormControl>
        </Flex>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my="4"
        >
          <FormControl isInvalid={errors?.carriage_number}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Vagon №
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              type="number"
              placeholder="(yuk vagonlar uchun)"
              {...register("carriage_number", { required: true })}
            />
          </FormControl>
          <FormControl isInvalid={errors?.combined}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              biriktirilgan
            </FormLabel>

            <Input
              borderColor={"gray.600"}
              type="text"
              placeholder="biriktirilgan"
              {...register("combined", { required: true })}
            />
          </FormControl>
        </Flex>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my="4"
        >
          <FormControl isInvalid={errors?.train_number}>
            <FormLabel as={"h1"} fontWeight={500} whiteSpace="nowrap">
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Qabul qilingan poyezd №
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              type="text"
              placeholder="Qabul qilingan poyezd №"
              {...register("train_number", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              soat
            </FormLabel>
            <NumberInput
              borderColor={"gray.600"}
              max={23}
              defaultValue={localDate.getHours()}
              min={0}
            >
              <NumberInputField {...register("accept_hour")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>{" "}
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              daqiqa
            </FormLabel>
            <NumberInput
              max={59}
              defaultValue={localDate.getMinutes()}
              min={0}
              borderColor={"gray.600"}
            >
              <NumberInputField {...register("accept_minute")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500} whiteSpace="nowrap">
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Aniqlangan soat
            </FormLabel>
            <NumberInput
              max={23}
              defaultValue={localDate.getHours()}
              min={0}
              borderColor={"gray.600"}
            >
              <NumberInputField {...register("detect_hour")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Aniqlangan daqiqa
            </FormLabel>
            <NumberInput
              max={59}
              defaultValue={localDate.getMinutes()}
              min={0}
              borderColor={"gray.600"}
            >
              <NumberInputField {...register("detect_minute")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>

        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my="4"
        >
          <FormControl isInvalid={errors?.way_number}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Yul raqami:{" "}
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              type="number"
              placeholder="Yul raqami"
              {...register("way_number", { required: true })}
            />
          </FormControl>

          <FormControl as={"h1"} fontWeight={500}>
            <FormLabel>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Yukli yoki Yuksiz:
            </FormLabel>
            <Select borderColor={"gray.600"} {...register("is_freight")}>
              <option value="true">Yukli</option>
              <option value="false">Yuksiz</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my="4"
        >
          <FormControl isInvalid={errors?.last_repair}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Oxirgi rejaviy ta’mir turi, joyi va qurilgan yili
            </FormLabel>
            <Input
              placeholder="Oxirgi rejaviy ta’mir turi, joyi va qurilgan yili"
              {...register("last_repair", { required: true })}
              borderColor={"gray.600"}
              type="text"
              w={"100%"}
            />
          </FormControl>

          <FormControl>
            <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Nosozlik turi va kodi{" "}
            </FormLabel>

            <Select borderColor={"gray.600"} {...register("breakdown_type")}>
              {option_kodpaa_data.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>
        </Flex>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          my={4}
          alignItems={"center"}
        >
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Talab qilingan ta’mir turi:
            </FormLabel>
            <Select borderColor={"gray.600"} {...register("repair_type")}>
              <option value="tr">&apos;ТР&apos;(JT)</option>
              <option value="dr">&apos;ДР&apos; (DТ)</option>
              <option value="kp">&apos;КР&apos; (KТ)</option>
              <option value="krp">&apos;KРП&apos; (KTP)</option>
            </Select>
          </FormControl>
          <FormControl isInvalid={errors?.carriage_workshop}>
            <FormLabel as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Vagon qayerga ta’mir uchun jo‘natiladi
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              placeholder="Vagon qayerga ta’mir uchun jo‘natiladi"
              {...register("carriage_workshop", { required: true })}
              type="text"
            />
          </FormControl>
        </Flex>

        <Flex gap={3} flexWrap={["wrap", "nowrap"]} alignItems={"center"}>
          <Signatur
            title={"Vagon operatori imzosi"}
            setSiganturtoData={setSiganturtoData}
          />
          <Signatur
            title={"Bekat navbatchisi imzosi"}
            setSiganturtoData={setSiganturtoData}
          />
        </Flex>
        <Flex
          gap={3}
          flexWrap={["wrap", "nowrap"]}
          alignItems={"center"}
          my={8}
        >
          <FormControl isInvalid={errors?.warning_date}>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              Bekat navbatchisi ogohlantirildi. sana
            </FormLabel>
            <Input
              borderColor={"gray.600"}
              {...register("warning_date", { required: true })}
              type="date"
            />
          </FormControl>
          <FormControl>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              soat
            </FormLabel>
            <NumberInput
              max={23}
              defaultValue={localDate.getHours()}
              min={0}
              borderColor={"gray.600"}
            >
              <NumberInputField {...register("warning_hour")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel as={"h1"} fontWeight={500}>
              <Text as={"span"} color={"crimson"}>
                *
              </Text>
              daqiqa.
            </FormLabel>
            <NumberInput
              max={59}
              defaultValue={localDate.getMinutes()}
              min={0}
              borderColor={"gray.600"}
            >
              <NumberInputField {...register("warning_minute")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>

        <Flex>
          <Button
            isLoading={loading}
            loadingText="Keyingisi"
            spinnerPlacement="end"
            mx={"auto"}
            colorScheme="teal"
            type="submit"
          >
            Keyingisi
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

PtoAddTrain.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  register: PropTypes.any,
  handleSubmit: PropTypes.func,
};
