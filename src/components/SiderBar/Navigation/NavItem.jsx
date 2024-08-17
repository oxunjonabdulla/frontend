import {
  Link as LinkChakra,
  Box,
  Text,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Badge,
  Image,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { shortenString } from "@/utils/shortenString";
// import { useTranslation } from "react-i18next";

export const NavItem = ({ item, collapse }) => {
  // const { t } = useTranslation();
  const { label, icon, path, type, isWork } = item;
  const { pathname } = useLocation();

  const testPath = item?.accordItems?.some(
    (item) => "/journals" + item.path === pathname
  );

  if (type === "link") {
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <Tooltip isDisabled={collapse} label={label} placement="right">
          {!collapse ? (
            <LinkChakra to={isWork ? "" : path} as={Link}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                as="div"
                color={testPath ? "black" : "gray.400"}
              >
                <Image src={icon} width={"25px"} />
              </Box>
            </LinkChakra>
          ) : (
            <LinkChakra
              to={isWork ? "" : path}
              as={Link}
              gap={3}
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none", color: "black" }}
              fontWeight="medium"
              color={path === pathname ? "black" : "gray.400"}
              w="full"
              justifyContent={!collapse ? "center" : ""}
            >
              <Box
                w={"10%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                as="div"
              >
                <Image src={icon} width={"25px"} />
              </Box>

              {collapse && <Text>{label}</Text>}
              {collapse && isWork && (
                <Badge variant="outline" rounded={"lg"} colorScheme="red">
                  Jarayonda
                </Badge>
              )}
            </LinkChakra>
          )}
        </Tooltip>
      </Box>
    );
  }
  // if (type === "signature" || data?.unsigned_logs?.length > 0) {
  //   return (
  //     <Box display="flex" alignItems="center" my={6} justifyContent="center">
  //       <Tooltip isDisabled={collapse} label={label} placement="right">
  //         {!collapse ? (
  //           <LinkChakra to={isWork ? "" : path} as={Link}>
  //             <Box
  //               display={"flex"}
  //               justifyContent={"center"}
  //               alignItems={"center"}
  //               as="div"
  //               color={testPath ? "black" : "gray.400"}
  //             >
  //               <Image src={icon} width={"25px"} />
  //             </Box>
  //           </LinkChakra>
  //         ) : (
  //           <LinkChakra
  //             to={isWork ? "" : path}
  //             as={Link}
  //             gap={3}
  //             display="flex"
  //             alignItems="center"
  //             _hover={{ textDecoration: "none", color: "black" }}
  //             fontWeight="medium"
  //             color={path === pathname ? "black" : "gray.400"}
  //             w="full"
  //             justifyContent={!collapse ? "center" : ""}
  //           >
  //             <Box
  //               w={"10%"}
  //               display={"flex"}
  //               justifyContent={"center"}
  //               alignItems={"center"}
  //               as="div"
  //             >
  //               <Image src={icon} width={"25px"} />
  //             </Box>

  //             {collapse && <Text>{label}</Text>}
  //             {data?.unsigned_logs?.length > 0 && (
  //               <Badge
  //                 variant="outline"
  //                 rounded={"2xl"}
  //                 colorScheme="blue"
  //                 p={2}
  //               >
  //                 {data?.unsigned_logs?.length}
  //               </Badge>
  //             )}
  //           </LinkChakra>
  //         )}
  //       </Tooltip>
  //     </Box>
  //   );
  // }
  return (
    type === "drop" &&
    (collapse ? (
      <Accordion allowToggle>
        <AccordionItem border={"none"}>
          <AccordionButton
            _expanded={{
              bg: "#F5F5F5",
              color: path === pathname ? "black" : "none",
            }}
            paddingStart={"none"}
            color={path === pathname ? "black" : "gray.400"}
            pr={0}
            bg={testPath ? "#F5F5F5" : " "}
            borderRadius={5}
          >
            <Box
              w={"full"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={!collapse ? "center" : ""}
              gap={3}
              textAlign={"start"}
            >
              <Box
                w={"10%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                as="div"
                color={testPath ? "black" : "gray.400"}
              >
                <Image src={icon} width={"25px"} objectFit={"cover"} />
              </Box>
              {collapse && (
                <Text color={testPath ? "black" : "gray.400"} fontWeight={500}>
                  {label}
                </Text>
              )}
            </Box>

            <AccordionIcon />
          </AccordionButton>

          {item?.accordItems?.map((item, idx) => (
            <Link key={idx} to={path + item.path}>
              <Tooltip placement="right" label={item?.label}>
                <AccordionPanel
                  pl={5}
                  py={2}
                  cursor={"pointer"}
                  fontSize={"15px"}
                  borderRadius={5}
                  transition={"0.2s"}
                  color={path + item.path === pathname ? "black" : "gray.400"}
                  bgColor={path + item.path === pathname ? "#F5F5F5" : ""}
                  fontWeight={500}
                  my={"3px"}
                  _hover={{
                    color: "#000",
                    bgColor: "#F5F5F5",
                  }}
                >
                  {shortenString(item?.label, 40)}
                </AccordionPanel>
              </Tooltip>
            </Link>
          ))}
        </AccordionItem>
      </Accordion>
    ) : (
      <Tooltip isDisabled={collapse} label={label} placement="right">
        <LinkChakra to={path} as={Link}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            as="div"
            color={testPath ? "black" : "gray.400"}
          >
            <Image src={icon} width={"25px"} />
          </Box>
        </LinkChakra>
      </Tooltip>
    ))
  );
};
NavItem.propTypes = {
  item: PropTypes.object,
  collapse: PropTypes.bool,
  setMocileCollapse: PropTypes.func,
};
