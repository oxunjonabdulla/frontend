// import {
//     Box,
//     Button,
//     Checkbox,
//     Flex,
//     FormControl,
//     FormErrorIcon,
//     FormErrorMessage,
//     FormLabel,
//     Heading,
//     Image,
//     Input,
//     InputGroup,
//     InputRightElement,
//     Stack,
//     Text,
//     useToast,
//     useColorModeValue,
// } from "@chakra-ui/react";
//
// import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import { useForm } from "react-hook-form";
// import { Navigate, useLocation, useNavigate } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { TrainLoader } from "@/components";
// import { Evagon, Logo } from "../assets";
//
// export const Login = () => {
//     const [loading, setLoading] = useState(false);
//     const { login, isAuth } = useAuth();
//     const location = useLocation();
//     const toast = useToast();
//     const navigate = useNavigate();
//     const [show, setShow] = useState(false);
//     const [showTrain, setShowTrain] = useState(false);
//
//     const handleClick = () => setShow(!show);
//
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();
//
//     const onsubmit = async (data) => {
//         setLoading(true);
//         const { response, error } = await login(data);
//         setLoading(false);
//
//         if (response) {
//             setShowTrain(true);
//             return setTimeout(() => {
//                 navigate(location.state?.from || "/", { replace: true });
//             }, 4000);
//         }
//
//         if (error) {
//             toast({
//                 status: "error",
//                 title: error?.detail || "Server bilan aloqa o'rnatib bo'lmadi.",
//                 duration: 6000,
//                 position: "top-left",
//                 isClosable: true,
//                 fontSize: "7px",
//             });
//         }
//     };
//
//     if (showTrain) {
//         return <TrainLoader />;
//     }
//
//     if (isAuth()) {
//         return <Navigate to="/" />;
//     }
//
//     // Color definitions
//     const primaryGradient = "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)";
//     const primaryColor = "#11998e";
//     const secondaryColor = "#38ef7d";
//     const hoverGradient = "linear-gradient(135deg, #0d7a72 0%, #2bc576 100%)";
//     const activeGradient = "linear-gradient(135deg, #0b6b64 0%, #24ad66 100%)";
//
//     // Railway-themed colors
//     const bgGradient = useColorModeValue(
//         "linear(to-r, #1a2a6c, #b21f1f, #fdbb2d)",
//         "linear(to-r, #0f2027, #203a43, #2c5364)"
//     );
//     const trackColor = useColorModeValue("gray.200", "gray.600");
//     const railColor = useColorModeValue("gray.800", "gray.300");
//
//     return (
//         <Flex
//             minH="100vh"
//             w="100vw"
//             bg={bgGradient}
//             position="relative"
//             overflow="hidden"
//         >
//             {/* Railway track background elements */}
//             {/*<Box*/}
//             {/*    position="absolute"*/}
//             {/*    bottom="0"*/}
//             {/*    left="0"*/}
//             {/*    right="0"*/}
//             {/*    height="40px"*/}
//             {/*    bg={trackColor}*/}
//             {/*    _before={{*/}
//             {/*        content: '""',*/}
//             {/*        position: "absolute",*/}
//             {/*        top: "15px",*/}
//             {/*        left: "0",*/}
//             {/*        right: "0",*/}
//             {/*        height: "4px",*/}
//             {/*        bg: railColor,*/}
//             {/*        backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 49px, white 49px, white 50px)",*/}
//             {/*    }}*/}
//             {/*/>*/}
//
//             {/* Moving train image */}
//             {/*<Box*/}
//             {/*    position="absolute"*/}
//             {/*    bottom="20px"*/}
//             {/*    left="-100px"*/}
//             {/*    w="100px"*/}
//             {/*    h="auto"*/}
//             {/*    animation="trainMove 15s linear infinite"*/}
//             {/*    sx={{*/}
//             {/*        "@keyframes trainMove": {*/}
//             {/*            "0%": { transform: "translateX(0)" },*/}
//             {/*            "100%": { transform: "translateX(calc(100vw + 100px))" },*/}
//             {/*        },*/}
//             {/*    }}*/}
//             {/*>*/}
//             {/*    <Image*/}
//             {/*        src="/src/assets/images/train.png"*/}
//             {/*        alt="Moving Train"*/}
//             {/*        w="100px"*/}
//             {/*        h="auto"*/}
//             {/*        objectFit="contain"*/}
//             {/*    />*/}
//             {/*</Box>*/}
//
//             {/* Main content */}
//             <Flex
//                 flex="1"
//                 align="center"
//                 justify="center"
//                 p={6}
//                 position="relative"
//                 zIndex="1"
//             >
//                 <Box
//                     w="100%"
//                     maxW="md"
//                     p={8}
//                     borderRadius="xl"
//                     bg="white"
//                     boxShadow="2xl"
//                     border="4px solid"
//                     borderColor={primaryColor}
//                     position="relative"
//                     _before={{
//                         content: '""',
//                         position: "absolute",
//                         top: "-10px",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         w: "20px",
//                         h: "20px",
//                         bg: "red.500",
//                         borderRadius: "50%",
//                         boxShadow: "0 0 0 4px white",
//                     }}
//                 >
//                     {/* Railway crossing sign inspired header */}
//                     <Flex direction="column" align="center" mb={8}>
//                         <Box
//                             mb={6}
//                             position="relative"
//                             _before={{
//                                 content: '""',
//                                 position: "absolute",
//                                 top: "-10px",
//                                 left: "50%",
//                                 transform: "translateX(-50%)",
//                                 w: "60px",
//                                 h: "60px",
//                                 bg: "red.500",
//                                 borderRadius: "50%",
//                                 zIndex: "-1",
//                             }}
//                         >
//                             <Image
//                                 src={Evagon}
//                                 alt="Evagon Logo"
//                                 boxSize="100px"
//                                 objectFit="contain"
//                                 mx="auto"
//                                 filter="drop-shadow(0 0 8px rgba(0,0,0,0.2))"
//                             />
//                         </Box>
//                         <Heading
//                             size="lg"
//                             color="gray.800"
//                             textAlign="center"
//                             fontFamily="heading"
//                             fontWeight="bold"
//                             letterSpacing="tighter"
//                             textTransform="uppercase"
//                             position="relative"
//                             _after={{
//                                 content: '""',
//                                 position: "absolute",
//                                 bottom: "-8px",
//                                 left: "25%",
//                                 right: "25%",
//                                 height: "3px",
//                                 bg: secondaryColor,
//                                 borderRadius: "full",
//                             }}
//                         >
//                             Tizimga kirish
//                         </Heading>
//                         <Text
//                             mt={4}
//                             color="gray.600"
//                             textAlign="center"
//                             fontStyle="italic"
//                         >
//                             Platformaga xush kelibsiz
//                         </Text>
//                     </Flex>
//
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <Stack spacing={4}>
//                             <FormControl isInvalid={errors?.username}>
//                                 <FormLabel
//                                     htmlFor="email"
//                                     color="gray.700"
//                                     fontWeight="semibold"
//                                     display="flex"
//                                     alignItems="center"
//                                 >
//                                     <Box
//                                         as="span"
//                                         bg={secondaryColor}
//                                         w="8px"
//                                         h="8px"
//                                         mr={2}
//                                         borderRadius="full"
//                                     />
//                                     Foydalanuvchi nomi
//                                 </FormLabel>
//                                 <Input
//                                     id="email"
//                                     type="text"
//                                     placeholder="Foydalanuvchi nomingizni kiriting"
//                                     size="lg"
//                                     focusBorderColor={secondaryColor}
//                                     borderColor="gray.300"
//                                     borderWidth="2px"
//                                     bg="white"
//                                     _hover={{ borderColor: secondaryColor }}
//                                     {...register("username", {
//                                         required: "Foydalanuvchi nomi kiritilmadi",
//                                     })}
//                                 />
//                                 <FormErrorMessage>
//                                     <FormErrorIcon /> {errors?.username?.message}
//                                 </FormErrorMessage>
//                             </FormControl>
//
//                             <FormControl isInvalid={errors?.password}>
//                                 <FormLabel
//                                     htmlFor="passwordID"
//                                     color="gray.700"
//                                     fontWeight="semibold"
//                                     display="flex"
//                                     alignItems="center"
//                                 >
//                                     <Box
//                                         as="span"
//                                         bg={secondaryColor}
//                                         w="8px"
//                                         h="8px"
//                                         mr={2}
//                                         borderRadius="full"
//                                     />
//                                     Parol
//                                 </FormLabel>
//                                 <InputGroup size="lg">
//                                     <Input
//                                         id="passwordID"
//                                         type={show ? "text" : "password"}
//                                         placeholder="Parolingizni kiriting"
//                                         focusBorderColor={secondaryColor}
//                                         borderColor="gray.300"
//                                         borderWidth="2px"
//                                         bg="white"
//                                         _hover={{ borderColor: secondaryColor }}
//                                         {...register("password", {
//                                             required: "Parol kiritilmadi",
//                                         })}
//                                     />
//                                     <InputRightElement>
//                                         <Button
//                                             variant="ghost"
//                                             onClick={handleClick}
//                                             _hover={{ bg: "transparent", color: secondaryColor }}
//                                             _active={{ bg: "transparent" }}
//                                             color="gray.500"
//                                         >
//                                             <FontAwesomeIcon
//                                                 icon={!show ? faEye : faEyeSlash}
//                                             />
//                                         </Button>
//                                     </InputRightElement>
//                                 </InputGroup>
//                                 <FormErrorMessage>
//                                     <FormErrorIcon /> {errors?.password?.message}
//                                 </FormErrorMessage>
//                             </FormControl>
//
//                             <Flex justify="space-between" align="center">
//                                 <Checkbox
//                                     id="remember-login"
//                                     colorScheme="green"
//                                     size="md"
//                                     color="gray.700"
//                                 >
//                                     Eslab qolish
//                                 </Checkbox>
//                             </Flex>
//
//                             <Button
//                                 type="submit"
//                                 bgGradient={primaryGradient}
//                                 color="white"
//                                 size="lg"
//                                 fontSize="md"
//                                 isLoading={loading}
//                                 loadingText="Kirish"
//                                 spinnerPlacement="end"
//                                 mt={4}
//                                 height="50px"
//                                 borderRadius="md"
//                                 boxShadow="md"
//                                 textTransform="uppercase"
//                                 fontWeight="bold"
//                                 letterSpacing="wide"
//                                 _hover={{
//                                     bgGradient: hoverGradient,
//                                     transform: 'translateY(-2px)',
//                                     boxShadow: 'lg',
//                                 }}
//                                 _active={{
//                                     bgGradient: activeGradient,
//                                     transform: 'translateY(0)',
//                                 }}
//                                 position="relative"
//                                 overflow="hidden"
//                                 _before={{
//                                     content: '""',
//                                     position: "absolute",
//                                     top: "0",
//                                     left: "-100%",
//                                     w: "100%",
//                                     h: "100%",
//                                     bg: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
//                                     transition: "all 0.5s",
//                                 }}
//                                 // _hover={{
//                                 //     _before: {
//                                 //         left: "100%",
//                                 //     },
//                                 // }}
//                             >
//                                 Tizimga kirish
//                             </Button>
//                         </Stack>
//                     </form>
//                 </Box>
//             </Flex>
//         </Flex>
//     );
// };
//
// import {
//     Box,
//     Button,
//     Checkbox,
//     Flex,
//     FormControl,
//     FormErrorIcon,
//     FormErrorMessage,
//     FormLabel,
//     Heading,
//     Image,
//     Input,
//     InputGroup,
//     InputRightElement,
//     Stack,
//     Text,
//     useToast,
// } from "@chakra-ui/react";
// import {useState} from "react";
// import {useAuth} from "../hooks/useAuth";
// import {useForm} from "react-hook-form";
// import {Navigate, useLocation, useNavigate} from "react-router";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
// import {TrainLoader} from "@/components";
// import {Evagon, Logo} from "../assets"; // Company logo
// // import CompanyWorkImg from "../assets/company-work.jpg"; // Replace with your real image
//
// export const Login = () => {
//     const [loading, setLoading] = useState(false);
//     const {login, isAuth} = useAuth();
//     const location = useLocation();
//     const toast = useToast();
//     const navigate = useNavigate();
//     const [show, setShow] = useState(false);
//     const [showTrain, setShowTrain] = useState(false);
//
//     const handleClick = () => setShow(!show);
//
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: {errors},
//     } = useForm();
//
//     const onsubmit = async (data) => {
//         setLoading(true);
//         const {response, error} = await login(data);
//         setLoading(false);
//
//         if (response) {
//             setShowTrain(true);
//             return setTimeout(() => {
//                 navigate(location.state?.from || "/", {replace: true});
//             }, 4000);
//         }
//
//         if (error) {
//             toast({
//                 status: "error",
//                 title: error?.detail || "Server bilan aloqa o'rnatib bo'lmadi.",
//                 duration: 6000,
//                 position: "top-left",
//                 isClosable: true,
//                 fontSize: "7px",
//             });
//         }
//     };
//
//     if (showTrain) {
//         return <TrainLoader />;
//     }
//
//     if (isAuth()) {
//         return <Navigate to="/" />;
//     }
//
//     return (
//         <Flex
//             minH="100vh"
//             w="100vw"
//             bg="gray.50"
//         >
//             <Box
//                 flex="1"
//                 display={{ base: "none", md: "block" }}
//                 bg="gray.100"
//                 position="relative"
//             >
//                 <Image
//                     src={Logo}
//                     alt="Company Working Session"
//                     objectFit="cover"
//                     w="100%"
//                     h="100%"
//                 />
//             </Box>
//
//
//             {/* Right Section - Login Form */}
//             <Flex
//                 flex="1"
//                 align="center"
//                 justify="center"
//                 p={6}
//                 bg="white"
//             >
//                 <Box
//                     w="100%"
//                     maxW="md"
//                     p={8}
//                     borderRadius="xl"
//                     boxShadow="xl"
//                 >
//                     <Flex direction="column" align="center" mb={8}>
//                         <Box mb={6}>
//                             <Image
//                                 src={Evagon}
//                                 alt="Evagon Logo"
//                                 boxSize="100px"
//                                 objectFit="contain"
//                                 mx="auto"
//                             />
//                         </Box>
//                         <Heading size="lg" color="gray.800" textAlign="center">
//                             Tizimga kirish
//                         </Heading>
//                         <Text mt={2} color="gray.500" textAlign="center">
//                             Xush kelibsiz Evagon Platformasiga
//                         </Text>
//                     </Flex>
//
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <Stack spacing={4}>
//                             <FormControl isInvalid={errors?.username}>
//                                 <FormLabel htmlFor="email" color="gray.700">Foydalanuvchi nomi</FormLabel>
//                                 <Input
//                                     id="email"
//                                     type="text"
//                                     placeholder="Foydalanuvchi nomingizni kiriting"
//                                     size="lg"
//                                     focusBorderColor="blue.500"
//                                     {...register("username", {
//                                         required: "Foydalanuvchi nomi kiritilmadi",
//                                     })}
//                                 />
//                                 <FormErrorMessage>
//                                     <FormErrorIcon /> {errors?.username?.message}
//                                 </FormErrorMessage>
//                             </FormControl>
//
//                             <FormControl isInvalid={errors?.password}>
//                                 <FormLabel htmlFor="passwordID" color="gray.700">Parol</FormLabel>
//                                 <InputGroup size="lg">
//                                     <Input
//                                         id="passwordID"
//                                         type={show ? "text" : "password"}
//                                         placeholder="Parolingizni kiriting"
//                                         focusBorderColor="blue.500"
//                                         {...register("password", {
//                                             required: "Parol kiritilmadi",
//                                         })}
//                                     />
//                                     <InputRightElement>
//                                         <Button
//                                             variant="ghost"
//                                             onClick={handleClick}
//                                             _hover={{ bg: "transparent" }}
//                                             _active={{ bg: "transparent" }}
//                                         >
//                                             <FontAwesomeIcon
//                                                 icon={!show ? faEye : faEyeSlash}
//                                                 color="gray.500"
//                                             />
//                                         </Button>
//                                     </InputRightElement>
//                                 </InputGroup>
//                                 <FormErrorMessage>
//                                     <FormErrorIcon /> {errors?.password?.message}
//                                 </FormErrorMessage>
//                             </FormControl>
//
//                             <Flex justify="space-between" align="center">
//                                 <Checkbox
//                                     id="remember-login"
//                                     colorScheme="green"
//                                     size="md"
//                                 >
//                                     Eslab qolish
//                                 </Checkbox>
//                             </Flex>
//
//                             <Button
//                                 type="submit"
//                                 bgGradient="linear(to-r, #11998e, #38ef7d)"
//                                 color="white"
//                                 size="lg"
//                                 fontSize="md"
//                                 isLoading={loading}
//                                 loadingText="Kirish"
//                                 spinnerPlacement="end"
//                                 mt={4}
//                                 _hover={{
//                                     bgGradient: 'linear(to-r, #0d7a72, #2bc576)',
//                                 }}
//                                 _active={{
//                                     bgGradient: 'linear(to-r, #0b6b64, #24ad66)',
//                                 }}
//                             >
//                                 Tizimga kirish
//                             </Button>
//                         </Stack>
//                     </form>
//                 </Box>
//             </Flex>
//         </Flex>
//     );
// };


