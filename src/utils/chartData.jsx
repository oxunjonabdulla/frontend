const chartData = [24, 5, 15, 4, 0];
const totalSum = chartData.reduce((acc, curr) => acc + curr, 0);

export const demoFirst = {
  series: [
    {
      name: "Каршида",
      data: [56, 5, 18, 19, 18, 35, 5, 3, 6, 67],
    },
    {
      name: "Нишонда",
      data: [21, 7, null, null, 1, 4, 2, null, null, 7],
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
const chartDataSecond = [38, 0, 17, 14, 7];
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
      data: [0, null, 19, 79, null],
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
        "Фитинг ",
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
      text: "Мукаммал таъмир, Жами " + 98 + "та",

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
      data: [1, null, 12, null],
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
        "Фитинг ",
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
      text: "Капитал таъмир, Жами " + 13 + "та",

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
      data: [2, null, 3, 55, 10],
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
        "Фитинг ",
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
      text: "Депо таъмири, Жами " + 70 + "та",

      style: {
        color: "#444",
      },
    },
  },
};
