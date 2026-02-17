import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import UserApi from "@/Service/module/userModule.api"; // ✅ adjust path

export const DownloadDailyModal = ({ isOpen, onClose }) => {
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleDownload = async () => {

    if (!month) {
      toast({
        title: "Oy tanlang",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);

      // ✅ CALL AXIOS SERVICE
      const { response, error } =
        await new UserApi().downloadDailyImages(month);

      if (error) {
        throw error;
      }

      // ✅ Create file
      const blob = new Blob([response.data], {
        type: "application/zip",
      });

      // ✅ Download
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${month}-daily-images.zip`;

      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);

      toast({
        title: "Yuklab olindi",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      onClose();
      setMonth("");

    } catch (err) {

      console.error("Download error:", err);

      toast({
        title: "Yuklab bo‘lmadi",
        description: "Server bilan muammo",
        status: "error",
        duration: 4000,
        isClosable: true,
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">

      <ModalOverlay />

      <ModalContent>

        <ModalHeader>Rasmlarni yuklash</ModalHeader>

        <ModalCloseButton />

        <ModalBody>

          <FormControl>
            <FormLabel>Oy tanlang</FormLabel>

            <Input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </FormControl>

        </ModalBody>

        <ModalFooter>

          <Button mr={3} onClick={onClose}>
            Bekor qilish
          </Button>

          <Button
            colorScheme="teal"
            onClick={handleDownload}
            isLoading={loading}
          >
            Yuklash
          </Button>

        </ModalFooter>

      </ModalContent>

    </Modal>
  );
};
