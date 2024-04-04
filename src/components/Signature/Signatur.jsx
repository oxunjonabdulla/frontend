import { Button, Flex, Img, Spinner, Text } from "@chakra-ui/react";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import UserApi from "../../Service/module/userModule.api";
import { useState } from "react";

export const Signatur = ({ title, setSiganturtoData }) => {
  const [signature, setSignature] = useState(null);
  const [signatureLoading, setSignatureLoading] = useState(false);
  const handleGetSignature = async () => {
    setSignatureLoading(true);
    const { response } = await new UserApi().getUserSignatureImg();
    setSignatureLoading(false);

    if (response) {
      setSignature(response?.data);
      setSiganturtoData(response?.data);
    }
  };
  return (
    <Flex gap={3} flexWrap={["wrap", "nowrap"]} mt={8} alignItems={"center"}>
      <Text as={"h1"} fontWeight={500} whiteSpace={"nowrap"}>
        {title}
      </Text>
      {!signature?.user_signature && (
        <Button colorScheme="teal" onClick={handleGetSignature}>
          Shaxsiy Imzosini Joylash
        </Button>
      )}
      {signatureLoading && <Spinner />}
      {signature?.user_signature === null && (
        <Text as={"span"} color={"red"}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          Imzo topilmadi
        </Text>
      )}
      {signature?.user_signature && (
        <Img
          src={`https://api.evagon.uz/${signature?.user_signature}`}
          width={"200px"}
          objectFit={"cover"}
          alt="Imzo"
        />
      )}
    </Flex>
  );
};

Signatur.propTypes = {
  title: PropTypes.string,
  setSiganturtoData: PropTypes.func,
};
