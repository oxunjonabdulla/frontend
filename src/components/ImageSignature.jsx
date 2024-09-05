import { Image, Text } from "@chakra-ui/react";

export const ImageSignature = ({ signatureImage }) => {
  return !signatureImage ? (
    <Text textAlign={"center"} textColor={"red"}>
      {" "}
      Imzo qo'yilmagan{" "}
    </Text>
  ) : (
    <Image
      width={"100px"}
      src={`https://api.evagon.uz/${signatureImage}`}
      alt="Rasmd xatolik bor"
    />
  );
};
