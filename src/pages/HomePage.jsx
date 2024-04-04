import CountUp from "react-countup";
import { Chart as ChartJs } from "chart.js/auto";
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
import { Bar, Doughnut, Line } from "react-chartjs-2";

const topInfoData = [
  {
    numberCnt: 1,
    title: "Joriy yilda ta’mirlangan inventar vagonlar soni",
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
];

export const HomePage = () => {
  const data = {
    labels: [2020, 2021, 2023],
    datasets: [
      {
        label: "Joriy yilda ta’mirlangan xususiy vagonlar soni",
        data: [50, 100, 83],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Joriy ta’mirlash bo’linmasiga uzilgan vagonlar soni",
        data: [65, 59, 135],
        fill: false,
        borderColor: "#90CDF4",
        tension: 0.1,
      },
      {
        label: "2023 yilda ta'mirlangan ta'mirlangan inventar vagonlar soni. ",
        data: [100, 400, 940],
        fill: false,
        borderColor: "#FBD38D",
        tension: 0.1,
      },
      {
        label: "2023 yilda ta'mirlangan ta'mirlangan xususiy vagonlar soni. ",
        data: [217, 350, 940],
        fill: false,
        borderColor: "#FEB2B2",
        tension: 0.1,
      },
      {
        label:
          "Joriy ta'mirlash bo'linmasiga 2023 yilda uzulgan vagonlar soni.",
        data: [350, 460, 613],
        fill: false,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            displayFormats: {
              quarter: "MMM YYYY",
            },
          },
        },
      },
    },
  };
  const dughnut = {
    labels: [
      "Qarshi vagon deposi balansiga qabul qilingan va chiqarilgan vagonlar soni",
      "Qarshi vagon deposi hududida turgan nosoz vagonlar soni",
      "Qarshi vagon deposida tegishli buyruq asosida ta’mirlangan vagonlar soni",
    ],
    datasets: [
      {
        label: "2023 yildagi soni",
        data: [170, 180, 47],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
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
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={3}
          mt={10}
        >
          {topInfoData?.map((item, idx) => (
            <GridItem
              key={idx}
              height={"200px"}
              bgColor={"#fff"}
              shadow={" 0 0 15px rgba(0,0,0,0.1)"}
              flexDir={"column"}
              justify={"center"}
              p={5}
              rounded={"lg"}
              cursor={"pointer"}
              _hover={{
                shadow: " 0 0 15px rgba(0,0,0,0.0)",
              }}
            >
              <Text fontSize={"5xl"} mb={5}>
                <CountUp
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                  }}
                  end={item?.numberCnt}
                  duration={1}
                />
              </Text>
              <Text> {item?.title}</Text>
            </GridItem>
          ))}
        </Grid>

        {/* <Grid
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
                height={"130px"}
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
                    <Heading
                      data-type="Heading"
                      textAlign={"start"}
                      fontSize={"10px"}
                    >
                      <CountUp
                        style={{
                          fontSize: "1.5rem",
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
                      fontSize={"15px"}
                    >
                      {item.title}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </GridItem>
          ))}
        </Grid> */}
      </Box>
      <Heading as={"h1"} textAlign={"center"} fontWeight={700} size={"lg"}>
        Таmirlashga oid ma’lumotlar statistikasi(yillar kesmida).
      </Heading>
      <Box
        my={10}
        display={"flex"}
        w={["auto", "60%"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"500px"}
        flexWrap={["wrap", "nowrap"]}
      >
        <Line data={data} height={"100px"} options={config} />
        <Doughnut data={dughnut} height={"80px"} options={config} />
      </Box>
    </Container>
  );
};
