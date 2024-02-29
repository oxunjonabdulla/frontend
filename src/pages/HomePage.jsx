import CountUp from "react-countup";
import {
  Box,
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { nt1, nt3, nt4, nt5, nt6 } from "../assets/images";

const fixInfo = [
  {
    title: "Joriy yilda ta’mirlangan inventar vagonlar soni",
    numberCnt: 1,
    image: nt1,
  },
  {
    title: "Joriy yilda ta’mirlangan xususiy vagonlar soni",
    numberCnt: 83,
    image: nt3,
  },
  {
    title: "Joriy ta’mirlash bo’linmasiga uzilgan vagonlar soni",
    numberCnt: 135,
    image: nt5,
  },
  {
    title:
      "Qarshi vagon deposi balansiga qabul qilingan va chiqarilgan vagonlar soni",
    numberCnt: 170,
    image: nt6,
  },
  {
    title: "Qarshi vagon deposi hududida turgan nosoz vagonlar soni",
    numberCnt: 180,
    image: nt4,
  },
  {
    title:
      "Qarshi vagon deposida tegishli buyruq asosida ta’mirlangan vagonlar soni",
    numberCnt: 47,
    image: nt1,
  },
  {
    title: "2023 yilda ta'mirlangan ta'mirlangan inventar vagonlar soni. ",
    numberCnt: 940,
    image: nt3,
  },
  {
    title: "2023 yilda ta'mirlangan ta'mirlangan xususiy vagonlar soni. ",
    numberCnt: 636,
    image: nt5,
  },
  {
    title: "Joriy ta'mirlash bo'linmasiga 2023 yilda uzulgan vagonlar soni.",
    numberCnt: 918,
    image: nt4,
  },
];

export const HomePage = () => {
  return (
    <Container
      as="div"
      display={"flex"}
      maxW={"container.2xl"}
      flexDir={"column"}
      align={"center"}
      gap={12}
      justifyContent={"center"}
    >
      <Box rounded={"2xl"} p={8}>
        <Heading as={"h1"} textAlign={"center"} fontWeight={700} size={"lg"}>
          Таmirlashga oid ma’lumotlar
        </Heading>
        <Grid
          listStyleType={"none"}
          display={"grid"}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(4, 1fr)",
            "repeat(3, 1fr)",
          ]}
          fontSize={"lg"}
          gap={5}
        >
          {fixInfo.map((item, idx) => (
            <GridItem key={idx * 12} display={"flex"} flexDir={"column"} mt={8}>
              <Card
                data-type="Card"
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                rounded={"xl"}
              >
                <Image
                  rounded={"xl"}
                  data-type="Image"
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={item.image}
                  shadow={"lg"}
                />

                <Stack data-type="Stack">
                  <CardBody data-type="CardBody">
                    <Heading data-type="Heading" textAlign={"start"} size="md">
                      <CountUp
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "700",
                        }}
                        end={item.numberCnt}
                        duration={1}
                      />
                    </Heading>

                    <Text
                      data-type="Text"
                      fontWeight={500}
                      textAlign={"start"}
                      py="2"
                    >
                      {item.title}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
