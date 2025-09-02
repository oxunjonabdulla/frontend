import {
    Badge,
    Box,
    HStack,
    Icon,
    Link as LinkChakra,
    Text,
    Tooltip,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

import {NavItem} from "./NavItem";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {routersSidebar} from "@/utils/mock_heads";
import UserApi from "../../../Service/module/userModule.api";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {signature_roles} from "../../../utils/roleTest";
import {FiEdit3, FiHome, FiTruck,} from "react-icons/fi";

const home_page = {
    isWork: false,
    label: "Bosh Sahifa",
    path: "/",
    type: "link",
    icon: FiHome,
};

const signature_page = {
    isWork: false,
    label: "Imzolanmagan jurnallar",
    path: "/signatures-list",
    type: "signature",
    icon: FiEdit3,
};

const collectoruser_page = {
    isWork: true,
    label: "Vu 23",
    path: "/collector-vu-23",
    type: "link",
    icon: FiTruck,
    role: "collectoruser",
};

const ModernNavItem = ({item, data, collapse, pathname}) => {
    const bgColor = useColorModeValue("white", "gray.800");
    const activeBg = useColorModeValue("blue.50", "blue.900");
    const activeColor = useColorModeValue("blue.600", "blue.300");
    const textColor = useColorModeValue("gray.700", "gray.300");
    const hoverBg = useColorModeValue("gray.50", "gray.700");

    const isActive = item.path === pathname;

    return (
        <Box
            display="flex"
            alignItems="center"
            my={2}
            mx={2}
        >
            <Tooltip
                isDisabled={collapse}
                label={item.label}
                placement="right"
                hasArrow
            >
                <LinkChakra
                    to={item.path}
                    as={Link}
                    display="flex"
                    alignItems="center"
                    p={3}
                    borderRadius="lg"
                    w="full"
                    bg={isActive ? activeBg : "transparent"}
                    color={isActive ? activeColor : textColor}
                    fontWeight={isActive ? "semibold" : "medium"}
                    fontSize="md"
                    _hover={{
                        textDecoration: "none",
                        bg: isActive ? activeBg : hoverBg,
                        transform: "translateX(2px)",
                        transition: "all 0.2s ease"
                    }}
                    transition="all 0.2s ease"
                    justifyContent={collapse ? "flex-start" : "center"}
                    gap={3}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        minW="28px"
                        h="28px"
                    >
                        <Icon
                            as={item.icon}
                            w={6}
                            h={6}
                            color={isActive ? activeColor : textColor}
                        />
                    </Box>

                    {collapse && (
                        <HStack spacing={2} flex={1} justify="space-between">
                            <Text fontSize="md" noOfLines={1} fontWeight="500">
                                {item.label}
                            </Text>
                            {data?.count > 0 && item.type === "signature" && (
                                <Badge
                                    size="sm"
                                    variant="solid"
                                    colorScheme="blue"
                                    borderRadius="full"
                                    px={2}
                                    py={1}
                                    fontSize="xs"
                                    minW="20px"
                                    textAlign="center"
                                >
                                    {data.count}
                                </Badge>
                            )}
                        </HStack>
                    )}
                </LinkChakra>
            </Tooltip>
        </Box>
    );
};

export const Navigation = ({collapse, setMocileCollapse}) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const {response} = await new UserApi().getAlSsignatures();
            if (response) setData(response?.data);
        } catch (error) {
            console.error("Failed to fetch signature data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const {user} = useSelector(({userMe}) => userMe);
    const {pathname} = useLocation();

    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.100", "gray.700");

    return (
        <Box
            w="full"
            h="full"
            bg={bgColor}
            borderRight="1px"
            borderColor={borderColor}
            overflowY="auto"
            overflowX="hidden"
        >
            <VStack spacing={1} align="stretch" py={4}>
                {/* Home Page */}
                <Box onClick={() => setMocileCollapse(false)}>
                    <ModernNavItem
                        item={home_page}
                        data={data}
                        collapse={collapse}
                        pathname={pathname}
                    />
                </Box>

                {/* Signature Page */}
                {signature_roles.includes(user?.role) && (
                    <Box onClick={() => setMocileCollapse(false)}>
                        <ModernNavItem
                            item={signature_page}
                            data={data}
                            collapse={collapse}
                            pathname={pathname}
                        />
                    </Box>
                )}

                {/* Collector User Page */}
                {user?.role === "collectoruser" && (
                    <Box onClick={() => setMocileCollapse(false)}>
                        <ModernNavItem
                            item={collectoruser_page}
                            data={data}
                            collapse={collapse}
                            pathname={pathname}
                        />
                    </Box>
                )}

                {/* Dynamic Router Items */}
                {routersSidebar
                    .filter((item) =>
                        user?.role === "Superuser" ? item : item?.role === user?.role
                    )
                    .map((item, index) => (
                        <Box key={index} onClick={() => setMocileCollapse(false)}>
                            <NavItem item={item} collapse={collapse}/>
                        </Box>
                    ))}
            </VStack>
        </Box>
    );
};

Navigation.propTypes = {
    collapse: PropTypes.bool,
    setMocileCollapse: PropTypes.func,
};

ModernNavItem.propTypes = {
    item: PropTypes.object.isRequired,
    data: PropTypes.object,
    collapse: PropTypes.bool,
    pathname: PropTypes.string,
};