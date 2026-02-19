import CountUp from "react-countup";
import {useEffect, useState} from "react";
import {
    Badge,
    Box,
    Card,
    CardBody,
    Container,
    Divider,
    Flex,
    Grid,
    Stack, // ← ADD THIS IMPORT
    GridItem,
    Heading, IconButton,
    Progress,
    SimpleGrid,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Button,
    Avatar,


} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faChartPie,
    faClipboard,
    faClipboardCheck,
    faNewspaper, faTimes,
    faTools,
    faTrain,
    faWrench
} from "@fortawesome/free-solid-svg-icons"; // Example icons
import {Link} from "react-router-dom";

import {
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {privateInstance} from "@/Service/client/client.js"; // for auth endpoints
import { useNavigate } from "react-router-dom";
import UserApi from "@/Service/module/userModule.api.js";


const WagonTypeLineChart = () => {
  const [wagonTypeMonthlyData, setWagonTypeMonthlyData] = useState([]);


  useEffect(() => {
    privateInstance
      .get("carriage_type_statistic/")
      .then((res) => {
        const apiData = res.data;
        const grouped = {};

        apiData.forEach((item) => {
          const month = item.repair_month.month_name;
          if (!grouped[month]) {
            grouped[month] = {
              month,
              yopiq: 0,
              platforma: 0,
              yarim: 0,
              sisterna: 0,
              boshqa: 0,
            };
          }

          const name = item.name.toLowerCase();
          if (name.includes("yopiq")) grouped[month].yopiq = item.count;
          else if (name.includes("platforma")) grouped[month].platforma = item.count;
          else if (name.includes("yarim")) grouped[month].yarim = item.count;
          else if (name.includes("sisterna")) grouped[month].sisterna = item.count;
          else if (name.includes("boshqa")) grouped[month].boshqa = item.count;
        });

        setWagonTypeMonthlyData(Object.values(grouped));
      })
      .catch((err) => console.error("Error fetching wagon data:", err));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={wagonTypeMonthlyData}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="yopiq" stroke="#2d6a4f" strokeWidth={2} name="Yopiq vagonlar" />
        <Line type="monotone" dataKey="platforma" stroke="#1e3c72" strokeWidth={2} name="Platforma" />
        <Line type="monotone" dataKey="yarim" stroke="#8e0e00" strokeWidth={2} name="Yarim ochiq" />
        <Line type="monotone" dataKey="sisterna" stroke="#4b0082" strokeWidth={2} name="Sisterna" />
        <Line type="monotone" dataKey="boshqa" stroke="#ff9900" strokeWidth={2} name="Boshqa turdagi" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const wagonGradients = [
    {id: "gradGreen", start: "#43cea2", end: "#185a9d"},
    {id: "gradBlue", start: "#36d1dc", end: "#5b86e5"},
    {id: "gradOrange", start: "#f7971e", end: "#ffd200"},
    {id: "gradPurple", start: "#8e2de2", end: "#4a00e0"},
    {id: "gradRed", start: "#cb2d3e", end: "#ef473a"}
];

function ChorakPieChart({data}) {

    return (
        <ResponsiveContainer width="100%" height={350}>
           <PieChart>
    {/* Gradient definitions */}
    <defs>
        {wagonGradients.map((grad) => (
            <linearGradient
                key={grad.id}
                id={grad.id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
            >
                <stop offset="0%" stopColor={grad.start} />
                <stop offset="100%" stopColor={grad.end} />
            </linearGradient>
        ))}
    </defs>

    <Pie
        data={data}
        dataKey="count"
        nameKey="type"
        cx="50%"
        cy="50%"
        outerRadius={110}
        label={({ x, y, value }) => (
            <text
                x={x}
                y={y}
                fill="#000"
                fontSize="14px"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
            >
                {value}
            </text>
        )}
    >
        {data.map((_, index) => (
            <Cell
                key={`cell-${index}`}
                fill={`url(#${
                    wagonGradients[index % wagonGradients.length].id
                })`}
            />
        ))}
    </Pie>

    <Tooltip />
    <Legend />
</PieChart>

        </ResponsiveContainer>
    );
}

function ChorakChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <defs>
          {wagonGradients.map((grad) => (
            <linearGradient
              key={grad.id}
              id={grad.id}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={grad.start} />
              <stop offset="100%" stopColor={grad.end} />
            </linearGradient>
          ))}
        </defs>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={40} // Makes it a donut chart for better visibility
          label={({ name, value }) => `${name}: ${value}`} // Show name and value, not percentage
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`url(#${wagonGradients[index % wagonGradients.length].id})`}
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => [`${value} ta`, 'Soni']}
          labelFormatter={(name) => `${name}`}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}


const RouteNames = {
    HOME: "/",
    STATISTIKA: "/statistics",
    CURRENT_REPAIR: "/current-repair",
    VU_31: "/statistics/vu-31",
    VU_10: "/statistics/vu-10",
    CREATE: (id) => id + "/create",
    VU_36: "/statistics/vu-36",
    FRAZA: "/statistics/fraza",
    VU_36_CURRENT: "/current-repair/vu-36",
    VU_31_CURRENT: "/current-repair/vu-31",
    VU_31_COLLECTOR: "/collector-vu-23",
    SIGNATURE: "/signatures-list",
    REPORT: "/report",
    STATISTIKAARCHIVE: "/statistics/archive",
    ASSEMBLY: "/assembly-unit",
    AUTO_BRAKES: "/auto-brakes",
    VU_22: "/auto-brakes/vu-22",
    VU_47: "/auto-brakes/vu-47",
    REGISTER_AUTO: "/auto-brakes/register-auto",
    REGISTER_REGULAR: "/auto-brakes/register-regular",
    REGISTER_RUKVAS: "/auto-brakes/register-rukvas",
    REGISTER_22: "/auto-brakes/vu-22",
    REGISTER_BRAKES: "/auto-brakes/register-brake-silindir",
    REGISTER_RAZOBSHITEL: "/auto-brakes/register-rozobshitel",
    REGISTER_EXITENTRY: "/auto-brakes/entry-exit-control",
    AUTOMOBILE_UNIT: "/automobile-unit",
    EQUIPMENT_UNIT: "/equipment-unit",
    DEFECTOSCOPES: "/defectoscopes",
    CARRIAGE_UNIT: "/carriage-unit",
    CARRIAGE_UNIT_FRAZA: "/carriage-unit/fraza",
    VU_22_Arava: "/carriage-unit/vu-22",
    CARRIAGE_UNIT_DEED: "/carriage-unit/entry-exit-control",
    VU_32: "/carriage-unit/vu-32",
    PRO_UNIT: "/pto-unit",
    LOGIN: "/login",
    WHEEL_PAIRS: "/wheel-pairs",
    CARRIAGE: "/defectoscopes/carriage",
    WHEEL: "/defectoscopes/wheel",
    NOT_FOUND: "*",
};


const sectionTitles = {
    monthlyProgress: "Oylik ta'mirlash jarayoni",
    wagonTypes: "Vagon turlari bo'yicha taqsimot",
    repairHistory: "So'nggi ta'mirlashlar"
};

const chorakColors = ["green", "blue", "red", "purple"];

const chorakIconGradients = [
    "linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)", // darker green
    "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", // darker blue
    "linear-gradient(135deg, #8e0e00 0%, #b31217 100%)", // darker red
    "linear-gradient(135deg, #4b0082 0%, #6a0dad 100%)"  // darker purple
];


export const HomePage = () => {
    const [counts, setCounts] = useState({});
    const [loading, setLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoverChart, setHoverChart] = useState(false);
    const [selectedDiagram, setSelectedDiagram] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isBlankModalOpen, setBlankModalOpen] = useState(false);
    const [isJournalModalOpen, setJournalModalOpen] = useState(false);
    const { isOpen: isUserModalOpen, onOpen, onClose } = useDisclosure();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    // Function to open modal
    const openModal = () => {
      setIsOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
      setIsOpen(false);
    };

    const openBlankModal = () => {
          setBlankModalOpen(true);
        };

    // Function to close modal
    const closeBlankModal = () => {
      setBlankModalOpen(false);
    };

    const openJournalModal = () => {
          setJournalModalOpen(true);
        };

    // Function to close modal
    const closeJournalModal = () => {
      setJournalModalOpen(false);
    };

    useEffect(() => {
      const fetchUsers = async () => {
        setLoading(true);

      const { response } = await new UserApi().getUsers();

        if (response && Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          setUsers([]);
        }

            setLoading(false);
          };

          fetchUsers();
        }, []);


      const handleOpenUsers = () => {
          onOpen();
        };





// Fixed data with 12 months
const groupedGoalsInventar = [
  {
    title: "I-chorak",
    months: [
      { month: "Yanvar", target: 60, completed: 45, current: false },
      { month: "Fevral", target: 60, completed: 40, current: false },
      { month: "Mart", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "II-chorak",
    months: [
      { month: "Aprel", target: 100, completed: 0, current: false },
      { month: "May", target: 100, completed: 0, current: false },
      { month: "Iyun", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "III-chorak",
    months: [
      { month: "Iyul", target: 100, completed: 0, current: false },
      { month: "Avgust", target: 100, completed: 0, current: false },
      { month: "Sentyabr", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "IV-chorak",
    months: [
      { month: "Oktyabr", target: 100, completed: 0, current: false },
      { month: "Noyabr", target: 100, completed: 0, current: false },
      { month: "Dekabr", target: 100, completed: 0, current: true },
    ]
  }
];

const groupedGoalsXususiy = [
  {
    title: "I-chorak",
    months: [
      { month: "Yanvar", target: 100, completed: 74, current: false },
      { month: "Fevral", target: 100, completed: 22, current: false },
      { month: "Mart", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "II-chorak",
    months: [
      { month: "Aprel", target: 100, completed: 0, current: false },
      { month: "May", target: 100, completed: 0, current: false },
      { month: "Iyun", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "III-chorak",
    months: [
      { month: "Iyul", target: 100, completed: 0, current: false },
      { month: "Avgust", target: 100, completed: 0, current: false },
      { month: "Sentyabr", target: 100, completed: 0, current: false },
    ]
  },
  {
    title: "IV-chorak",
    months: [
      { month: "Oktyabr", target: 100, completed: 0, current: false },
      { month: "Noyabr", target: 100, completed: 0, current: false },
      { month: "Dekabr", target: 100, completed: 0, current: true },
    ]
  }
];



  useEffect(() => {
    privateInstance
      .get("dashboard-counts/") // or "/api/dashboard-counts/" if your baseURL isn’t set
      .then((res) => {
        setCounts(res.data);
      })
      .catch((err) => {
        console.error("Error loading counts:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

const [chorakWagonData, setChorakWagonData] = useState([]);

useEffect(() => {
  privateInstance
    .get("quarter_carriage_type_statistic/")
    .then((res) => {
      const rawData = res.data;

      const quartersMap = {};

      rawData.forEach((item) => {
        const quarterName = item.quarter.name;
        const category = item.category; // 1 or 2

        if (!quartersMap[quarterName]) {
          quartersMap[quarterName] = {
            category1: [],
            category2: [],
          };
        }

        const wagonData = {
          type: item.name,
          count: item.count,
        };

        if (category === 1) {
          quartersMap[quarterName].category1.push(wagonData);
        } else if (category === 2) {
          quartersMap[quarterName].category2.push(wagonData);
        }
      });

      const allQuarters = [
        "Birinchi chorak",
        "Ikkinchi chorak",
        "Uchinchi chorak",
        "To‘rtinchi chorak",
      ];

      const finalData = allQuarters.map((q) => {
        const quarterData = quartersMap[q] || {
          category1: [],
          category2: [],
        };

        // 🔥 Combine both categories for MAIN pie
        const combinedMap = {};

        [...quarterData.category1, ...quarterData.category2].forEach(
          (item) => {
            if (!combinedMap[item.type]) {
              combinedMap[item.type] = 0;
            }
            combinedMap[item.type] += item.count;
          }
        );

        const combinedData = Object.entries(combinedMap).map(
          ([type, count]) => ({
            type,
            count,
          })
        );

        const totalCount = combinedData.reduce(
          (sum, item) => sum + item.count,
          0
        );

        return {
          title: `${q}: ${totalCount} ta vagonlar`,
          combinedData,
          category1: quarterData.category1,
          category2: quarterData.category2,
        };
      });

      setChorakWagonData(finalData);
    })
    .catch((err) => console.error("Failed to load data:", err));
}, []);


const [groupedGoals, setGroupedGoals] = useState([]);
 useEffect(() => {
  privateInstance
    .get("monthly_plan/")
    .then((response) => {
      const data = response.data; // API JSON data


      // Group months by quarter
      const grouped = {};
      data.forEach((item) => {
        const quarterName = item.quarter.name;
        if (!grouped[quarterName]) grouped[quarterName] = [];
        grouped[quarterName].push({
          month: item.month,
          target: item.plan,
          completed: item.completed,
          current: false, // add logic for current month if needed
        });
      });

      // Convert grouped object to array for mapping
      const groupedArray = Object.keys(grouped)
  .sort((a, b) => {
    const orderA = data.find((r) => r.quarter.name === a).quarter.order;
    const orderB = data.find((r) => r.quarter.name === b).quarter.order;
    return orderA - orderB;
  })
  .map((qName) => ({
    title: qName,
    months: grouped[qName].reverse(), // ⬅️ reverses months in each quarter
  }));



      // If using React state
      setGroupedGoals(groupedArray);
    })
    .catch((err) => {
      console.error("Failed to fetch monthly goals:", err);
    });
}, []);


    const journalData = [

        {
            title: "Aravalar-Fraza",
            icon: faWrench,
            count: counts.phraseCount || 0,
            route: RouteNames.CARRIAGE_UNIT_FRAZA,
            colorScheme: "blue",
            description: "Aravalar bo‘linmasi Frazasi",

        },
        {
            title: "VU32",
            icon: faWrench,
            count: counts.vu32Count || 0,
            route: RouteNames.VU_32,
            colorScheme: "blue",
            description: "Aravalar bo‘linmasi jurnali",

        },
        {
            title: "Kirish-chiqish dalolatnomasi",
            icon: faWrench,
            count: counts.aravaActCount || 0,
            route: RouteNames.CARRIAGE_UNIT_DEED,
            colorScheme: "blue",
            description: "Aravalar bo‘linmasi jurnali",

        },
        {
            title: "Kirish-chiqish dalolatnomasi",
            icon: faWrench,
            count: counts.avtoActCount,
            route: RouteNames.AUTOMOBILE_UNIT,
            colorScheme: "blue",
            description: "Avtobirikma bo‘linmasi jurnali",

        },
        {
            title: "VU47",
            icon: faWrench,
            count: counts.vu47Count,
            route: RouteNames.VU_47,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "Avtorejimlarni ro‘yxatga olish",
            icon: faWrench,
            count: counts.autorejimCount,
            route: RouteNames.REGISTER_AUTO,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "Razobshitelniy va so'ngi jumraklarni ro‘yxatga olish",
            icon: faWrench,
            count: counts.razobkranCount,
            route: RouteNames.REGISTER_RAZOBSHITEL,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "Rezervuar, tormoz silindr va ishchi kameralarni ro‘yxatga olish",
            icon: faWrench,
            count: counts.rezervuarCount,
            route: RouteNames.REGISTER_BRAKES,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "Avtoregulyatorlarni ro‘yxatga olish",
            icon: faWrench,
            count: counts.regulyatorCount,
            route: RouteNames.REGISTER_REGULAR,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "Rukavalarni ro‘yxatga olish jurnali",
            icon: faWrench,
            count: counts.rukvaCount,
            route: RouteNames.REGISTER_RUKVAS,
            colorScheme: "blue",
            description: "Avtotormozlar bo‘linmasi jurnali",

        },
        {
            title: "G‘ildirak juftliklari-Fraza",
            icon: faWrench,
            count: counts.phrase_wheelCount,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU50",
            icon: faWrench,
            count: counts.vu50Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU53",
            icon: faWrench,
            count: counts.vu53Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU54",
            icon: faWrench,
            count: counts.vu54Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU90",
            icon: faWrench,
            count: counts.vu90Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU91",
            icon: faWrench,
            count: counts.vu91Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        }, {
            title: "VU92",
            icon: faWrench,
            count: counts.vu92Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        }, {
            title: "VU93",
            icon: faWrench,
            count: counts.vu93Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi jurnali",

        },
        {
            title: "VU68",
            icon: faWrench,
            count: counts.vu68Count,
            route: RouteNames.ASSEMBLY,
            colorScheme: "blue",
            description: "Yig'uv bo'limi jurnali",

        },
        {
            title: "Defektoskoplar-Auto Birikma",
            icon: faWrench,
            count: counts.defestoskopAvtobirikmaCount,
            route: RouteNames.DEFECTOSCOPES,
            colorScheme: "blue",
            description: "Defektoskoplar bo‘limi jurnali",

        }, {
            title: "Defektoskoplar-Aravalar",
            icon: faWrench,
            count: counts.defestoskopAravalarCount,
            route: RouteNames.CARRIAGE,
            colorScheme: "blue",
            description: "Defektoskoplar bo‘limi jurnali",

        }, {
            title: "Defektoskoplar-G'ildirak",
            icon: faWrench,
            count: counts.defestoskopWheelCount,
            route: RouteNames.WHEEL,
            colorScheme: "blue",
            description: "Defektoskoplar bo‘limi jurnali",

        },
    ]
    const BlankData = [
        {
            title: "VU23",
            icon: faWrench,
            count: counts.vu23Count,
            route: RouteNames.PRO_UNIT,
            colorScheme: "blue",
            description: "PTO Operatori",

        }, {
            title: "VU22",
            icon: faWrench,
            count: counts.vu22Count,
            route: RouteNames.ASSEMBLY,
            colorScheme: "blue",
            description: "Yig'uv bo'limi blankasi",

        }, {
            title: "VU36",
            icon: faWrench,
            count: counts.vu36Count,
            route: RouteNames.VU_36,
            colorScheme: "blue",
            description: "Statistika va hisobga olish bo‘limi blankasi",

        },
        {
            title: "Kirish-chiqish dalolatnomasi",
            icon: faWrench,
            count: counts.collectAct,
            route: RouteNames.ASSEMBLY,
            colorScheme: "blue",
            description: "Yig‘uv bo‘linmasi blankasi",

        },
        {
            title: "VU10",
            icon: faWrench,
            count: counts.vu10Count,
            route: RouteNames.VU_10,
            colorScheme: "blue",
            description: "Statistika va hisobga olish bo‘limi blankasi",

        }, {
            title: "Fraza",
            icon: faWrench,
            count: counts.PhraseCount,
            route: RouteNames.FRAZA,
            colorScheme: "blue",
            description: "Statistika va hisobga olish bo‘limi blankasi",

        }, {
            title: "VU51",
            icon: faWrench,
            count: counts.vu51Count,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi blankasi",

        }, {
            title: "Kirish-chiqish dalolatnomasi",
            icon: faWrench,
            count: counts.kolesoActCount,
            route: RouteNames.WHEEL_PAIRS,
            colorScheme: "blue",
            description: "G‘ildirak juftliklari bo‘linmasi blankasi",

        }
    ]

    const cardBg = useColorModeValue("white", "gray.700");
    const headingColor = useColorModeValue("gray.800", "white");
    const textColor = useColorModeValue("gray.600", "gray.300");
    const progressBg = useColorModeValue("gray.100", "gray.600");
    const borderColor = useColorModeValue("gray.200", "gray.600");


    const [data, setData] = useState(null);

    useEffect(() => {
        privateInstance
      .get("enterprise_wagon_info/") // change to your actual endpoint
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setData(response.data[0]); // we only need the first item
        }
      })
      .catch((err) => console.error("API error:", err));
    }, []);

    if (!data) return null;

    const topInfoData = [
    {
      title: "Temiryo'l Cargo AJ ga tegishli nosoz yuk vagonlari soni",
      numberCnt: data.temiryol_cargo_pump_wagons,
      icon: faTrain,
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Xususiy tashkilotlarga tegishli nosoz yuk vagonlari soni",
      numberCnt: data.private_org_pump_wagons,
      icon: faClipboardCheck,
      bgColor: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Inventar parkka tegishli nosoz yuk vagonlari soni",
      numberCnt: data.inventory_park_pump_wagons,
      icon: faWrench,
      bgColor: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
    },
    ];



    return (
        <Container maxW="container.xxl" py={8} px={4}>
            {/* Header Section */}
            <Box textAlign="center" mb={12}>
                <Heading as="h1" size="xl" fontWeight="extrabold" mb={2}>
                    Vagonlar Monitoring Tizimi
                </Heading>
                <Text fontSize="lg" color={textColor}>
                    Qarshi vagon deposi statistik ma'lumotlari
                </Text>
            </Box>

            {/* Stats Cards */}
            <Heading as="h2" size="lg" mb={6} color={headingColor}>
        {data.year}-yil {data.month} holatida korxona vagonlari ma’lumotlari
            </Heading>
            <Grid
                templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}
                gap={6}
                mb={12}
            >
                {topInfoData.map((item, idx) => (
                    <GridItem key={idx}>
                        <Card
                            bg={cardBg}
                            bgGradient={item.bgColor} // Apply gradient color to the entire card

                            boxShadow="lg"
                            borderRadius="xl"
                            overflow="hidden"
                            transition="all 0.3s"
                            _hover={{transform: "translateY(-4px)", shadow: "xl"}}
                            height="100%"
                        >
<CardBody
  p={6}
  onClick={() => {
    if (item.numberCnt > 0) {
      setIsOpen(true);
    }
  }}
  cursor={item.numberCnt > 0 ? "pointer" : "not-allowed"}
>
                                <Flex direction="column" height="100%">
                                    <Flex justify="space-between" align="center" mb={4}>
                                        <Box
                                            w={12}
                                            h={12}
                                            borderRadius="lg"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            bgGradient={item.bgColor}
                                            color="white"
                                        >
                                            <FontAwesomeIcon icon={item.icon} size="lg"/>
                                        </Box>
                                        <Stat ml={4}>
                                            <StatNumber fontSize="2xl" fontWeight="bold" color={"white"}>

                                                <CountUp end={item.numberCnt} duration={1.5}/> ta
                                            </StatNumber>
                                        </Stat>
                                    </Flex>
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color="white" // White text to contrast with gradient
                                        mt="auto"
                                        textShadow="1px 1px 4px rgba(0, 0, 0, 0.7)" // Add text shadow for better readability
                                    >
                                        {item.title}
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>


<Modal isOpen={isOpen} onClose={closeModal} size="6xl" isCentered>
  <ModalOverlay backdropFilter="blur(4px)" bg="blackAlpha.600" />

  <ModalContent borderRadius="2xl" maxH="90vh" overflow="auto">
    <ModalHeader
      fontWeight="bold"
      fontSize="2xl"
      bg="blue.50"
      borderTopRadius="2xl"
      py={6}
    >
      Statistika diagrammalari
    </ModalHeader>

    <ModalCloseButton size="lg" top={4} right={4} />

    <ModalBody py={8}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>

        {/* 1 - Vagon turlari bo‘yicha */}
        <Card
          p={6}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor="blue.100"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        >
          <Flex align="center" mb={5}>
            <Box
              w={10}
              h={10}
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="blue.500"
              color="white"
              mr={3}
            >
              <FontAwesomeIcon icon={faTrain} size="lg" />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Vagon turlari bo'yicha taqsimot
            </Text>
          </Flex>

          <ChorakChart
            data={[
              { name: "Sisterna", value: 5 },
              { name: "Yarim", value: 15 },
              { name: "Yopiq", value: 28 },
              { name: "Platforma", value: 2 },
              { name: "Boshqa", value: 12 },
            ]}
          />
        </Card>

        {/* 2 - Ta'mir turlari bo'yicha */}
        <Card
          p={6}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor="green.100"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        >
          <Flex align="center" mb={5}>
            <Box
              w={10}
              h={10}
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="green.500"
              color="white"
              mr={3}
            >
              <FontAwesomeIcon icon={faTools} size="lg" />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Ta'mir turlari bo'yicha diagramma
            </Text>
          </Flex>

          <ChorakChart
            data={[
              { name: "Kapital", value: 4 },
              { name: "Uzaytirilgan kapital ta'mir", value: 30 },
              { name: "Depoli ta'mir", value: 28 },
            ]}
          />
        </Card>

        {/* 3 - Tegishli korxonalar bo'yicha */}
        <Card
          p={6}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor="orange.100"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        >
          <Flex align="center" mb={5}>
            <Box
              w={10}
              h={10}
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="orange.500"
              color="white"
              mr={3}
            >
              <FontAwesomeIcon icon={faClipboardCheck} size="lg" />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Tegishli korxonalar bo'yicha diagramma
            </Text>
          </Flex>

          <ChorakChart
            data={[
              { name: "Qarshi", value: 28 },
              { name: "Toshkent", value: 12 },
              { name: "Buxoro", value: 15 },
              { name: "Qo'qon", value: 5 },
            ]}
          />
        </Card>

        {/* 4 - Hisobdan chiqarilishi belgilangan vagonlar */}
        <Card
          p={6}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor="red.100"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        >
          <Flex align="center" mb={5}>
            <Box
              w={10}
              h={10}
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="red.500"
              color="white"
              mr={3}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              Hisobdan chiqarilishi belgilangan vagonlar
            </Text>
          </Flex>

          <ChorakChart
            data={[
              { name: "Yopiq vagon", value: 3 },
              { name: "Yarim ochiq vagon", value: 7 },
            ]}
          />
        </Card>

      </Grid>
    </ModalBody>

    <ModalFooter
      bg="gray.50"
      borderBottomRadius="2xl"
      py={6}
    >
      <Button
        onClick={closeModal}
        colorScheme="blue"
        size="lg"
        px={10}
        fontWeight="bold"
      >
        Yopish
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

<Box mb={12}>
  <Heading as="h2" size="lg" mb={8} color={textColor}>
    {sectionTitles.monthlyProgress}
  </Heading>

  {/* Container for both sections */}
  <Box>
    {/* Inventar yuk vagonlar section */}
    <Card
      bg={cardBg}
      boxShadow="2xl"
      borderRadius="2xl"
      p={8}
      mb={10}
      borderWidth="1px"
      borderColor="blue.200"
    >
      <Flex align="center" mb={6} p={4} bg="blue.50" borderRadius="lg">
        <Box
          w={12}
          h={12}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="blue.600"
          color="white"
          mr={4}
        >
          <FontAwesomeIcon icon={faTrain} size="lg" />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="blue.700">
            Temiryo'l Kargo AJ yuk vagonlar
          </Text>
          <Text fontSize="sm" color="gray.600">
            Yillik ta'mirlash rejasi
          </Text>
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {groupedGoalsInventar.map((chorak, idx) => (
          <Box
            key={idx}
            p={5}
            borderWidth="1px"
            borderRadius="xl"
            borderColor="blue.100"
            bg="white"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
          >
            <Flex align="center" mb={4}>
              <Box
                w={10}
                h={10}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient={chorakIconGradients[idx % chorakIconGradients.length]}
                color="white"
                mr={3}
              >
                <Text fontWeight="bold">{idx + 1}</Text>
              </Box>
              <Text fontSize="lg" fontWeight="semibold">{chorak.title}</Text>
            </Flex>

            <Stack spacing={3}>
              {chorak.months.map(month => (
                <Box key={month.month}>
                  <Flex justify="space-between" mb={1}>
                    <Text fontWeight="medium" fontSize="sm">{month.month}</Text>
                    {month.current && <Badge colorScheme="blue" size="sm">Joriy</Badge>}
                  </Flex>
                  <Progress
                    value={(month.completed / month.target) * 100}
                    size="sm"
                    colorScheme={chorakColors[idx % chorakColors.length]}
                    bg={progressBg}
                    borderRadius="full"
                    mb={1}
                  />
                  <Flex justify="space-between" fontSize="xs">
                    <Text color={textColor}>
                      {month.completed} / {month.target}
                    </Text>
                    <Text fontWeight="bold">
                      {Math.round((month.completed / month.target) * 100)}%
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Card>

    {/* Xususiy vagonlar section */}
    <Card
      bg={cardBg}
      boxShadow="2xl"
      borderRadius="2xl"
      p={8}
      borderWidth="1px"
      borderColor="green.200"
    >
      <Flex align="center" mb={6} p={4} bg="green.50" borderRadius="lg">
        <Box
          w={12}
          h={12}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="green.600"
          color="white"
          mr={4}
        >
          <FontAwesomeIcon icon={faTrain} size="lg" />
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="green.700">
            Xususiy vagonlar
          </Text>
          <Text fontSize="sm" color="gray.600">
            Yillik ta'mirlash rejasi
          </Text>
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {groupedGoalsXususiy.map((chorak, idx) => (
          <Box
            key={idx}
            p={5}
            borderWidth="1px"
            borderRadius="xl"
            borderColor="green.100"
            bg="white"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
          >
            <Flex align="center" mb={4}>
              <Box
                w={10}
                h={10}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient={chorakIconGradients[idx % chorakIconGradients.length]}
                color="white"
                mr={3}
              >
                <Text fontWeight="bold">{idx + 1}</Text>
              </Box>
              <Text fontSize="lg" fontWeight="semibold">{chorak.title}</Text>
            </Flex>

            <Stack spacing={3}>
              {chorak.months.map(month => (
                <Box key={month.month}>
                  <Flex justify="space-between" mb={1}>
                    <Text fontWeight="medium" fontSize="sm">{month.month}</Text>
                    {month.current && <Badge colorScheme="green" size="sm">Joriy</Badge>}
                  </Flex>
                  <Progress
                    value={(month.completed / month.target) * 100}
                    size="sm"
                    colorScheme={chorakColors[idx % chorakColors.length]}
                    bg={progressBg}
                    borderRadius="full"
                    mb={1}
                  />
                  <Flex justify="space-between" fontSize="xs">
                    <Text color={textColor}>
                      {month.completed} / {month.target}
                    </Text>
                    <Text fontWeight="bold">
                      {Math.round((month.completed / month.target) * 100)}%
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Card>
  </Box>
</Box>


{/* SMALL CHART */}

<Box mb={12}>
  <Card
    bg={cardBg}
    p={6}
    borderRadius="xl"
    boxShadow="lg"
    transition="all 0.6s cubic-bezier(0.19, 1, 0.22, 1)"
onClick={() => setHoverChart(true)}
    _hover={{ transform: "scale(1.08)", boxShadow: "xl" }}
  >
    <WagonTypeLineChart />
  </Card>
</Box>

{/* MODAL OVERLAY WRAPPER */}
{hoverChart && (
  <Box
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    bg="rgba(0,0,0,0.45)"
    backdropFilter="blur(4px)"
    zIndex={2000}
    display="flex"
    justifyContent="center"
    alignItems="center"
    onClick={() => setHoverChart(false)}          // CLOSE ANYWHERE OUTSIDE
  >
{/*     STOP PROPAGATION SO MODAL DOESN’T CLOSE WHEN CLICKED */}
    <Card
      onClick={(e) => e.stopPropagation()}        // << IMPORTANT FIX
      width="95vw"
      maxWidth="1600px"
      maxHeight="92vh"
      overflow="auto"
      p={10}
      borderRadius="2xl"
      boxShadow="4xl"
      bg={cardBg}
      position="relative"
    >
      <IconButton
        icon={<FontAwesomeIcon icon={faTimes} />}
        position="absolute"
        top="14px"
        right="14px"
        onClick={() => setHoverChart(false)}
        size="sm"
        borderRadius="full"
      />

      <WagonTypeLineChart />
    </Card>
  </Box>
)}


            <Box mb={12}>
          <Heading as="h2" size="lg" mb={6} color={headingColor}>
            {sectionTitles.wagonTypes}
          </Heading>

  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
    {chorakWagonData.map((chorak, idx) => (
      <Card
        key={idx}
        bg={cardBg}
        boxShadow="lg"
        borderRadius="xl"
        p={6}
        height="100%"
        transition="all 0.6s cubic-bezier(0.19, 1, 0.22, 1)"
        onClick={() => setHoveredIndex(idx)}
        _hover={{
          transform: "scale(1.08)",
          boxShadow: "xl",
        }}
      >
        <Flex align="center" mb={6}>
          <Box
            w={10}
            h={10}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient={chorakIconGradients[idx % chorakIconGradients.length]}
            color="white"
            mr={3}
          >
            <FontAwesomeIcon icon={faChartPie} size="lg" />
          </Box>
          <Text fontSize="lg" fontWeight="semibold">
            {chorak.title}
          </Text>
        </Flex>

        <ChorakPieChart data={chorak.combinedData} />
      </Card>
    ))}
  </Grid>

  {/* Background Overlay */}
  <Box
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    bg={hoveredIndex !== null ? "rgba(0, 0, 0, 0.45)" : "transparent"}
    backdropFilter={hoveredIndex !== null ? "blur(4px)" : "none"}
    opacity={hoveredIndex !== null ? 1 : 0}
    pointerEvents={hoveredIndex !== null ? "auto" : "none"}
    transition="all 0.8s ease"
    zIndex={1500}
  onClick={() => setHoveredIndex(null)}  // CHANGED HERE
  />

  <Card
    position="fixed"
    top="50%"
    left="50%"
    transform={
      hoveredIndex !== null
        ? "translate(-50%, -50%) scale(1.25)"
        : "translate(-50%, -50%) scale(0.85)"
    }
    opacity={hoveredIndex !== null ? 1 : 0}
    pointerEvents={hoveredIndex !== null ? "auto" : "none"}
    transition="all 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
    width="90vw"
    maxWidth="1100px"
    minHeight="58vh"
    maxHeight="78vh"
    overflow="auto"
    zIndex={2001}
    p={8}
    borderRadius="2xl"
    boxShadow="4xl"
    bg={cardBg}
  >
    {hoveredIndex !== null && (
      <>
        <Flex align="center" mb={6}>
          <Box
            w={12}
            h={12}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgGradient={
              chorakIconGradients[hoveredIndex % chorakIconGradients.length]
            }
            color="white"
            mr={3}
          >
            <FontAwesomeIcon icon={faChartPie} size="lg" />
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            {chorakWagonData[hoveredIndex].title}
          </Text>
        </Flex>

        <Grid templateColumns="1fr 1fr" gap={6}>
  <Box>
    <Text mb={4} fontWeight="bold">
      Xususiy vagonlar
    </Text>
    <ChorakPieChart
      data={chorakWagonData[hoveredIndex].category1}
    />
  </Box>

  <Box>
    <Text mb={4} fontWeight="bold">
      Temiryo'l Cargo AJ
    </Text>
    <ChorakPieChart
      data={chorakWagonData[hoveredIndex].category2}
    />
  </Box>
</Grid>


      </>
    )}

       <IconButton
        icon={<FontAwesomeIcon icon={faTimes} />}
        position="absolute"
        top="14px"
        right="14px"
  onClick={() => setHoveredIndex(null)}  // notice use hoveredIndex state here
        size="sm"
        borderRadius="full"
      />
  </Card>

</Box>

{/*  additional_info*/}

      {/* Additional Info Section */}


<Modal
  isOpen={isJournalModalOpen}
  onClose={closeJournalModal}
  size="6xl"
  isCentered
  scrollBehavior="inside"
>
  <ModalOverlay backdropFilter="blur(6px)" />

  <ModalContent borderRadius="2xl">
    <ModalHeader display="flex" alignItems="center">
      <Box
        w={10}
        h={10}
        borderRadius="5px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-r, #6a11cb, #2575fc)"
        mr={3}
      >
        <FontAwesomeIcon icon={faNewspaper} color="white" />
      </Box>
      Jurnallar
    </ModalHeader>

    <ModalCloseButton />

    <ModalBody>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
      >
        {journalData.map((journal, index) => (
          <Card
            key={index}
            bg={cardBg}
            boxShadow="md"
            borderRadius="5px"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              closeJournalModal();          // ✅ close modal
              navigate(journal.route);      // ✅ then navigate
            }}
          >
            <CardBody>
              <Flex direction="column" height="100%">
                <Flex align="center" mb={4}>
                  <Box
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={`${journal.colorScheme}.100`}
                    color={`${journal.colorScheme}.600`}
                    mr={4}
                  >
                    <FontAwesomeIcon icon={journal.icon} size="lg" />
                  </Box>

                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      {journal.title}
                    </Heading>
                    <Badge
                      colorScheme={journal.colorScheme}
                      variant="subtle"
                      fontSize="0.8em"
                    >
                      {journal.count} ta ma'lumot
                    </Badge>
                  </Box>
                </Flex>

                <Text color={textColor} mb={4} flexGrow={1}>
                  {journal.description}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </ModalBody>
  </ModalContent>
</Modal>


{/*   Blanks */}
<Modal
  isOpen={isBlankModalOpen}
  onClose={closeBlankModal}
  size="6xl"
  isCentered
  scrollBehavior="inside"
>
  <ModalOverlay backdropFilter="blur(6px)" />
  <ModalContent borderRadius="2xl">
    <ModalHeader display="flex" alignItems="center">
      <Box
        w={10}
        h={10}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-r, #ff7e5f, #feb47b)"
        mr={3}
      >
        <FontAwesomeIcon icon={faClipboard} color="white" />
      </Box>
      Blankalar
    </ModalHeader>

    <ModalCloseButton />

    <ModalBody>
      {/* 🔽 YOUR EXISTING CODE (UNCHANGED) */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
      >
        {BlankData.map((journal, index) => (
          <Card
            key={index}
            as={Link}
            to={journal.route}
            bg={cardBg}
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            transition="all 0.2s"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
              textDecoration: "none",
            }}
          >
            <CardBody>
              <Flex direction="column" height="100%">
                <Flex align="center" mb={4}>
                  <Box
                    w={12}
                    h={12}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#21BD86"
                    color="white"
                    mr={4}
                  >
                    <FontAwesomeIcon icon={journal.icon} size="lg" />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      {journal.title}
                    </Heading>
                    <Badge
                      colorScheme="green"
                      variant="subtle"
                      fontSize="0.8em"
                    >
                      {journal.count} ta ma'lumot
                    </Badge>
                  </Box>
                </Flex>

                <Text color={textColor} mb={4} flexGrow={1}>
                  {journal.description}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </ModalBody>
  </ModalContent>
</Modal>



 {/* Statistics Section */}
            <Box mb={8}>
                <Heading as="h2" size="lg" mb={6} color={headingColor}>
                    Umumiy statistika
                </Heading>
                <Divider mb={6}/>
                <Grid templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}} gap={6}>
                    <Card
                  bgGradient="linear(to-r, #ff7e5f, #feb47b)"
                  boxShadow="md"
                  borderRadius="lg"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "xl",
                  }}
                  onClick={openJournalModal}
                >

                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontWeight="bold">
                        Jami jurnallar soni
                      </StatLabel>
                      <StatNumber color="white" fontWeight="bold">
                        <CountUp end={journalData.length} duration={1} /> ta
                      </StatNumber>
                      <StatHelpText fontWeight="bold" color="white">
                        Barcha mavjud blankalar
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>


                    <Card
                              bgGradient="linear(to-r, #43cea2, #185a9d)"

                              boxShadow="md"
                              borderRadius="lg"
                              cursor="pointer"
                              transition="all 0.3s ease"
                              _hover={{
                                transform: "translateY(-8px)",
                                boxShadow: "xl",
                              }}
                              onClick={openBlankModal}
                            >
                              <CardBody>
                                <Stat>
                                  <StatLabel fontWeight="bold" color="white">
                                    Jami blankalar soni
                                  </StatLabel>
                                  <StatNumber fontWeight="bold" color="white">
                                    <CountUp end={BlankData.length} duration={1} /> ta
                                  </StatNumber>
                                  <StatHelpText fontWeight="bold" color="white">
                                    Barcha mavjud blankalar
                                  </StatHelpText>
                                </Stat>
                              </CardBody>
                            </Card>


                            <Card
                          cursor="pointer"
                          onClick={handleOpenUsers}
                          bgGradient="linear(to-r, #00c6ff, #0072ff)"
                          boxShadow="md"
                          borderRadius="lg"
                          transition="all 0.3s ease"
                          _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "xl",
                          }}
                        >
                          <CardBody>
                            <Stat>
                              <StatLabel fontWeight="bold" color="white">
                                Jami foydalanuvchilar soni
                              </StatLabel>
                              <StatNumber fontWeight="bold" color="white">
                                {Array.isArray(users) ? users.length : "—"} ta
                              </StatNumber>
                              <StatHelpText fontWeight="bold" color="white">
                                Barcha platforma foydalanuvchilar
                              </StatHelpText>
                            </Stat>
                          </CardBody>
                        </Card>


                    <Card
                        bgGradient="linear(to-r, #8A2387, #E94057, #F27121)"
                        boxShadow="md"
                        borderRadius="lg">
                    </Card>
                </Grid>
            </Box>

<Modal isOpen={isUserModalOpen} onClose={onClose} size="6xl">
  <ModalOverlay />
  <ModalContent>
    <ModalHeader> Foydalanuvchilar ro‘yxati</ModalHeader>
    <ModalCloseButton />

    <ModalBody pb={6}>
      {loading ? (
        <Flex justify="center" align="center" minH="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={5}>
          {users.map((user) => (
            <Box
              key={user.id}
              p={4}
              borderRadius="xl"
              bg="white"
              boxShadow="md"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "xl",
              }}
            >
              <Flex align="center" mb={3}>
                <Avatar
                  name={user.name || user.username}
                  size="md"
                  mr={3}
                />
                <Box>
                  <Text fontWeight="bold" noOfLines={1}>
                    {user.name || user.username}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    @{user.username}
                  </Text>
                </Box>
              </Flex>

              <Badge
                colorScheme="blue"
                variant="subtle"
                textTransform="capitalize"
              >
                {user.role_display.replace(/_/g, " ")}
              </Badge>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </ModalBody>
  </ModalContent>
</Modal>

        </Container>
    );
};