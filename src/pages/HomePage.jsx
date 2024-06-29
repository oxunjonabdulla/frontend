import CountUp from "react-countup";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import Chart from "react-apexcharts";
import {
  chartFirst,
  chartFive,
  chartFour,
  chartSecond,
  chartThree,
  chartSix,
  demoFirst,
  demoZero,
} from "../utils/chartData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpenReader,
  faPersonDigging,
} from "@fortawesome/free-solid-svg-icons";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";

const topInfoData = [
  {
    title: "Inventar vagonlar soni",
    numberCnt: 345,
    icon: faPersonDigging,
    bgColor: "linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)",
  },
  {
    title: "Qabul qilingan va chiqarilgan vagonlar soni",
    numberCnt: 721,
    icon: faBook,
    bgColor: "linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%)",
  },
  {
    title: "Nosoz vagonlar soni",
    numberCnt: 186,
    icon: faBookOpenReader,
    bgColor: "linear-gradient(135deg, #FFD3A5 10%, #FD6585 100%)",
  },
  {
    title: "Buyruq asosida ta’mirlangan vagonlar soni",
    numberCnt: 0,
    icon: faThinkPeaks,
    bgColor: "linear-gradient(135deg, #EE9AE5 10%, #5961F9 100%)",
  },
];

export const HomePage = () => {
  // const data = {
  //   labels: [2020, 2021, 2023],
  //   datasets: [
  //     {
  //       label: "Joriy yilda ta’mirlangan xususiy vagonlar soni",
  //       data: [50, 100, 83],
  //       fill: false,
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //     },
  //     {
  //       label: "Joriy ta’mirlash bo’linmasiga uzilgan vagonlar soni",
  //       data: [65, 59, 135],
  //       fill: false,
  //       borderColor: "#90CDF4",
  //       tension: 0.1,
  //     },
  //     {
  //       label: "2023 yilda ta'mirlangan ta'mirlangan inventar vagonlar soni. ",
  //       data: [100, 400, 940],
  //       fill: false,
  //       borderColor: "#FBD38D",
  //       tension: 0.1,
  //     },
  //     {
  //       label: "2023 yilda ta'mirlangan ta'mirlangan xususiy vagonlar soni. ",
  //       data: [217, 350, 940],
  //       fill: false,
  //       borderColor: "#FEB2B2",
  //       tension: 0.1,
  //     },
  //     {
  //       label:
  //         "Joriy ta'mirlash bo'linmasiga 2023 yilda uzulgan vagonlar soni.",
  //       data: [350, 460, 613],
  //       fill: false,
  //       borderColor: "green",
  //       tension: 0.1,
  //     },
  //   ],
  // };
  // const config = {
  //   type: "line",
  //   data: data,
  //   options: {
  //     scales: {
  //       x: {
  //         type: "time",
  //         time: {
  //           displayFormats: {
  //             quarter: "MMM YYYY",
  //           },
  //         },
  //       },
  //     },
  //   },
  // };
  // const dughnut = {
  //   labels: [
  //     "Qarshi vagon deposi balansiga qabul qilingan va chiqarilgan vagonlar soni",
  //     "Qarshi vagon deposi hududida turgan nosoz vagonlar soni",
  //     "Qarshi vagon deposida tegishli buyruq asosida ta’mirlangan vagonlar soni",
  //   ],
  //   datasets: [
  //     {
  //       label: "2023 yildagi soni",
  //       data: [170, 180, 47],
  //       backgroundColor: [
  //         "rgb(255, 99, 132)",
  //         "rgb(54, 162, 235)",
  //         "rgb(255, 205, 86)",
  //       ],
  //       hoverOffset: 4,
  //     },
  //   ],
  // };

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
        <Flex
          w={"100%"}
          flexWrap={"wrap"}
          justifyContent={["center", "space-between"]}
          align={"center"}
          listStyleType={"none"}
          fontSize={"xs"}
          gap={5}
          mt={8}
        >
          {topInfoData.map((item, idx) => (
            <Card
              colSpan={2}
              key={idx}
              _hover={{ opacity: 0.7 }}
              transition={"opacity 0.2s"}
              width="300px"
              cursor={"pointer"}
              height="120px"
              color={"#fff"}
              bg={item.bgColor}
            >
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    {" "}
                    <StatLabel
                      textAlign={"left"}
                      fontWeight="bold"
                      pb=".1rem"
                      fontSize={"sm"}
                    >
                      {item.title}
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize={"3xl"}>
                        <CountUp end={item.numberCnt} />
                      </StatNumber>
                      <StatHelpText
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        m="0px"
                        fontWeight="bold"
                        ps="3px"
                        fontSize="md"
                      ></StatHelpText>
                    </Flex>
                  </Stat>
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"12px"}
                    h={"45px"}
                    w={"45px"}
                    bg={item.bgColor}
                  >
                    <FontAwesomeIcon icon={item?.icon} size="xl" />
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Flex>

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
        Қаршидаги вагонлар
      </Heading>

      <Flex gap={6}>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="area"
            options={demoZero.options}
            series={demoZero.series}
            width="100%"
            height="100%"
          />
        </Card>
      </Flex>
      <Heading as={"h1"} textAlign={"center"} fontWeight={700} size={"lg"}>
        Қаршидаги нуксонли вагонлар
      </Heading>

      <Flex gap={6}>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="area"
            options={demoFirst.options}
            series={demoFirst.series}
            width="100%"
            height="100%"
          />
        </Card>
      </Flex>
      <Heading as={"h1"} textAlign={"center"} fontWeight={700} size={"lg"}>
        2024 йил хозирги кунгача Қарши вагон депосида таъмирланган вагонлар
        <br />
        Жами: 188
      </Heading>

      <Flex gap={6}>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartFirst.options}
            series={chartFirst.series}
            width="100%"
            height="100%"
          />
        </Card>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartSix.options}
            series={chartSix.series}
            width="100%"
            height="100%"
          />
        </Card>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartSecond.options}
            series={chartSecond.series}
            width="100%"
            height="100%"
          />
        </Card>
      </Flex>
      <Heading as={"h1"} textAlign={"center"} fontWeight={700} size={"lg"}>
        2024 йил хозирги кунгача Қарши вагон депосида таъмирланган бошқа
        ташкилот вагонлар
        <br />
        Жами: 257
      </Heading>

      <Flex gap={6}>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartThree.options}
            series={chartThree.series}
            width="100%"
            height="100%"
          />
        </Card>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartFour.options}
            series={chartFour.series}
            width="100%"
            height="100%"
          />
        </Card>
        <Card
          display={"flex"}
          py="1rem"
          height={"300px"}
          width="100%"
          position="relative"
        >
          <Chart
            type="bar"
            options={chartFive.options}
            series={chartFive.series}
            width="100%"
            height="100%"
          />
        </Card>
      </Flex>
    </Container>
  );
};
