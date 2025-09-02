import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
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
import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {shortenString} from "@/utils/shortenString";
import {FiChevronDown, FiChevronRight} from "react-icons/fi";
import {useState} from "react";

export const NavItem = ({item, collapse}) => {
    const {label, icon, path, type, isWork, accordItems} = item;
    const {pathname} = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    // Color mode values
    const bgColor = useColorModeValue("white", "gray.800");
    const activeBg = useColorModeValue("blue.50", "blue.900");
    const activeColor = useColorModeValue("blue.600", "blue.300");
    const textColor = useColorModeValue("gray.700", "gray.300");
    const hoverBg = useColorModeValue("gray.50", "gray.700");
    const accordionBg = useColorModeValue("gray.50", "gray.700");
    const accordionActiveBg = useColorModeValue("blue.100", "blue.800");

    // Check if any accordion item is active
    const testPath = accordItems?.some(
        (accordItem) => (path + accordItem.path) === pathname ||
            ("/journals" + accordItem.path) === pathname
    );

    const isActive = path === pathname || testPath;

    // Link type navigation item
    if (type === "link") {
        return (
            <Box mx={2} my={1}>
                <Tooltip
                    isDisabled={collapse}
                    label={label}
                    placement="right"
                    hasArrow
                >
                    <LinkChakra
                        to={isWork ? "#" : path}
                        as={isWork ? Box : Link}
                        display="flex"
                        alignItems="center"
                        p={3}
                        borderRadius="lg"
                        w="full"
                        bg={isActive ? activeBg : "transparent"}
                        color={isActive ? activeColor : textColor}
                        fontWeight={isActive ? "semibold" : "medium"}
                        fontSize="md"
                        cursor={isWork ? "not-allowed" : "pointer"}
                        opacity={isWork ? 0.6 : 1}
                        _hover={!isWork ? {
                            textDecoration: "none",
                            bg: isActive ? activeBg : hoverBg,
                            transform: "translateX(2px)",
                            transition: "all 0.2s ease"
                        } : {}}
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
                                as={icon}
                                w={6}
                                h={6}
                                color={isActive ? activeColor : textColor}
                            />
                        </Box>

                        {collapse && (
                            <HStack spacing={2} flex={1} justify="space-between">
                                <Text fontSize="md" noOfLines={1} fontWeight="500">
                                    {label}
                                </Text>
                                {isWork && (
                                    <Badge
                                        variant="outline"
                                        colorScheme="red"
                                        size="sm"
                                        borderRadius="md"
                                        px={2}
                                        py={1}
                                        fontSize="xs"
                                    >
                                        Jarayonda
                                    </Badge>
                                )}
                            </HStack>
                        )}
                    </LinkChakra>
                </Tooltip>
            </Box>
        );
    }

    // Dropdown type navigation item
    if (type === "drop") {
        if (!collapse) {
            // Collapsed state - show only icon with tooltip
            return (
                <Box mx={2} my={1}>
                    <Tooltip label={label} placement="right" hasArrow>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={3}
                            borderRadius="lg"
                            bg={isActive ? activeBg : "transparent"}
                            color={isActive ? activeColor : textColor}
                            cursor="pointer"
                        >
                            <Icon
                                as={icon}
                                w={6}
                                h={6}
                                color={isActive ? activeColor : textColor}
                            />
                        </Box>
                    </Tooltip>
                </Box>
            );
        }

        // Expanded state - show full accordion
        return (
            <Box mx={2} my={1}>
                <Accordion
                    allowToggle
                    index={isExpanded ? 0 : -1}
                    onChange={(index) => setIsExpanded(index === 0)}
                >
                    <AccordionItem border="none">
                        <AccordionButton
                            p={3}
                            borderRadius="lg"
                            bg={isActive ? activeBg : "transparent"}
                            color={isActive ? activeColor : textColor}
                            fontWeight={isActive ? "semibold" : "medium"}
                            fontSize="sm"
                            _hover={{
                                bg: isActive ? activeBg : hoverBg,
                                transform: "translateX(2px)",
                                transition: "all 0.2s ease"
                            }}
                            _expanded={{
                                bg: activeBg,
                                color: activeColor,
                            }}
                            transition="all 0.2s ease"
                        >
                            <HStack flex={1} spacing={3}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    minW="28px"
                                    h="28px"
                                >
                                    <Icon
                                        as={icon}
                                        w={6}
                                        h={6}
                                    />
                                </Box>
                                <Text fontSize="md" textAlign="left" flex={1} fontWeight="500">
                                    {label}
                                </Text>
                            </HStack>
                            <Icon
                                as={isExpanded ? FiChevronDown : FiChevronRight}
                                w={4}
                                h={4}
                                transition="transform 0.2s ease"
                            />
                        </AccordionButton>

                        <AccordionPanel p={0} mt={1}>
                            <VStack spacing={1} align="stretch">
                                {accordItems?.map((accordItem, idx) => {
                                    const subItemActive = (path + accordItem.path) === pathname ||
                                        ("/journals" + accordItem.path) === pathname;

                                    return (
                                        <Tooltip
                                            key={idx}
                                            label={accordItem.label}
                                            placement="right"
                                            hasArrow
                                        >
                                            <LinkChakra
                                                to={path + accordItem.path}
                                                as={Link}
                                                display="flex"
                                                alignItems="center"
                                                p={2}
                                                pl={12} // Indent for sub-items
                                                borderRadius="md"
                                                fontSize="md"
                                                color={subItemActive ? activeColor : textColor}
                                                bg={subItemActive ? accordionActiveBg : "transparent"}
                                                fontWeight={subItemActive ? "medium" : "normal"}
                                                _hover={{
                                                    textDecoration: "none",
                                                    bg: subItemActive ? accordionActiveBg : accordionBg,
                                                    color: subItemActive ? activeColor : "gray.900",
                                                    transform: "translateX(2px)",
                                                    transition: "all 0.2s ease"
                                                }}
                                                transition="all 0.2s ease"
                                            >
                                                <HStack spacing={2}>
                                                    {accordItem.icon && (
                                                        <Icon
                                                            as={accordItem.icon}
                                                            w={5}
                                                            h={5}
                                                            color={subItemActive ? activeColor : "gray.400"}
                                                        />
                                                    )}
                                                    <Text noOfLines={1}>
                                                        {shortenString(accordItem.label, 35)}
                                                    </Text>
                                                </HStack>
                                            </LinkChakra>
                                        </Tooltip>
                                    );
                                })}
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        );
    }

    return null;
};

NavItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        path: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['link', 'drop']).isRequired,
        isWork: PropTypes.bool,
        accordItems: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            icon: PropTypes.elementType,
        })),
    }).isRequired,
    collapse: PropTypes.bool.isRequired,
};