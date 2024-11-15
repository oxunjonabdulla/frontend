import { Image, Text } from "@chakra-ui/react";

export const ImageSignature = ({ signatureImage }) => {
  return !signatureImage ? (
    <Text textAlign={"center"} textColor={"red"}>
      {" "}
      Imzo qo&#39;yilmagan{" "}
    </Text>
  ) : (
      <Image
        margin={"auto"}
      width={"100px"}
      src={`https://api.evagon.uz/${signatureImage}`}
      alt="Rasmd xatolik bor"
    />
  );
};