import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorIcon,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import {useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {useForm} from "react-hook-form";
import {Navigate, useLocation, useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {TrainLoader} from "@/components";
import {Evagon, Logo} from "../assets"; // Company logo

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const {login, isAuth} = useAuth();
    const location = useLocation();
    const toast = useToast();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [showTrain, setShowTrain] = useState(false);

    // Color mode values for railway track
    const trackColor = useColorModeValue("gray.600", "gray.400");
    const railColor = useColorModeValue("gray.700", "gray.300");

    const handleClick = () => setShow(!show);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onsubmit = async (data) => {
        setLoading(true);
        const {response, error} = await login(data);
        setLoading(false);

        if (response) {
            setShowTrain(true);
            return setTimeout(() => {
                navigate(location.state?.from || "/", {replace: true});
            }, 4000);
        }

        if (error) {
            toast({
                status: "error",
                title: error?.detail || "Server bilan aloqa o'rnatib bo'lmadi.",
                duration: 6000,
                position: "top-left",
                isClosable: true,
                fontSize: "7px",
            });
        }
    };

    if (showTrain) {
        return <TrainLoader/>;
    }

    if (isAuth()) {
        return <Navigate to="/"/>;
    }

    return (
        <Flex
            minH="100vh"
            w="100vw"
            bg="gray.50"
            position="relative"
            overflow="hidden"
        >


            {/* Right Section - Login Form */}
            <Flex
                flex="1"
                align="center"
                justify="center"
                p={6}
                bg="white"
                position="relative"
            >
                <Box
                    w="100%"
                    maxW="md"
                    p={8}
                    borderRadius="xl"
                    boxShadow="xl"
                    zIndex={2}
                >
                    <Flex direction="column" align="center" mb={8}>
                        <Box mb={6}>
                            <Image
                                src={Evagon}
                                alt="Evagon Logo"
                                boxSize="100px"
                                objectFit="contain"
                                mx="auto"
                            />
                        </Box>
                        <Heading size="lg" color="gray.800" textAlign="center">
                            Tizimga kirish
                        </Heading>
                        <Text mt={2} color="gray.500" textAlign="center">
                            Xush kelibsiz Evagon Platformasiga
                        </Text>
                    </Flex>

                    <form onSubmit={handleSubmit(onsubmit)}>
                        <Stack spacing={4}>
                            <FormControl isInvalid={errors?.username}>
                                <FormLabel htmlFor="email" color="gray.700">Foydalanuvchi nomi</FormLabel>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Foydalanuvchi nomingizni kiriting"
                                    size="lg"
                                    focusBorderColor="blue.500"
                                    {...register("username", {
                                        required: "Foydalanuvchi nomi kiritilmadi",
                                    })}
                                />
                                <FormErrorMessage>
                                    <FormErrorIcon/> {errors?.username?.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors?.password}>
                                <FormLabel htmlFor="passwordID" color="gray.700">Parol</FormLabel>
                                <InputGroup size="lg">
                                    <Input
                                        id="passwordID"
                                        type={show ? "text" : "password"}
                                        placeholder="Parolingizni kiriting"
                                        focusBorderColor="blue.500"
                                        {...register("password", {
                                            required: "Parol kiritilmadi",
                                        })}
                                    />
                                    <InputRightElement>
                                        <Button
                                            variant="ghost"
                                            onClick={handleClick}
                                            _hover={{bg: "transparent"}}
                                            _active={{bg: "transparent"}}
                                        >
                                            <FontAwesomeIcon
                                                icon={!show ? faEye : faEyeSlash}
                                                color="gray.500"
                                            />
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    <FormErrorIcon/> {errors?.password?.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Flex justify="space-between" align="center">
                                <Checkbox
                                    id="remember-login"
                                    colorScheme="green"
                                    size="md"
                                >
                                    Eslab qolish
                                </Checkbox>
                            </Flex>

                            <Button
                                type="submit"
                                bgGradient="linear(to-r, #11998e, #38ef7d)"
                                color="white"
                                size="lg"
                                fontSize="md"
                                isLoading={loading}
                                loadingText="Kirish"
                                spinnerPlacement="end"
                                mt={4}
                                _hover={{
                                    bgGradient: 'linear(to-r, #0d7a72, #2bc576)',
                                }}
                                _active={{
                                    bgGradient: 'linear(to-r, #0b6b64, #24ad66)',
                                }}
                            >
                                Tizimga kirish
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
                 {/* Left Section - Image */}
            <Box
                flex="1"
                display={{base: "none", md: "block"}}
                bg="gray.100"
                position="relative"
            >
                <Image
                    src={Logo}
                    alt="Company Working Session"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>
        </Flex>
    );
};