import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import { isAuth, logout } from "../../Service/authService";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const AvatarBox = ({ setCollapse, setMocileCollapse }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = isAuth();
  const { user } = useSelector(({ userMe }) => userMe);

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
          <Menu colorScheme="red">
            <MenuButton>
              <Flex gap={2} cursor={"pointer"} alignItems={"center"}>
                <Avatar
                  name={user?.name ? user?.name : "Foydalanuvchi"}
                  bg="teal.300"
                />
                <Flex
                  w="full"
                  flexDirection="column"
                  gap={4}
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
                    {user?.name ? user?.name : "Foydalanuvchi"}
                  </Text>
                  <Text
                    as="small"
                    color="gray.500"
                    fontSize={12}
                    lineHeight={0}
                    textTransform={"capitalize"}
                  >
                    {user?.role}
                  </Text>
                </Flex>
                <Text
                  as={"span"}
                  color={"gray.700"}
                  fontSize={scrollY ? "sm" : "md"}
                  fontWeight={700}
                  transition={"font-size 0.3s"}
                >
                  {" "}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList onClick={onOpen} p={"1px"}>
              <MenuItem>Chiqish</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link to={"/login"}>
            <Button variant={"solid"}>Kirish</Button>
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
