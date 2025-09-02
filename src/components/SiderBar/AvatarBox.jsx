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
import {MdMenu} from "react-icons/md";
import {useAuth} from "../../hooks/useAuth";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {UserName} from "./UserName";

export const AvatarBox = ({setCollapse, setMocileCollapse}) => {
    const {isAuth, logout} = useAuth();
    const auth = isAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

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
                icon={<MdMenu/>}
                onClick={() => setCollapse((prev) => !prev)}
            />
            <IconButton
                display={["inherit", "none"]}
                aria-label="Menu Colapse"
                icon={<MdMenu/>}
                onClick={() => setMocileCollapse((prev) => !prev)}
            />

            <Flex align={"center"} gap={3}>

                {auth ? (
                    <UserName onOpen={onOpen}/>
                ) : (
                    <Link to={"/login"}>
                        <Button colorScheme="teal">Kirish</Button>
                    </Link>
                )}
            </Flex>
            <Modal isOpen={isOpen} isCentered onClose={onClose} size="md">
    <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
    <ModalContent
        borderRadius="xl"
        boxShadow="xl"
        overflow="hidden"
    >
        <ModalHeader
            fontSize="2xl"
            fontWeight="semibold"
            pb={3}
            borderBottom="1px solid"
            borderColor="gray.100"
        >
            Profildan chiqish
        </ModalHeader>
        <ModalCloseButton
            top={4}
            right={4}
            _hover={{ bg: "gray.100" }}
        />

        <ModalBody py={6}>
            <Text fontSize="lg" color="gray.600">
                Siz rostdan ham profilingizdan chiqmoqchimisiz?
            </Text>
        </ModalBody>

        <ModalFooter
            pt={4}
            pb={6}
            gap={3}
            borderTop="1px solid"
            borderColor="gray.100"
        >
            <Button
                onClick={onClose}
                variant="outline"
                size="md"
                flex={1}
                colorScheme="gray"
                _hover={{ bg: "gray.50" }}
            >
                Yopish
            </Button>
            <Button
                variant="solid"
                size="md"
                flex={1}
                colorScheme="red"
                onClick={logout}
                _hover={{ bg: "red.600" }}
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
