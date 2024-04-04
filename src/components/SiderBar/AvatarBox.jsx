import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserName } from "./UserName";

export const AvatarBox = ({ setCollapse, setMocileCollapse }) => {
  const { isAuth, logout } = useAuth();
  const auth = isAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      position={"sticky"}
      top={0}
      left={0}
      w="auto"
      bgColor={"#fff"}
      borderWidth={1}
      borderColor="gray.100"
      borderRadius="lg"
      shadow={"md"}
      p={"10px 10px"}
      justifyContent="space-between"
      gap={2}
      zIndex={1}
      align={"center"}
      flexDirection={"row"}
    >
      <IconButton
        display={["none", "inherit"]}
        aria-label="Menu Colapse"
        icon={<MdMenu />}
        onClick={() => setCollapse((prev) => !prev)}
      />
      <IconButton
        display={["inherit", "none"]}
        aria-label="Menu Colapse"
        icon={<MdMenu />}
        onClick={() => setMocileCollapse((prev) => !prev)}
      />

      <Flex align={"center"} gap={3}>
        <IconButton
          variant="ghost"
          aria-label="search"
          icon={<AiOutlineSearch />}
          fontSize={26}
          color="gray.400"
          borderRadius="50%"
        />
        {auth ? (
          <UserName onOpen={onOpen} />
        ) : (
          <Link to={"/login"}>
            <Button colorScheme="teal">Kirish</Button>
          </Link>
        )}
      </Flex>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay backdropFilter={"blur(10px)"} />
        <ModalContent>
          <ModalHeader fontSize={"3xl"}>Profildan chiqish.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={"xl"} fontWeight={"400"}>
              Siz rostan ham profilingizdan chiqmoqchimisiz.
            </Text>
          </ModalBody>
          <ModalFooter gap={"10px"}>
            <Button
              onClick={onClose}
              position={"relative"}
              bgColor={"red"}
              color={"#fff"}
              _hover={{ bgColor: "red", opacity: 0.8 }}
              size="md"
            >
              Yopish
            </Button>
            <Button
              position={"relative"}
              variant="solid"
              size="md"
              onClick={() => {
                logout();
              }}
            >
              Chiqish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
AvatarBox.propTypes = {
  setCollapse: PropTypes.func,
  setMocileCollapse: PropTypes.func,
};
