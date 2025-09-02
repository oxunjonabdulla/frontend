import {Avatar, Flex, Menu, MenuButton, MenuItem, MenuList, Text,} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const UserName = ({onOpen}) => {
    const {user} = useSelector(({userMe}) => userMe);
    return (
        <Menu colorScheme="red">
            <MenuButton>
                <Flex gap={2} cursor={"pointer"} alignItems={"center"}>
                    <Avatar
                        name={user?.name ? user?.name : "Foydalanuvchi"}
                        bg="linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
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
                <MenuItem textAlign="center">Chiqish</MenuItem>
            </MenuList>

        </Menu>
    );
};
