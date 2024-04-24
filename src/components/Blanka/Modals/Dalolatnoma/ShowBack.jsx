import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ShowBack = ({ isOpen, onClose, dataBack }) => {
  return (
    <Modal
      isOpen={isOpen}
      w={"100%"}
      onClose={onClose}
      size={["sm", "md", "lg", "4xl"]}
      isCentered
      motionPreset="slideInLeft"
    >
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(10deg)" />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          Kirish va chiqish dalolatnomasi yiguv bo‘linmasi orqa tomoni.
        </ModalHeader>

        <ModalCloseButton />
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="md"
          bg="#F5F5F5"
          color="#333"
          boxShadow="md"
        >
          <Text>
            Telegramma N: <b> {dataBack?.created_at} </b> Qarshi vagon deposi
          </Text>
          <Text></Text>
          <Text>
            17.10.2016 yil № 823 sonli “V” telegrammasining telegraf
            ko’rsatmasiga asosan quyidagi imzo chekuvchilar vagonni
            tekshirganliklari to’g’risida ushbu dalolatnomani tuzdilar.
          </Text>
          <Text>№ _______________ ta’mirdan o’tgan _______________</Text>
          <Text>
            Tekshiruv davomida aniqlandi: vagon <b> №{dataBack?.number_act}</b>{" "}
            ishlab chiqarilgan <b> {dataBack?.made_date}</b> kod{" "}
            <b>{dataBack?.kod_act} </b>
            tegishliligi <b>{dataBack?.whom_act}</b>.
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ShowBack;
