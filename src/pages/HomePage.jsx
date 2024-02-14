import CountUp from "react-countup";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const fixInfo = [
  {
    title: "Joriy yilda ta’mirlangan inventar vagonlar soni",
    numberCnt: 1,
  },
  {
    title: "Joriy yilda ta’mirlangan xususiy vagonlar soni",
    numberCnt: 83,
  },
  {
    title: "Joriy ta’mirlash bo’linmasiga uzilgan vagonlar soni",
    numberCnt: 135,
  },
  {
    title:
      "Qarshi vagon deposi balansiga qabul qilingan va chiqarilgan vagonlar soni",
    numberCnt: 170,
  },
  {
    title: "Qarshi vagon deposi hududida turgan nosoz vagonlar soni",
    numberCnt: 180,
  },
  {
    title:
      "Qarshi vagon deposida tegishli buyruq asosida ta’mirlangan vagonlar soni",
    numberCnt: 47,
  },
  {
    title: "2023 yilda ta'mirlangan ta'mirlangan inventar vagonlar soni. ",
    numberCnt: 940,
  },
  {
    title: "2023 yilda ta'mirlangan ta'mirlangan xususiy vagonlar soni. ",
    numberCnt: 636,
  },
  {
    title: "Joriy ta'mirlash bo'linmasiga 2023 yilda uzulgan vagonlar soni.",
    numberCnt: 918,
  },
];

export const HomePage = () => {
  return (
    <Container
      as="div"
      display={"flex"}
      maxW={"container.xl"}
      flexDir={"column"}
      align={"center"}
      gap={12}
      height={"90vh"}
      justifyContent={"center"}
    >
      <Box
        bgGradient="linear(to-r, #37BEB0, #0c6170)"
        rounded={"2xl"}
        p={8}
        shadow={"lg"}
        color={"#fff"}
      >
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
              <CountUp
                style={{ fontSize: "2.5rem", fontWeight: "700" }}
                end={item.numberCnt}
                duration={1}
              />
              {item.title}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
