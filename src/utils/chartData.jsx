const chartData = [29, 8, 17, 6, 5];
const totalSum = chartData.reduce((acc, curr) => acc + curr, 0);

export const demoZero = {
  series: [
    {
      name: "Каршида",
      data: [46, 6, 35, 18, 61, 166],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Крытый",
        "Платформы",
        "Полувагон",
        "Цистерна",
        "Прочие",
        "Остаток-Карши",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Мукаммал таъмир, Жами " + totalSum + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const demoFirst = {
  series: [
    {
      name: "Каршида",
      data: [43, 3, 11, 13, 6, 39, 13, 2, null, 60],
    },
    {
      name: "Нишонда",
      data: [21, null, 7, null, 1, 4, 1, null, null, 6],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Платформа",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Зерновоз",
        "Цементавоз",
        "Фитинг",
        "Хоппердзатор",
        "Реф. Вагонлар",
        "Бошқа турдаги вагонлар",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Мукаммал таъмир, Жами " + totalSum + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const chartFirst = {
  series: [
    {
      name: "Soni",
      data: chartData,
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Платформа",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошқа турдаги вагонлар",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Мукаммал таъмир, Жами " + totalSum + "та",

      style: {
        color: "#444",
      },
    },
  },
};
const chartDataSecond = [45, 0, 22, 19, 12];
const totalSumSecond = chartDataSecond.reduce((acc, curr) => acc + curr, 0);
export const chartSecond = {
  series: [
    {
      name: "Soni",
      data: chartDataSecond,
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#00E396"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        color: "green",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Платформа",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошқа турдаги вагонлар",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Депо таъмири, Жами " + totalSumSecond + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const chartThree = {
  series: [
    {
      name: "Soni",
      data: [0, 0, 49, 101, 0],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        color: "green",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Автомобиловоз ",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошка турдаги вагонлар ",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Мукаммал таъмир, Жами " + 150 + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const chartFour = {
  series: [
    {
      name: "Soni",
      data: [0, 0, 0, 14, 1],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#FEB019"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        color: "green",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Автомобиловоз ",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошка турдаги вагонлар ",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Капитал таъмир, Жами " + 15 + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const chartFive = {
  series: [
    {
      name: "Soni",
      data: [2, 0, 6, 60, 24],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#00E396"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        color: "green",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Автомобиловоз ",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошка турдаги вагонлар",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Депо таъмири, Жами " + 92 + "та",

      style: {
        color: "#444",
      },
    },
  },
};
export const chartSix = {
  series: [
    {
      name: "Soni",
      data: [16, 0, 2, 7, 0],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#FEB019"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        color: "green",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      offsetY: -20,

      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Ёпиқ вагон",
        "Автомобиловоз ",
        "Ярим очиқ вагон",
        "Цистерна ",
        "Бошка турдаги вагонлар ",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    title: {
      text: "Капитал таъмир, Жами " + 25 + "та",

      style: {
        color: "#444",
      },
    },
  },
};
