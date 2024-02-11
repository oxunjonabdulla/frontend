import CountUp from "react-countup";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const fixInfo = [
  {
    title: "Joriy yilda ta’mirlangan inventar vagonlar soni",
    numberCnt: 75,
  },
  {
    title: "Joriy yilda ta’mirlangan xususiy vagonlar soni",
    numberCnt: 120,
  },
  {
    title: "Joriy ta’mirlash bo’linmasiga uzilgan vagonlar soni",
    numberCnt: 120,
  },
  {
    title:
      "Qarshi vagon deposi balansiga qabul qilingan va chiqarilgan vagonlar soni",
    numberCnt: 150,
  },
  {
    title: "Qarshi vagon deposi hududida turgan nosoz vagonlar soni",
    numberCnt: 12,
  },
  {
    title:
      "Qarshi vagon deposida tegishli buyruq asosida ta’mirlangan vagonlar soni",
    numberCnt: 50,
  },
  {
    title:
      "Boshqaruv apparati tomonidan chiqarilgan ta’mirga oid buyruqlar mazmuni",
    numberCnt: 50,
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
      my={4}
    >
      <Box
        bgGradient="linear(to-r, #37BEB0, #0c6170)"
        rounded={"2xl"}
        p={8}
        shadow={"lg"}
        height={"100%"}
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
                duration={0.3}
              />
              {item.title}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
