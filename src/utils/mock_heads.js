import {
  Aravalar,
  Avtobirikma,
  Avtotormoz,
  Defostoskop,
  Gildirak,
  Statistika,
  Yiguv,
  PtoOperator,
} from "../assets";
import { TableImg } from "../assets/images";

export const routersSidebar = [
  {
    isWork: false,
    label: "Statistika va hisobga olish bo‘limi",
    path: "/statistics",
    type: "drop",
    accordItems: [
      {
        label: "Bugungi ta'mir",
        path: "",
      },
      {
        label: "VU-31 Jurnali",
        path: "/vu-31",
      },
      {
        label: "VU-36 Jurnali",
        path: "/vu-36",
      },
      {
        label: "ФРАЗА",
        path: "/fraza",
      },
    ],
    icon: Statistika,
    role: "statisticuser",
  },
  {
    isWork: false,
    label: "PTO operator",
    path: "/pto-unit",
    type: "link",
    icon: PtoOperator,
    role: "ptouser",
  },
  {
    isWork: false,
    label: "Yig‘uv bo‘linmasi",
    path: "/assembly-unit",
    type: "link",
    icon: Yiguv,
    role: "collectoruser",
  },
  {
    isWork: false,
    label: "G‘ildirak juftlikalar bo‘linmasi",
    path: "/wheel-pairs",
    type: "link",
    icon: Gildirak,
    role: "wheeluser",
  },

  {
    isWork: false,
    label: "Aravalar bo‘linmasi",
    path: "/carriage-unit",
    type: "drop",
    icon: Aravalar,
    role: "cartuser",
    accordItems: [
      {
        label: "Bugungi ta'mir",
        path: "",
      },
      // {
      //   label: "VU-22",
      //   path: "/vu-22",
      // },
      {
        label: "ФРАЗА",
        path: "/fraza",
      },

      {
        label: "VU-32",
        path: "/vu-32",
      },
      {
        label: "Кириш ва чиқиш далолатномаси",
        path: "/entry-exit-control",
      },
    ],
  },
  {
    isWork: false,
    label: "Avtobirikma bo‘linmasi",
    path: "/automobile-unit",
    type: "link",
    icon: Avtobirikma,
    role: "avtoconnectoruser",
  },
  {
    isWork: false,
    label: "Avtotormozlar bo‘linmasi",
    path: "/auto-brakes",
    type: "drop",
    accordItems: [
      {
        label: "Bugungi ta'mir",
        path: "",
      },
      // {
      //   label: "VU-22",
      //   path: "/vu-22",
      // },
      {
        label: "VU-47 Jurnali",
        path: "/vu-47",
      },
      {
        label: "Avtorejimlarni ro‘yxatga olish",
        path: "/register-auto",
      },
      {
        label: "Razobshitelniy kranlarni ro‘yxatga olish jurnali",
        path: "/register-rozobshitel",
      },
      {
        label:
          "Rezervuar, tormoz silindr va ishchi kameralarni ro‘yxatga olish kitobi",
        path: "/register-brake-silindir",
      },
      {
        label: "Avtoregulyatorlarni ro‘yxatga olish",
        path: "/register-regular",
      },
      {
        label: "Rukavalarni ro‘yxatga olish jurnali",
        path: "/register-rukvas",
      },
      {
        label: "Чиқиш",
        path: "/entry-exit-control",
      },
    ],
    icon: Avtotormoz,

    role: "avtotormozuser",
  },
  {
    isWork: false,
    label: "Defektoskoplar",
    path: "/defectoscopes",
    type: "link",
    icon: Defostoskop,
    role: "defestoskopuser",
  },
  // {
  //   isWork: true,
  //   label: "Jixozlash bo‘linmasi",
  //   path: "/equipment-unit",
  //   type: "link",

  //   role: "equipmentuser",
  //   icon: Joxozlash,
  // },
];

export const register_razobshitel = [
  { label: "T/R" },
  { label: "Tamirlangan sanasi" },
  { label: "Vagon nomeri" },
  { label: "Razabshitlni kran turi 4300" },
  { label: "Tekshiruv  bosimi 6 – 6,5 kg/sm2" },
  { label: "So’ngi jumrfk turi 4304, 4314, 271" },
  { label: "Tekshiruv  bosimi 6 – 6,5 kg/sm2 " },
  { label: "So’ngi jumrfk turi 4304, 4314, 271" },
  { label: "Tekshiruv  bosimi 6 – 6,5 kg/sm2 " },
  { label: "Tekshiruv  xulosasi " },
  { label: "Ta'mirlovchini imzosi" },
  { label: "Qabulqiluvchi imzosi" },
  { label: "" },
];
export const register_rukva = [
  { label: "T/R" },
  { label: "Sana" },
  { label: "Vagon nomeri" },
  { label: "Ulanish rukva markasi" },
  { label: "Ulanish rukva markasi" },
  { label: "Havo bilan tekshirish 6.0 5 0,5 kg/sm2" },
  { label: "Ushlab turish vaqti 10 daqiqa" },
  { label: "Suv bilan tekshiruvi 12-0.2 kgs/sm2" },
  { label: "Ushlab turish vaqti 1.5-0.8 1.5-2 daqiqa" },
  { label: "Ta'mirlovchini" },
  { label: "Qabulqiluvchi imzosi" },
  { label: "" },
];
export const register_rehulyator = [
  { label: "T/R" },
  { label: "Sana" },
  { label: "Vagon nomeri" },
  { label: "5746, PTPП 675, PTPП 675M, РТРП 300 turi 10" },
  { label: "Zavod raqami" },
  { label: "4,0-4,2 kgs/sm2 tekshirish" },
  { label: "«A»> 5746, PTPП 675, PTPN 675M, PTPN 300 90-110 MM " },
  {
    label:
      "«<a>> 5745, PTPN 675, PTPN 675M 300-350 MM РТРП 300 100-150 MM gacha",
  },
  { label: "5746 5-7 MM, PTPП 675, PTPN 675M 7-20 MM PTPN 300 5-10 MM gacha" },
  { label: "Texnik xolati " },
  { label: "Ta'mirlovchini" },
  { label: "Qabulqiluvchi imzosi" },
  { label: "" },
];
export const register_breakes_silindir = [
  { label: "T/R" },
  { label: "Sana" },
  { label: "Vagon nomeri" },
  { label: "Ta’mir turi" },
  { label: "Zaxirasig‘imi P7-78" },
  { label: " Suv bosimi (10,05+0,5) kg/sm2" },
  { label: "Tormozsilindiri TS002,TS188" },
  { label: "Havobosimi (4,0+0,1) kg/sm2" },
  { label: "2X kamerali  havotaq simlagich 295.001, 295M.001" },
  { label: "Havobosimi (6,0+0,1) kg/sm2" },
  { label: "Texnikxolati" },
  { label: "Ta'mirlovchini imzosi" },
  { label: "Qabulqiluvchi imzosi" },
  { label: "" },
];

export const register_auto = {
  top_head: [
    { label: "T/R", rowspan: 3 },
    { label: "Ta’mir sana", rowspan: 3 },
    { label: "Avtorejim turi ", rowspan: 3 },
    { label: "Ta’mir turi", rowspan: 3 },
    { label: "Avtorejim zavod raqami ", rowspan: 3 },
    {
      label: "Avtorejim velka razmeri \n 265 A -1 =70 mm \n 265 A -4 =120 mm  ",
      rowspan: 3,
    },

    {
      label: "TC Rejimdagi siqilgan havo bosimi",
      colspan: 3,
    },
    {
      label: "Imzo",
      colspan: 2,
    },
  ],

  middle_head: [
    { label: "Yuksiz " },
    { label: "O'rta" },
    { label: "Yukli" },
    { label: "Ta’mirlovchi  ", rowspan: 3 },
    { label: "Qabulqiluvchi  ", rowspan: 3 },
  ],
  bottom_head: [
    { label: "265 A-1 \n 265 A-4 \n TC-1=1,3+0,1 \n Kgs/sm2 " },
    {
      label:
        "265 A-1 \n TC=2,1+0,2 \n Kgs/sm2 \n 265 A-4 \n TC=1,95+0,2 \n Kgs/sm2",
    },
    {
      label:
        "265 A-1 \n TC=4,2+0,1 \n Kgs/sm2 \n 265 A-4 \n TC-1=1,3+0,1 \n Kgs/sm2",
    },
  ],
};

export const dalolatnoma_head = [
  { label: "Tartib raqami" },
  { label: "Vagon raqami" },
  { label: "Dalolatnoma tuzilgan sana" },
  {
    label: "Poyezddan kelgan №",
  },
  {
    label: "Tuzilgan dalolatnoma bekati tarkib",
  },
  {
    label: "Raqami №",
  },
  {
    label: "Uzilgan vagon raqami №",
  },
  {
    label: "Ta’mirga “V” № 823 17.10.2016 yildagi telegramma asosida.",
  },
  {
    label: "Tekshirish davomida aniqlandi №",
  },
  {
    label: "Ishlab chiqarilgan, kod va tegishli qismi",
  },
];
export const auto_dalolatnoma_head = [
  { label: "Tartib raqami" },
  { label: "Vagon raqami" },
  { colspan: 2, label: "Avtobirikma raqami" },
  {
    colspan: 2,
    label: "Ishlab chiqarilishi,zavod tamg’asi",
  },
  { colspan: 2, label: "Mavjudlik kodi" },
  {
    label: "Tortish xomut ponasining borligi",
    colspan: 3,
  },
  {
    label: "Imzo",
  },
  {
    label: "Orqani qo'shish",
  },
  {
    label: "",
  },
];

export const mockHeaderFraza = {
  headers: [
    { label: "Код детали", rowspan: 2 },
    { label: "Код неисправности", rowspan: 2 },
    { label: "Код ж.д Администрации собственницы детали", rowspan: 2 },
    { label: "Номер детали", colspan: 3 },
    { label: "Место, дата и вид работы по детали", colspan: 3 },
    { label: "Толщина обода колес", colspan: 2 },
  ],
  nestedHeaders: [
    { label: "Код предприятия изготовителя" },
    { label: "Заводской номер" },
    { label: "Год изготовителя" },
    { label: "Код депо" },
    { label: "Дата работ (ммгггг)" },
    { label: "Код вида работ " },
    { label: "Левое колесо" },
    { label: "Правое колесо" },
  ],
  topHeader: [
    { label: "Начало сообщения" },
    { label: "Код с сообщения" },
    { label: "Код ж.д отправителя" },
    { label: "Код режима ввода сообщения" },
    { label: "Дата передачи сообщения (ддммгггг)" },
    { label: "Место, для т вид операции с вагоном", colspan: 4 },
    { label: "Номер вагона", colspan: 2 },
  ],
};

export const mockHeaderCarriage = {
  headers: [
    { label: "Код детали", rowspan: 2 },
    { label: "Код неисправности", rowspan: 2 },
    { label: "Код ж.д Администрации собственницы детали", rowspan: 2 },
    { label: "Номер детали", colspan: 3 },
    { label: "Место, дата и вид работы по детали", colspan: 3 },
  ],
  nestedHeaders: [
    { label: "Код предприятия изготовителя" },
    { label: "Заводской номер" },
    { label: "Год изготовителя" },
    { label: "Код депо" },
    { label: "Дата работ (ммгггг)" },
    { label: "Код вида работ " },
  ],
  topHeader: [
    { label: "Начало сообщения" },
    { label: "Код с сообщения" },
    { label: "Код ж.д отправителя" },
    { label: "Код режима ввода сообщения" },
    { label: "Дата передачи сообщения (ддммгггг)" },
    { label: "Место, для т вид операции с вагоном", colspan: 4 },
    { label: "Номер вагона" },
  ],
};
export const vu_47 = {
  headers: [
    { label: "Tartib raqami", rowspan: 2 },
    { label: "Дата", rowspan: 2 },
    { label: "Тип прибора ", rowspan: 2 },
    { label: "Заводской номер прибор год и месяц выпуска ", rowspan: 2 },
    {
      label: "Время зарядки золотниковой камеры и запасного резервуара, с ",
      colspan: 2,
    },
    {
      label:
        "Отпуск медленным темпом через калиброванные отверстия диаметром 0,8 или 0,65 мм ",
      rowspan: 2,
    },
    {
      label:
        "Время наполнения тормоз цилиндра до 3; 5 кгс/см2 при экстрен . Или полном служебном торможении, с",
      rowspan: 2,
    },
    {
      colspan: 3,
      label:
        "Давление в тормозном цилиндре (ТЦ) на режимах кгс/см2 при экстр. торможении (ЭТ) и полном служебном (ПСТ)",
    },
    {
      label:
        "Время отпуска до  0,4 кгс/см2 в ТЦ после ПСТ на равниином режиме ",
      rowspan: 2,
    },
    {
      label: "Фамилия и подпис производишего ремонт ",
      rowspan: 2,
    },
    {
      label: "Подпись принявшего прибор ",
      rowspan: 2,
    },
  ],

  nestedHeaders: [
    {
      label: "ЗК до 1,2 кгс/см2",
    },
    {
      label: "ЗР от 4,0 кгс/см2 4,5 кгс/см2",
    },
    {
      label: "порожнем ",
    },
    {
      label: "среднем  ",
    },
    {
      label: "груженом ",
    },
  ],
};
export const carriage_dalolatnoma_head = [
  { label: "Tartib raqami" },
  { label: "Vagon raqami" },
  { label: "Ta'mir turi" },
  { label: "Yon rama raqami ", colspan: 4 },
  {
    label: "Ishlab chiqarilishi,zavod tamg’asi",
    colspan: 4,
  },
  {
    label: "Mavjudlik kodi",
    colspan: 4,
  },
  {
    label: "Ressor usti balkasi",
    colspan: 3,
  },
  {
    label: "Imzo",
  },
  {
    label: "Orqani qo'shish",
  },
  {
    label: "",
  },
];
export const wheel_dalolatnoma_head = [
  { label: "Tartib raqami" },
  { label: "Vagon raqami" },
  { label: "G’ildirak juftligi raqami	 ", colspan: 4 },
  {
    label: "Ishlab chiqarilishi,zavod tamg’asi",
    colspan: 4,
  },
  {
    label: "Mavjudlik kodi",
    colspan: 4,
  },
];

export const vu_31 = {
  nestedHeaders: [
    { label: "T/R", rowspan: 2 },
    { label: "Vagon Raqami", rowspan: 2 },
    { label: "Yuklangan, yuksiz", rowspan: 2 },
    {
      label: "Poezd raqami  nosoz parkga o'tkazilgan yo'l",

      rowspan: 2,
    },
    {
      label: "Oxirgi ta'mir turi",
      rowspan: 2,
    },

    { label: "Poezddan uzilgan vagonlar", colspan: 4 },
    { label: "nosoz holdagi vaqti hisobi", colspan: 2 },
    { label: "ta'mir yo'liga uzatish vaqti", colspan: 2 },
    { label: "ta'mit boshlanish vaqti", colspan: 2 },
    { label: "nosoz holdan chiqarish vaqti", colspan: 2 },
    { label: "nosoz holda turgan vaqti", colspan: 4 },
    {
      label: "vagonni nosoz holdan chiqaruvchi hujjat raqami va sanasi",
      rowspan: 2,
      colspan: 2,
    },
  ],
  nestedTwo: [
    "buksa qizishi bo'yicha",
    "rolikli podshipniklarda",
    "boshqa texnik nosozliklar bo'yicha",
    "jo'natish parkida mahalliy tuzilgan",
    "sana va oy",
    "soat va daqiqalar",
    "sana va oy",
    "soat va daqiqalar",
    "sana va oy",
    "soat va daqiqalar",
    "sana va oy",
    "soat va daqiqalar",
    "bekat yo'llarida gr,11 - gr.10",
    "ta'mir yo'llarida gr.13 - gr11",
    "ta'mir vaqtida gr.13 - gr12",
    "umumiy turib qolishi gr.13 - gr.10",
  ],
};

export const vu_36 = {
  nestedHeaders: [
    { label: "T/R" },
    { label: "Vagon Raqami" },
    { label: "Temir yo'l nomi" },
    { label: "BILDIRISHNOMA №" },
    {
      label: "Yuk vagonining qabul qilingan ta’mir turi va kodi",
    },
    {
      label: "Vaqt va sana",
    },

    { label: "Korxona uchun maxsus ta‘mir yo‘li va korxona kodi" },

    { label: "Ega kodi" },
    { label: "Ta’mir sanasi va vaqti" },
    {
      label: "Ko‘d maderniyzatsiya",
    },
    {
      label: "Ko‘d maderniyzatsiya",
    },
    {
      label: "Ko‘d maderniyzatsiya",
    },
    {
      label: "Ko‘d maderniyzatsiya",
    },
    {
      label: "DIQQAT!!!! Ehtiyoj bulgandagina uzgartiring",
    },
  ],
};

export const vu_50 = {
  headers: [
    { label: "Tartib raqami" },
    { label: "Yo‘naltirish varaqasi raqami " },
    {
      label:
        "G‘ildirak juftlarini yuborish uchun-ta'mirlash(ga) vagon raqami orqali va sanasi",
    },
    {
      label: "Jo‘natuvchi stansiya va temiryo’l ",
    },
    {
      label: "Jo‘natuvchi tashkilot nomi ",
    },
    {
      label: "Qabul qiluvchi stansiya va temiryo’l  ",
    },
    {
      label: "Qabul qiluvchi tashkilot nomi  ",
    },

    {
      label: "",
      colspan: 5,
    },
  ],
};
export const vu_22_assabmle = [
  { label: "Tartib raqami" },
  { label: "Vagon raqami" },
  {
    label: "Yuk ko'tara olishi",
  },
  {
    label: "Kuzov qoplamasi materiali",
  },
  {
    label: "Oxirgi rejali ta'mir joyi",
  },
  {
    label: "Oxirgi rejali ta'mir sanasi",
  },
  {
    label: "Ta'mirga olingan sanasi va vaqti ",
  },
  {
    label: "Ta'mirga tugashi sanasi va vaqti ",
  },
  {
    label: "Vu22 yaratgan xodim imzosi ",
  },

  {
    label: "VU-22 ma'lumotini to'liq ko'rish",
  },
  {
    label: "",
  },
];

export const vu_50_show_head = [
  {
    label: "T/R",
  },
  {
    label: "G‘ildirak raqami",
  },
  {
    label: "G‘ildirak juftligi turi",
  },
  {
    label:
      "Holati: xizmatga yaroqli-yangi shakllanish yoki ta'mirlangan; nosoz-kerakli ta'mirlash (klassifikator bo‘yicha nuqson raqami",
  },
  {
    label: "G‘ildirak juftliklarining ro‘yxat narxi",
  },
];
export const vu_51 = {
  invite: {
    headers: [
      { label: "Tartib raqami", rowspan: 2 },
      { label: "Vagon raqami", rowspan: 2 },
      { label: "Вагон депо, завод ___ ж.д", rowspan: 2 },
      { label: "Қабул қилинган сана", rowspan: 2 },
      { label: "Ғилидрак жуфтлиги рақами", rowspan: 2 },
      { label: "Тури ", rowspan: 2 },
      { label: "Сана ва вақт", colspan: 2 },
      { label: "Вагон остидан олинди", rowspan: 2 },
      { label: "Қабул қилган ВЧД, Завод, ПТО", rowspan: 2 },
      { label: "Юналтирувчи ведомостлар рақами", rowspan: 2 },
      {
        label:
          "Яроқли (янги шакллантирилган ёки қайта таьмирланган) Яроқсиз (классификатор бўйича дефект рақами)",
        rowspan: 2,
      },
      {
        label: "Талаб қилинган таьмир тури",
        rowspan: 2,
      },
      {
        label: "Сана ва имзо",
        rowspan: 2,
      },
      {
        label: "Yuklash / O'chirish",
        rowspan: 2,
      },
    ],
    nestedHeaders: [
      { label: "Охирги шаклланиш" },
      { label: "Охирги тўлиқ текшириш ва роликли рулмонларни буксага ўрнатиш" },
    ],
  },
  accepted: {
    headers: [
      { label: "Tartib raqami", rowspan: 3 },
      { label: "Vagon raqami", rowspan: 3 },
      { label: "Сана ва жой", colspan: 2 },
      { label: "№ вагон учун ишлатилган", rowspan: 3 },
      { label: "Юборилган ВЧД, Завод ПТО си", rowspan: 3 },
      { label: "Юналтирувчи ведомостлар рақами", rowspan: 3 },
      { label: "Бажарилган таьмир тури", rowspan: 3 },
      { label: "Ғилдирак жуфтлиги томони", rowspan: 3 },
      { label: "Ғилдирак жуфтлиги ўлчамлари (мм)", colspan: 9 },
      {
        label:
          "Tamirdan chiqarilgan kun / Tekshirilgan va bajrilgan ishlar imzosi",
        rowspan: 3,
      },
      {
        rowspan: 3,
        label: "Qo'yilgan kun imzosi / Imzo (Vagon ostiga berilgan)",
      },
      {
        rowspan: 3,
        label: "Yuklash / O`chirish",
      },
    ],
    nestedHeaders: [
      { label: "Охирги шаклланиш", rowspan: 2 },
      {
        label: "Охирги тўлиқ текшириш ва роликли рулмонларни буксага ўрнатиш",
        rowspan: 2,
      },
      { label: "Ўқ бўйни", colspan: 2 },
      { label: "Ўқ Диаметри ", colspan: 3 },
      { label: "Ғилдирак ", colspan: 4 },
    ],
    nestedDeepHeaders: [
      { label: "Узунлиги" },
      { label: "диаметр" },
      { label: "Ступица остидан олдинги қисм" },
      { label: "Ступица ости" },
      { label: "Ўртада Обод қалинлиги" },
      { label: "Обод қалинлиги" },
      { label: "прокат" },
      { label: "Айлана диаметри" },
      { label: "Ички қирраси орасидаги масофа" },
    ],
  },
};

export const vu_53_form = {
  headers: [
    { label: "№ п/п (№ жетона)" },
    { label: "Индивидуальный номер колесной пары Собственник колесной пары" },
    {
      label: "Собственник колесной пары",
    },
    { label: "Тип колесной пары" },
    { label: "Дата поступления в ремонт" },
    {
      label: "Поступила с завода, ВКМ, ВЧД, ПТО",
    },
    { label: "Номер пересылочной ведомости " },
    { label: "G`ildirak juftligi chiqarib olingan vagon raqami" },
    { label: "Vagon ta`mir turi" },
    {
      label: "G`ildirak juftligining  oxirgi yig`ilgan vaqti (formirivaniya)",
    },
    {
      label: "G`ildirak juftligining  oxirgi yig`ilgan  joyi(formirivaniya)",
    },
    { label: "Oxirgi o`rta ta`mirlangan vaqti" },
    { label: "Oxirgi o`rta ta`mirlangan joyi" },
    {
      label:
        "G`ildirak juftligining  yurish qismini oxirgi qayta tiklangan vaqti",
    },
    {
      label:
        "G`ildirak juftligining  yurish qismini oxirgi qayta tiklangan joyi",
    },
    { label: "G`ildirak juftligining tomonlari" },
  ],

  antoher: [
    { label: "Buksa holatining belgisi", colspan: 2 },
    { label: "G`ildirak holatining belgisi", colspan: 2 },

    {
      label: "G`ildirak juftligi o`lchamlari (мм)",
      colspan: 6,
    },
  ],

  nestedHeaders: [
    { label: "Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)" },
    { label: "Soz yoki Nosoz" },
    { label: "Soz (yangi yig`ilgan yoki ta`mirlangan)" },
    { label: "Nosoz(klassifikator bo`yicha nuqson raqami )" },
    { label: "Yurish qismining diametri" },
    { label: "Obod qalinligi" },
    { label: "Greben qalinligi" },
    { label: "Greben тiklik o`lchamlari" },
    { label: "Prokat" },
    { label: "Obodning ichki yuzalari orasidagi masofa" },
  ],
};

export const vu_53_form_second = {
  secondHeader: [
    { label: "Ta`mirlangan vaqti" },
    {
      label: " Zavod, VCHD, TXSH yoki vagon ostiga berilgan vaqti",
    },
    {
      label: "G`ildirak juftligini jo`natilgan joy nomi (Zavod, VCHD,TXSH)",
    },
    { label: "Peresilochniy raqami" },
    { label: "G`ildirak juftligi berilgan vagon raqami" },
    { label: "Vagon ta`mir turi" },
    { label: "G`ildirak juftligining tomonlari" },
  ],

  another_second: [
    {
      label: "Bajarilgan ta`mir ishlari",
      colspan: 12,
    },
  ],
  another_head_second: [
    {
      label:
        "G`ildirakni almashtirish sababi (klassifikator bo`yicha nosozlik raqami )",
      rowspan: 3,
    },
    { label: "Еlementlardan hosil bo'lgan g`ildirak juftligi ", colspan: 4 },
    {
      label: "Yig`ilgan g`ildirak juftligi  ",
      rowspan: 3,
    },
    {
      label: "O`rta ta`mir",
      rowspan: 3,
    },
    {
      label: "Joriy ta`mir",
      rowspan: 3,
    },
    {
      label: "G`ildirak juftligining  yurish qismini  qayta tiklangan",
      rowspan: 3,
    },
    {
      label: "Greben qismi payvandlangandan so`ng  g`ildirak ",
      rowspan: 3,
    },
    {
      label: "O`qning bo`yin qismidagi M110 rezbasin qayta tiklash",
      rowspan: 3,
    },
    {
      label: "O`qning bo`yin qismini  qayta tiklash",
      rowspan: 3,
    },
  ],
  another_sub_head_second: [
    { label: "Yangi", colspan: 2 },
    { label: "Eski yilgi", colspan: 2 },
  ],
  another_sub_extra_head_second: [
    { label: "O`q (kod 1)" },
    { label: "G`ildirak (kod 1)" },
    { label: "O`q (kod 1)" },
    { label: "G`ildirak (kod 1)" },
  ],

  antoher_loser_second: [
    { label: "G`ildirak", colspan: 5 },
    { label: "Obodning ichki yuzalari orasidagi masofa", rowspan: 2 },
  ],
  antoher_loser_head_second: [
    { label: "O`qning рostupochniy qismini diametri " },
    { label: "Yurish qismining diametri" },
    { label: "Greben qalinligi" },
    { label: "Obod qalinligi" },
    { label: "Prokat" },
  ],

  another_three: [
    {
      label:
        "G`ildirak juftligining yurish qismini qayta tiklangankbr sababi (klassifikator bo`yicha nosozlik raqami )",
      rowspan: 3,
    },
    {
      label: "Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)",
      rowspan: 3,
    },
    {
      label: "Defektoskop uskunasi bilan tekshiruchining imzosi",
      colspan: 6,
    },
    {
      label: "Ishlab chiqaruvching imzosi",
      colspan: 2,
    },
    {
      label: "Izoh",
      rowspan: 3,
    },
  ],
  another_head_three: [
    { label: "O'q", colspan: 4 },
    { label: "G`ildirak", colspan: 2 },

    { label: " G`ildirak juftliklarini  tekshirgan", rowspan: 2 },
    { label: "  G`ildirak juftliklarini  bergan", rowspan: 2 },
  ],
  another_sub_head_three: [
    { label: "Bo`yni va old postupichniy qismi" },
    { label: " postupichniy qismi" },
    { label: "Boyinidagi ichki xalqasi" },
    { label: "O`rta qismi" },
    { label: "Obod, Disk, Stupitsa" },
    { label: "Greben qismini payvandlangandan so`ng " },
  ],
};
export const vu_53 = {
  headers: [
    { label: "Tartib raqami", rowspan: 2 },
    { label: "Vagon raqami", rowspan: 2 },
    { label: "G`ildirak juftligining maxsus raqami ", rowspan: 2 },
    {
      label: "G`ildirak juftligining  egasi",
      rowspan: 2,
    },
    { label: "G`ildirak juftligining  turi", rowspan: 2 },
    { label: "Ta`mirga kelgan vaqti", rowspan: 2 },
    {
      label: "Kelgan joyi (Zavod, VCHD, TXSH)",
      rowspan: 2,
    },
    { label: "G`ildirak juftligi chiqarib olingan vagon raqami", rowspan: 2 },
    { label: "Vagon ta`mir turi", rowspan: 2 },
    {
      label: "G`ildirak juftligining  oxirgi yig`ilgan vaqti (formirivaniya)",
      rowspan: 2,
    },
    {
      label: "G`ildirak juftligining  oxirgi yig`ilgan  joyi(formirivaniya)",
      rowspan: 2,
    },
    { label: "Oxirgi o`rta ta`mirlangan vaqti", rowspan: 2 },
    { label: "Oxirgi o`rta ta`mirlangan joyi", rowspan: 2 },
    {
      label:
        "G`ildirak juftligining  yurish qismini oxirgi qayta tiklangan vaqti",
      rowspan: 2,
    },
    {
      label:
        "G`ildirak juftligining  yurish qismini oxirgi qayta tiklangan joyi",
      rowspan: 2,
    },
    { label: "G`ildirak juftligining tomonlari", rowspan: 2 },

    { label: "Buksa holatining belgisi", colspan: 2 },
    { label: "G`ildirak holatining belgisi", colspan: 2 },

    {
      label: "G`ildirak juftligi o`lchamlari (мм)",
      colspan: 6,
    },
  ],

  nestedHeaders: [
    { label: "Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)" },
    { label: "Soz yoki Nosoz" },
    { label: "Soz (yangi yig`ilgan yoki ta`mirlangan)" },
    { label: "Nosoz(klassifikator bo`yicha nuqson raqami )" },
    { label: "Yurish qismining diametri" },
    { label: "Obod qalinligi" },
    { label: "Greben qalinligi" },
    { label: "Greben тiklik o`lchamlari" },
    { label: "Prokat" },
    { label: "Obodning ichki yuzalari orasidagi masofa" },
  ],

  secondHeader: [
    { label: "Ta`mirlangan vaqti", rowspan: 4 },
    {
      label: " Zavod, VCHD, TXSH yoki vagon ostiga berilgan vaqti",
      rowspan: 4,
    },
    {
      label: "G`ildirak juftligini jo`natilgan joy nomi (Zavod, VCHD,TXSH)",
      rowspan: 4,
    },
    { label: "Peresilochniy raqami", rowspan: 4 },
    { label: "G`ildirak juftligi berilgan vagon raqami", rowspan: 4 },
    { label: "Vagon ta`mir turi", rowspan: 4 },
    { label: "G`ildirak juftligining tomonlari", rowspan: 4 },
    {
      label: "G`ildirak juftligi o`lchamlari мм (o`ng va chap tomonlari)",
      colspan: 6,
    },
    {
      label: "Bajarilgan ta`mir ishlari",
      colspan: 12,
    },
    {
      label:
        "G`ildirak juftligining yurish qismini qayta tiklangankbr sababi (klassifikator bo`yicha nosozlik raqami )",
      rowspan: 4,
    },
    {
      label: "Buksa qobig`ining turi (yo`lovchi yoki yuk vagon)",
      rowspan: 4,
    },
    {
      label: "Defektoskop uskunasi bilan tekshiruchining imzosi",
      colspan: 6,
    },
    {
      label: "Ishlab chiqaruvching imzosi",
      colspan: 2,
    },
    {
      label: "Izoh",
      rowspan: 4,
    },
  ],

  secondHeaderNested: [
    { label: "G`ildirak", colspan: 5 },
    { label: "Obodning ichki yuzalari orasidagi masofa", rowspan: 3 },
    {
      label:
        "G`ildirakni almashtirish sababi (klassifikator bo`yicha nosozlik raqami )",
      rowspan: 3,
    },
    { label: "Еlementlardan hosil bo'lgan g`ildirak juftligi ", colspan: 4 },
    {
      label: "Yig`ilgan g`ildirak juftligi  ",
      rowspan: 3,
    },
    {
      label: "O`rta ta`mir",
      rowspan: 3,
    },
    {
      label: "Joriy ta`mir",
      rowspan: 3,
    },
    {
      label: "G`ildirak juftligining  yurish qismini  qayta tiklangan",
      rowspan: 3,
    },
    {
      label:
        "Greben qismi payvandlangandan so`ng  g`ildirak juftligining  yurish qismini  qayta tiklangan",
      rowspan: 3,
    },
    {
      label: "O`qning bo`yin qismidagi M110 rezbasin qayta tiklash",
      rowspan: 3,
    },
    {
      label: "O`qning bo`yin qismini  qayta tiklash",
      rowspan: 3,
    },
    { label: "O'q", colspan: 4, rowspan: 2 },
    { label: "G`ildirak", colspan: 2, rowspan: 2 },
    { label: " G`ildirak juftliklarini  tekshirgan", rowspan: 3 },
    { label: "  G`ildirak juftliklarini  bergan", rowspan: 3 },
  ],

  secondNestedDeepHeadersNext: [
    { label: "O`qning рostupochniy qismini diametri ", rowspan: 2 },
    { label: "Yurish qismining diametri", rowspan: 2 },
    { label: "Greben qalinligi", rowspan: 2 },
    { label: "Obod qalinligi", rowspan: 2 },
    { label: "Prokat", rowspan: 2 },
    { label: "Yangi", colspan: 2 },
    { label: "Eski yilgi", colspan: 2 },
  ],
  secondDeepHeadersNext: [
    { label: "O`q (kod 1)" },
    { label: "G`ildirak (kod 1)" },
    { label: "O`q (kod 1)" },
    { label: "G`ildirak (kod 1)" },
    { label: "Bo`yni va old postupichniy qismi" },
    { label: " postupichniy qismi" },
    { label: "Boyinidagi ichki xalqasi" },
    { label: "O`rta qismi" },
    { label: "Obod, Disk, Stupitsa" },
    { label: "Greben qismini payvandlangandan so`ng " },
  ],
};

export const vu_68 = {
  nestedHeaders: [
    { label: "Tartib Raqami", rowspan: 2 },
    { label: "Vagon Raqami", rowspan: 2 },
    { label: "Tormoz ta’mirlangan sana", rowspan: 2 },
    {
      label: "Vagonga qo’yilgan Xavotaqsimlagichning turi va raqami, ",
      rowspan: 2,
    },
    {
      label:
        "Tormozning oxirgi rejaviy ta’mirlangan sanasi va joyi yoki qayta ko‘rib chiqilishi ",

      rowspan: 2,
    },

    { label: "Ta’mirdan keyingi  zichligi ", colspan: 2 },
    { label: "Rejimda  tormoz silindridagi bosim ", colspan: 3 },
    { label: "Xavo g’amlanmasining sinovi sanasi ", colspan: 1, rowspan: 2 },

    { label: "Imzo ", colspan: 2 },
  ],
  nestedTwo: [
    "Xavo  quvuri ",
    "Tormoz silindri ",
    "Yuklanganda",
    "O‘rtacha",
    "Yuksizlanganda",

    "Topshiruvchining ",
    "Qabul qiluvchining ",
  ],
};
export const defectoscope = {
  nestedHeaders: [
    { label: "Tartib Raqami" },
    { label: "sana" },
    { label: "Келган вагон раками №" },
    {
      label: "Detal nomi",
    },
    {
      label: "Yil/raqam/zavod",
    },

    { label: "Nosozlik xulosasi" },
    { label: "N/A imzosi " },
    { label: "Usta imzosi " },

    { label: "V/S/Q/Q imzosi " },
  ],
};

export const vu_90 = {
  headers: [
    { label: "Tartib raqami", rowspan: 3 },
    { label: "Yig‘ilgan sana", rowspan: 3 },
    {
      label: "Qo’yish va g’ildirak juftligi raqami",
      rowspan: 3,
    },
    { label: "G‘ildirak juftligining o‘rta ta’mir tamg‘asi", rowspan: 3 },
    { label: "O’q sheykasi", rowspan: 3 },
    {
      label:
        "O‘qning sheyka va stupisa o‘tiradigan qismdan oldingi  qismining diametri (mm)",
      colspan: 6,
    },
    { label: "Sheykaning eng katta oval qismi (mm)", rowspan: 3 },
    { label: "Sheykaning eng katta konus qismi (mm)", rowspan: 3 },
    { label: "Labirint halqasini o‘rnatilish diametri (mm)", rowspan: 3 },
    { label: "Labirint halqasini o‘rnatishdagi farqi (mm)", rowspan: 3 },
    {
      label: "Erkin yoki sheykadagi to‘g‘ridan to‘g‘ri radial oraliq (mm)",
      rowspan: 3,
    },
    {
      label: "Buksani o‘rnatilish diametrlari (mm)",
      colspan: 4,
    },
    {
      label:
        "Podshipnikni ishlab chikargan zavodi, belgisi, raqami, ishlab chiqarilgan oyi va yili",
      rowspan: 2,
      colspan: 2,
    },
    {
      label: "Qotirish vtulkasini chiqishi yoki minimal osevoy oraliq (mm)",
      rowspan: 3,
    },
    {
      label:
        "Qotirish vtulkasini siljishi yoki ichki halqaning o‘rnatilish diametri (mm)",
      rowspan: 3,
    },
    {
      label:
        "Vtulkani bosim yordamida preslash yoki ichki halqani o‘rnatishdagi farqi (mm)",
      rowspan: 3,
    },
    {
      label: "Yog‘ (rusumi, zavod, partiya)",
      rowspan: 3,
    },
    {
      label: "Imzo",
      colspan: 2,
    },
    {
      label: "Izoh",
      rowspan: 3,
    },
    {
      label: "",
      rowspan: 3,
    },
  ],

  nestedHeaders: [
    { label: TableImg, colspan: 6, isImg: true },
    { label: "O'q", colspan: 4 },
    { label: "TNB ustasi yoki podshipnikni o‘lchovchi texnik", rowspan: 2 },
    { label: "Smena ustasi", rowspan: 2 },
  ],
  nestedDeepHeaders: [
    { label: "d1" },
    { label: "dc1" },
    { label: "d2" },
    { label: "dc2" },
    { label: "d3" },
    { label: "dc3" },
    { label: "D1" },
    { label: "Dc1" },
    { label: "D2" },
    { label: "Dc2" },
    { label: "Orqa" },
    { label: "Oldi" },
  ],
};

export const vu_91 = [
  "Tartib raqami",
  "Ko‘rilgan sana",
  "Podshipnik shartli belgisi",
  "Podshipnik ishlab chiqarilgan zavodi va yili ",
  "Podshipnik raqami",
  "Nuqson ko‘rinishi",
  "Ko‘rib chiqqan shaxs imzosi",
  "Yuklab olsih / O'chirish",
];
export const vu_92 = {
  headers: [
    { label: "Tartib raqami", rowspan: 2 },
    { label: "Taftish sanasi", rowspan: 2 },
    { label: "Vagon raqam", rowspan: 2 },
    { label: "G‘ildirak juftligi raqam", rowspan: 2 },
    { label: "Buksa qismlarini holati", rowspan: 2 },
    { label: "Taftish ishlarni bajarishda amalga oshiriladi", rowspan: 2 },
    { label: "Imzosi", colspan: 2 },
    { label: "Yuklash / O'chirish", rowspan: 2 },
  ],

  nestedHeaders: [{ label: "Taftish qilingan" }, { label: "Usta" }],
};
export const vu_93 = {
  headers: [
    { label: "Tartib raqami", rowspan: 2 },

    { label: "Podshipnik ta’mirlangan  sanasi", rowspan: 2 },
    {
      label:
        "Podshipnik shartli belgilari, raqami, ishlab chiqargan zavod va sanasi ",
      rowspan: 2,
    },
    { label: "Ko‘rinish", colspan: 2 },
    { label: "Imzolar", colspan: 2 },
    { label: "Yuklash / O'chirish", rowspan: 2 },
  ],

  nestedHeaders: [
    { label: "Yaroqsiz" },
    { label: "Amalga oshirilgan ta’mir ishlari" },
    { label: "Ta’mirlagam shaxs imzosi" },
    { label: "Usta" },
  ],
};

export const option_kodpaa_data = [
  "100     01   ДИАГ.КОЛ.ПАР     ДИАГНОСТИРОВАНИЕ КОЛЕСНЫХ ПАР",
  "101     03   CXOД C PEЛЬC     НЕИСПР.ВАГ.В РЕЗ.СХОДА С РЕЛЬС",
  "102     02   ТОНK.ГPEБEHЬ     TOHKИЙ ГPEБEHЬ",
  "103     02   ПPK. ПO KP.KT.   ПPOKAT ПO KPУГУ KAT.BЫШE HOPMЫ",
  "104     02   KOЛ.BЫP.ПBKT.    KOЛЬЦEBЫE BЫPAБOTKИ ПOBEP.KAT.",
  "105     02   HAB.HA ПB. KT    HABAP HA ПOBEPXHOCTИ KATAHИЯ",
  "106     02   ПЛЗ.HA ПB. KT    ПOЛЗУH HA ПOBEPXHOCTИ KATAHИЯ",
  "107     02   BЫШ. OБOД. KOЛ   BЫЩEPБИHЫ OБOДA KOЛECA",
  "108     02   PЗД. OБOДA KЛ    PAЗДABЛИBAHИE OБOДA KOЛECA",
  "109     02   OCTP.HAKT. ГP    OCTPOKOHEЧHЫЙ HAKAT ГPEБHЯ",
  "110     02   BEPT. ПOДP. ГP   BEPTИKAЛЬHЫЙ ПOДPEЗ ГPEБHЯ",
  "111     02   TOHKИЙ OБOД      TOHKИЙ OБOД",
  "112     01   TPEЩИH. OБOДA    TPEЩEHЫ OБOДA",
  "113     01   OCЛ.CT. HA OC    OCЛAБЛEHИE CTУПИЦЫ HA OCИ",
  "114     01   ТРЕЩИН.ГРЕБ.     ТРЕЩИНА ГРЕБНЯ.ОТКОЛ ГРЕБНЯ",
  "115     01   ОТК.ОБОДА        ОТКОЛ ОБОДА КОЛЕСА",
  "116     03   ПОЛЗУН П.КАТ.    ПОЛЗУН НА ПОВ.КАТ.1 КОЛЕСЕ",
  "117     02   НРВ.ПРК.К.КТ     НЕРАВНОМЕР.ПРОКАТ ПО КР.КАТ.",
  "118     01   ТРЩ.Д.КЛ.КП.     ТРЕЩИНА ДИСКА КОЛЕСА КОЛПАРЫ",
  "119     01   ВЫБР.СМЗ.БКС     ВЫБРОС СМАЗКИ ИЗ БУКС.УЗЛА",
  "120     01   ТРЩ.КАС.ПДШП     ТРЕЩ.НАР.КОЛ.ПДШП КАСС.ТИПА",
  "121     01   НРШ.УПЛ.ПДШП     НАРУШ.УПЛОТ.КОЖ.ПДШТ КАСС.ТИПА",
  "122     01   ОТС.БЛТ.КР       ОТСУТСТВИЕ БОЛТОВТОРЦ.КР.ПДШП",
  "122     01   ОТС.БЛТ.КР       ОТСУТСТВИЕ БОЛТОВТОРЦ.КР.ПДШП",
  "123     01   ТРЕЩ.НАР.БЛT.    ТРЕЩИНА НАРУЖНОЙ БЛЮМЕРНОЙ КРОНШТЕЙНЫ",
  "130     01   ТРЩ.ОС.КП        ТРЕЩИНА ОСИ КОЛПАРЫ",
  "132     02   ПPT.MC. OC.      ПPOTEPTЫE MECTA OCИ KOЛПAPЫ",
  "133     03   CЛ. KOHT. ЭЛEK   CЛEДЫ KOHTAKTA C ЭЛEKTP.HA OCИ",
  "134     01   ХОЛОД.ИЗЛОМ      ХОЛОДНЫЙ ИЗЛОМ ШЕЙКИ ОСИ",
  "148     03   ПОВРЕЖ.ОС.КП.    ПОВРЕЖДЕНИЯ ОСИ КОЛ.ПАРЫ",
  "150     01   НГР.ПДШП.БКС     НАГРЕВ ПДШП ПО ВНЕШНИМ ПРИЗН.",
  "151     01   CДBИГ БYKCЫ      CДBИГ БУKCЫ",
  "152     03   TPEШ. ИЗЛ. БYK   TPEЩEHЫ ИЛИ ИЗЛOM KOPПУCA БУKC",
  "153     03   ИЗЛ.ИЗГ. БYKC    ИЗЛOM ИЛИ ИЗГИБ KPЫШKИ БУKCЫ",
  "154     01   ОСЛ.БЛТ.БКС.     ОСЛАБ.БОЛТА.КРЕП.КРЫШКИ БУКСЫ",
  "155     03   ПРВ.РЛ.БКС.      ПЕРЕВЕРНУТА РОЛИКОВАЯ БУКСА",
  "156     02   CCT.АКСТ.КНТ     ПОКАЗ.СИСТ.АКУСТ.КОНТР.БУКС.УЗ",
  "157     01   НГР.ПДШ.АВТК     НАГРЕВ ПДШП ВЫШЕ НОРМЫ АВТК.",
  "158     02   НСВМ.БУКС        НАЛ.НЕСВМ.БУК.УЗ.К.ПАР.ПОД 1 В",
  "159     01   НРШ/ОСЛ ТРЦ      НАР/ОСЛ ТОРЦЕВОГО КРПДШБКС",
  "160     02   ПСЧ.СР.КП        ПРОСР.СРОК СРЕД.РЕМ.КОЛ.ПАРЫ",
  "161     02   НЕП.СТ.ЭЛЕКТР    НЕИСПРАВНОСТЬ СТАТИСТ.ЭЛЕК-ВА",
  "200     01   ДИАГ.ДЕТ.ТЕЛ     ДИАГНОСТИРОВАНИЕ ДЕТАЛ.ТЕЛЕЖ.",
  "201     02   HECOOT. ЗAЗOP    HEC.ЗAЗ.MEЖДУ PAM.BAГ.И TEЛEЖK",
  "203     01   РАЗН.БАЗ TЛЖ     РАЗН.БАЗ БОК.РАМ ТЕЛ.БОЛ.НОРМ.",
  "204     03   ИЗЛ.CP.ШKBOP     ИЗЛOM.CPEЗ ШKBOPHЯ",
  "205     01   TPЩ.БOKOBИH      TPЩ./СКВОЗ.ЛИТ.ДЕФ/ИЗЛ.БОК.Р       *",
  "206     03   ИЗЛ.СКЗ.         ИЗЛОМ/ТРЕЩИНА СКОЛЬЗУНА",
  "207     01   OCЛ. CKOЛЬЗYH    OCЛAБЛEHИE CKOЛЬЗYHA",
  "208     02   ИЗHOC CKOЛЬЗ     ИЗHOC CKOЛЬЗYHA",
  "210     02   OTC.КЛП.СКЗ      ОТСУТСТВИЕ КОЛПАКА СКОЛЬЗ.",
  "211     02   ИЗЛ.КОЛП.СКЗ     ИЗЛОМ КОЛПАКА СКОЛЬЗУНА",
  "212     02   TPEЩ. KOP. CKЗ   TPEЩИHA KOPOБKИ CKOЛЬЗУHA",
  "213     03   OTC.CMEЩ.ПPЖ     CMEЩEHИE ПPУЖИHЫ",
  "214     02   ИЗЛOM ПPУЖИH     ИЗЛOM ПPУЖИH                       *",
  "215     01   TPЩ. COEД.БЛK.   TPEЩИHA COEД.БAЛKИ",
  "216     01   HECOOT.T.TEЛ     HECOOTBETCTBИE TИПA TEЛEЖKИ",
  "217     01   TPEЩ.ИЗЛ.HБЛК.   TPЩ./СКВОЗ.ЛИТ.ДЕФ/ИЗЛ.Н.БAЛK.     *",
  "218     01   ИЗЛOM.KЛ.Г.KOЛ.  ИЗЛOM KЛИHA ГACИTEЛЯ KOЛEБAHИЙ",
  "219     02   ЗВШ.ФР.КЛ        ЗАВ/ЗАН.ФР.КЛ.ОТН.ОП.П.НАДР.Б.",
  "220     02   HEСООТ.З.СКЗ.    HEСООТВЕТСТВИЕ ЗАЗ.СКОЛЬЗУНА",
  "221     02   РАЗНОТИП.ТЕЛ.    РАЗНОТИПНОСТЬ ТЕЛЕЖЕКOTЫ ABCЦ",
  "225     01   НЕИСП.ПРОКЛАД    НЕИС.ОПОР.ПРОКЛАД.В БУК.ПРО МЕ",
  "226     01   ТРЕЩ.ПОДВ.ПЛ.    ТРЕЩИНА ПОДВИЖ.ПЛАНКИ ТЕЛЕЖКИ",
  "227     01   ОБР.З.ПЛ.ФРК     ОБРЫВ(ОТС)ОСЛАБ.ЗАКЛ.ФРК.ПЛ",
  "228     01   НЕИСП.П.НАКЛ.    НЕИСПРАВНОСТЬ ПОЛИМЕР.НАКЛАДКИ",
  "230     03   ИЗЛОМ ПРЕД.      ИЗЛОМ ПРЕД.УС-ВА ТЕЛ. И КУЗОВА",
  "231     01   ВЫПАД.РОЛ.С.     ВЫПАДЕНИЕ РОЛИКА СКОЛЬЗУНА",
  "232     03   ИЗЛОМ УПР.Э.     ИЗЛOМ УПР.ЭЛЕМ.РОЛИКА СКОЛЬЗ.",
  "234     01   ИЗНС.ФР.КЛ.      СВЕРХНРМ.ИЗНОС ФРИКЦ.КЛИН.ТЕЛ.",
  "235     03   ОТС.АДПТ.БКС     ОТСУТСТВ.АДАПТЕР БУКС.УЗЛА",
  "236     01   СМЩ.АДПТ.ПДШ.    СМЕЩ/ПЕРЕКОС/ОТКОЛ АДПТ.ПДШП",
  "237     01   ТРЩ.П.ВС.АД.     ТРЕЩ/ИЗЛОМ МЕЖДУ Б.РАМ.И АДАПТ",
  "238     01   ЗАЗ.КЛП.СКЗ      ЗАЗОР КОЛПАК И ОТВ.Ч СКОЛЬЗУН",
  "239     01   ОТС.ВЫХ.КП       ОТС.ИЗЛ.УСТР.ВЫХ.КОЛ.ПАР. БУКС",
  "240     01   ОТС.МАРК.НОМ     ОТС.МАРКИРОВКИ НОМЕРОВ БОКОВИН",
  "241     03   ДЕФ.БОКОВИН      ДЕФ.Б.Р.(ИЗБ,ПРОПЕЛЛЕРНОСТЬ)       *",
  "242     01   СВРК.ПР.БОК      СВРК-НАПЛВ.РАБ.В РАД.R55 Б.Р.      *",
  "250     01   ПСЧ.СР.Д.ТЛЖ     ПРОСРОЧ.СРОК СЛУЖ.ДЕТАЛ.ТЕЛЕЖК",
  "300     01   ДИАГ.ДЕТ.АСЦ.    ДИАГНОСТ.ДЕТ.АВТОСЦЕПН.ОБОР.",
  "302     02   ПРОВ.АВТОСЦП     ПРОВИСАНИЕ АВТОСЦЕПКИ",
  "303     01   НС.РС.АС.УР.     HEС.НОРМ Р-Я ОТ УП.АСЦ ДО УД.Р.",
  "304     01   ТРЕЩ.КР.АВСЦ     ТРЕЩИНЫ В КОРПУСЕ АВТОСЦЕПКИ",
  "305     03   УШИР.ЗВ.АВСЦ     УШИРЕНИЕ ЗЕВА АВТОСЦЕПКИ",
  "306     02   ИЗН.КНТ.ЗАЦП     ИЗНОС КОНТУРА АВТОСЦЕПКИ",
  "307     03   ИЗГ.ХВС. АВСЦ.   ИЗГИБ ХВОСТОВИКА АВТОСЦЕПКИ",
  "308     03   ОБР.ХВС.АВС.     ОБРЫВ ХВОСТОВИКА АВТОСЦЕПКИ",
  "310     01   НЕИС. КП.АВСЦ    НЕИСПРАВНОСТЬ КОРПУСА АВТОСЦЕП.",
  "313     03   ПРВ.ПРД.СМРЦ     ПОВРЕЖ.ПРЕДОХР.ОТ САМОРАСЦЕПА",
  "318     02   НСТ.В.ОСИ АС.    НЕСООТВЕТСТ.ВЫСОТЫ ОСИ АВТОСЦ",
  "319     02   НСТ.З.Р.И АС.    НЕСООТВ.ЗАЗ. ПОТОЛ.РОЗ.И ХВ.АС",
  "320     02   ТРЩ.УД.РОЗ.      ТРЕЩИНА УДАРНОЙ РОЗЕТКИ",
  "340     01   ТРЕЩ.ИЗЛ.ТХ      ТРЕЩИНА ТЯГОВОГО ХОМУТА",
  "343     01   ТРЕЩ.ПЛ.ТГ.Х     ТРЕЩИНА ПЛАНКИ ТЯГ.ХОМУТА",
  "344     01   ТРЕЩ.КЛ.ТГ.Х     ТРЕЩИНА КЛИНА ТЯГОВОГО ХОМУТА",
  "345     02   НРШ.КР.КЛ.ТХ     НАРУШЕНИЕ КРЕПЛЕНИЯ КЛИНА Т.Х.",
  "346     03   ИЗЛ.УД.РОЗТ      ИЗЛОМ УДАРНОЙ РОЗЕТКИ",
  "347     01   ОБР.УДАР.УГЛ     ОБР/ОСЛ КРЕПЛ.УПОРА АВТС.УСТР.",
  "348     01   НЕИП.ПГЛ.АП.     HEИCПPABHOCTИ ПОГЛАЩ.АППАРАТА",
  "349     03   ИЗЛ.УП.ПЛИТЫ     ИЗЛОМ УПОРНОЙ ПЛИТЫ",
  "350     01   ОБР.БЛТ.П.ПЛ.    ОБРЫВ ОСЛ.БОЛТА ПОДД.ПЛАНКИ",
  "352     01   ЗАЗОР >5 ММ      ЗАЗОР ПЕРЕД.УП И УП.ПЛИТ>5 ММ",
  "353     03   ПОВР.ПОГЛ.АП     ПОВРЕЖДЕНИЕ ПОГЛАЩ.АППАРАТА",
  "360     02   ИЗЛ.КРН.Р.ПР.    ИЗЛОМ/ОСЛ.КРЕПЛ. РАСЦ.ПРИВОДА",
  "361     03   ИЗЛ.ДЕР.Р.ПР     ИЗЛОМ ДЕРЖАВКИ РАСЦ.ПРИВОДА",
  "363     03   ИЗЛ.РЫЧ.Р.ПР     ИЗЛОМ.,ИЗГБ.РЫЧ.РАСЦЕП.ПРИВ.       *",
  "380     02   ТРЩ.ЦЕНТ.БЛК.    ТРЕЩ/ИЗЛОМ ЦЕНТРИРУЮЩЕЙ БАЛКИ",
  "381     02   ОБР.ТРЩ.М.ПД.    ОБРЫВ ИЛИ ТРЕЩИНА МАЯТ.ПОДВЕСК",
  "385     01   ОТС.П.М.ПД.8     ОТС.ПРУЖ.У ЦЕНТР.БАЛ.У 8-ОСН.В",
  "400     01   ДИАГ.ДЕТ.АТО     ДИАГНОСТ.ДЕТ.АВТОТОРМ.ОБОРУДОВ.",
  "401     01   НЕИСП.АВ.РЕЖ     НЕИСПРАВНОСТЬ АВТОРЕЖИМА И ПР.",
  "402     01   HСПР.APГ         HEИCП.РЕГУЛ.ТОРМ.РЫЧАЖ.ПЕРЕД.",
  "403     01   HEИCП.BЗДPCП     HEИCПPAB. BOЗДУXOPACПPEДEЛИTEЛЯ",
  "404     01   HEИCП.TOP.ЦЛ.    HEИCПPABHOCTЬ TOPMOЗHOГO ЦИЛИHДPA",
  "405     01   HEИCП.KOЦ.KP     HEИCПPABHOCTЬ KOHЦEBOГO KPAHA",
  "406     01   HEИCП.PЗБ.KP     HEИCПPAB.PAЗOБЩИTEЛЬHOГO KPAHA",
  "407     01   ТРЩ.ЗПC.PЗPB     ТРЕЩИНА ЗAПACHOГO PEЗEPBУAPA",
  "408     01   СРЫВ К.ГАЙКИ     СРЫВ КОРОН.ГАЙКИ ТРИАНГЕЛЯ",
  "409     03   ОБРЫВ КРОНШ      ОБРЫВ КРОНШ.2КАМЕР.РЕЗЕРВ.ВОЗД",
  "410     01   НСПР.ТРОЙНИК     НЕИСПР.ТРОЙН.ВОЗД.ПР.ТОРМ.МАГ.",
  "411     02   НСПР.БЛК.АРЖ     НЕИСПР.БАЛКИ АВТОРЕЖ.ИЛИ ЕЕ КР.",
  "412     03   ОТ.ПВ.БЛ.АРЖ     ОТС.ИЛИ ПОВР.БАЛКИ АВТОРЕЖИМА",
  "413     01   ИЗЛ.БЛК.АРЖ.     ИЗЛОМ ОПОРНОЙ БАЛКИ АВТОРЕЖИМА",
  "414     01   ТРЩ.К.К.ТРМ.     ОБP/ТР КРОНШТ.КРЕПЛ.ТР В/Т ОБ.",
  "440     02   ОСЛ.КР.ТР.В      ОСЛ.КРЕП.В ТР.ВЗДПР И ТОРМ.ОБ",
  "441     01   ОБР.МАГ.В.ТР     ОБР/ИЗЛ ВЗДПР.И ПОДВ.ТР.ТОРМ.М.",
  "442     01   ДEФ.COEД.PKB     ДEФEKTЫ COEДИHИTEЛЬHЫX PУKABOB",
  "443     02   ИЗЛ.PЫЧ.TP.T.    ИЗЛ.РЫЧ.И ТЯГ Т.РЫЧ.ПЕРЕДАЧИ",
  "444     01   ИЗH.BTЛ.TPB.     ИЗH.BTУЛOK TPABEPCЫ(TPИAHГEЛЯ)",
  "445     02   ЗABAP БAШMAK     ЗABAP БAШMAKA",
  "446     03   ИЗLOM СКБ.ТРП    ИЗLOM ПPEДOXPAHИTEЛЬHЫX CKOБ",
  "447     02   PAЗP.PЫЧ.ПPД     PAЗPEГУЛИPOB.PЫЧAЖHOЙ ПEPEДAЧИ",
  "448     01   HCП.CT.TOPM.     HEИCПPABHOCTЬ CTOЯHOГO TOPMOЗA",
  "449     01   НЕИСП.АСТ        НЕИСПРАВНОСТЬ АВТ.СТОЯН.ТОРМ",
  "450     01   ИЗГИБ ТРИАНГ     ИЗГИБ/ИЗЛОМ ТРИАНГЕЛЯ",
  "451     01   ОБР.КРОНШ.       ОБРЫВ/ТРЕЩИНА КРОНШ.ТОРМ.ЦИЛ.",
  "452     02   ТРЩ.ИЗЛ.БАШ      ТРЕЩИНА/ИЗЛОМ ПОДВ. ТОРМ.БАШ",
  "453     01   ИЗН.РАСП.ТРН     ИЗНОС РАСПОРКИ",
  "455     03   РАЗУК. РСТ       РАЗУКОМПЛЕКТОВАНИЕ РСТ",
  "500     01   ДИАГ.КУЗ.ВАГ.    ДИАГНОСТИРОВАНИЕ КУЗОВА ВАГОНА",
  "501     02   ПEPEK.KЗ>75      ПEPEKOC KУЗOBA БOЛEE 75 MM",
  "502     01   УШ.KЗ>75MM       УШИP.КУЗ. БOЛ.75 MM НА ОД.СТ.",
  "503     01   OБP.CBP.Ш.C.     OБPЫB CBAPHOГO ШBA CTOЙKИ",
  "504     01   OБP.CBP.Ш.PC     OБPЫB CBAPHЫX ШBOB PACKOCOB",
  "505     03   ПOBP.CTOEK       ПOBPEЖДEHИE CTOEK",
  "506     03   ПOBP.OБB.БPC     ПOBPEЖДEHИE OБBЯЗOЧHЫX БPYCЬEB",
  "507     03   ПOBP.ДBP.БPC     ПOBPEЖДEHИE ДBEPHЫX БPYCЬEB",
  "508     03   ПOBP.ПOTЛ.ДГ     ПOBPEЖДEHИE ПOTOЛOЧHЫX ДYГ",
  "509     01   НСПР.СЛ.ПР.Ц     НЕИСПРАВНОСТИ СЛИВ.ПРИБ.ЦИСТ.",
  "530     03   ПOBP.KPЫШИ       ПOBPEЖДEHИE KPЫШИ",
  "531     03   ПOBP.OБШ.KЗB     ПOBPEЖДEHИE OБШИBKИ KYЗOBA",
  "532     03   ПOBP.ПOЛA        ПOBPEЖДEHИE ПOЛA",
  "533     03   ПOBP.ПPX.ПЛ.     ПOBPEЖДEHИE ПEPEXOДHOЙ ПЛOЩ-KИ",
  "534     03   OTC.ДBEPИ        OTCУTCTBИE ДBEPИ",
  "535     03   OTC.ДBEP.УПR     OTCУTCTBИE ДBEPHOГO YПOPA",
  "536     03   ПОВP.KP.ДBEP     ПOBPEЖДEHИE KPEПЛEHИЯ ДBEPИ",
  "537     01   HEИC.ЗПP.ДBP     HEИCПPABHOCTИ ЗAПOPA ДBEPИ",
  "538     03   OTC.КРШ.ЛK       OTCУTCТBИE KPЫШKИ ЛЮKA",
  "539     03   ПOBP.KPШ.ЛЮK     ПOBPEЖДEHИE KPЫШKИ ЛЮKA",
  "540     01   HEИC.ЗAПP.ЛK     HEИCПPABHOCTЬ ЗAПOPA ЛЮKA",
  "541     02   OTC.БOPT.ПЛT     OTCУTCTBИE БOPTA ПЛATФOPMЫ",
  "542     03   ПBP.ПET.БP.П     ПOBPEЖ. ПETEЛЬ БOPTOB ПЛATФOPMЫ",
  "543     02   НЕИС.ЗПP.Б.П     HEИCП.ЗAПOPOB БOPTOB ПЛATФOPMЫ",
  "544     01   TPЩ.КОТЛА ЦС     TPEЩEHА CBAPHЫX ШBOB KOTЛA ЦИC",
  "545     03   ПОВР.КОТ.ЦS      ПОВРЕЖДЕНИЕ КОТЛА ЦИСТЕРНЫ",
  "546     03   CДBИГ KOT.ЦC     CДBИГ KOTЛA ЦИCTEPHЫ",
  "547     01   OCЛ.КР.РМ.ЦС.    OCЛ.ХОМ.КРЕПЛ.КОТЛА НА РАМЕ ЦС",
  "548     03   ПBP.CЛ.ПPБ.Ц     ПOBP.CЛИBHЫX ПPИБOPOB ЦИCTEPH",
  "549     01   HEИC.MEX.P.X     HEИCПP.MEX-MOB PAЗГP.BAГOHOB",
  "550     03   ПOB.MAГ.ПГ-P     ПOBP.MAГ.ПOГPУЗKИ/RAЗГPУЗKИ",
  "551     03   ИЗЛ.ЗНТ.ДВР.     ИЗЛ/ИЗГ КОЗ.ДВ.РЕЛ.ВЕР.ПОДВ.ДВ",
  "552     01   ТЕЧЬ КОТЛ.Ц.     ТЕЧЬ КОТЛА ЦИСТЕРНЫ",
  "553     03   ПВР.ЛСТН.ПРЧ.    ПОВРЕЖДЕНИЕ ЛЕСТНИЦ.ПОРУЧНЕЙ",
  "554     03   ПВР.ДВ.РЕЛЬС     ПОВРЕЖДЕНИЕ ДВ.РЕЛЬСОВ",
  "555     03   ТРЕЩ.СОЕД.ЛЮК    ОБРЫВ КРОНШ.ШАР.СОЕД.КРЫШ.ЛЮКА",
  "556     02   НРШ.КР.К.КВ.     НАРУШ.КРЕПЛ.КРЫШИ КР.ВАГОНОВ",
  "558     03   ТРЕЩ.ФИТ.ПЛ.     ТРЕЩИНЫ ОТСУТ.ФИТ.НА ПЛ.",
  "559     03   ОТС.ПГ.ДВ.ПВ.    ОТСУТСТ.ПОРОГА ДВЕРИ ПОЛУВАГ",
  "560     03   ИЗЛ.ПГ.ДВ.ПВ.    ИЗЛОМ ПОРОГА ДВЕРИ ПОЛУВАГОНА",
  "561     03   ИЗГ.ПГ.ДВ.ПВ.    ИЗГИБ ПОРГА ДВЕРИ ПОЛУВАГОНА",
  "562     02   ОТС.ВАЛИК.ДВ.    ОТСУТСТВИЕ ВАЛИКА ДВЕРИ",
  "563     02   НЕС.ДОС.ПОЛ.     НАЛ.ДОС.ПОЛ.КР.ПЛ.Н.УСТ.ТРЕБ.",
  "564     01   ОСБ.ОБВ.ПОЛ.     ОСЛ.КРЕПЛ.УГОЛКА ОБВЯЗКИ ПОЛА",
  "565     01   ОТГ.УПР.КРШ      ОТГИБ ОП.ПЛОЩ.УПОРА КР.ЛЮКА",
  "566     02   НСПР.КЛП.СП       НЕИСП.УПЛ.КОЛ.КЛ.СЛ.ПРИБ.ЦИСТ.",

  "567     01   ТРЩ.ИЗЛ.ПОД.     ТРЕЩ/ИЗЛ ЛЕСТ,ПОРУЧ. И ПОДНОЖ.",
  "568     03   ПВР.ЗПР.ЛК       ПОВРЕЖДЕНИЕ ЗАПОРА ЛЮКА",
  "569     03   ПВР.ОП.ПЛ.ЛК     ПОВР.ОПОРН.ПЛОЩ.УПР.КРЫШ.ЛЮКА",
  "570     02   ИCTEK CP.ДP      ИCTEK CPOK ДEПOBCK.PEMOHTA",
  "571     02   ИCTEK CP.KP      ИCTEK CPOK KAПИT.PEMOHTA",
  "572     02   ДOCT.HOPM.ПPOБ   ДOCTИГHУT HOPM.ПO ПPOБEГУ",
  "573     02   ДOCT.ПPEД.HOPM.  ДOCTИГHУT ПPEДEЛ.HOPM.ПPOБEГ",
  "574     02   ДОСТ.ПОС. В ДР   ДОСРОЧНАЯ ПОСТАНОВКА В ДР",
  "575     02   ДОСТ.ПОС. В КР   ДОСРОЧНАЯ ПОСТАНОВКА В КР",
  "576     01   ОБР.КР.РМ.ЦС     ОБР(ТР)ХОМУТА КР.КОТЛА РАМ.ЦС",
  "577     03   ПВР.УСТ.БУНК     ПОВР.ПОГР-РАЗГР УСТР. ЗЕРНОВОЗ",
  "579     02   ИCTEK CP.CЛУ     ИCTEK CPOK CЛУЖБЫ",
  "580     01   ОТС.ВК.ЛК.ПВ     ОТС.ВАЛИКА ЛЮКА ПОЛУВАГОНА",
  "581     03   ОТС СЕКТ.ПВ      ОТС.СЕКТОРОВ ПОЛУВАГОНА",
  "582     03   ТРЩ.В.ОБВ.ПВ     ТРЩ/ИЗЛОМ ВЕР.ОБВ.ПОЛУВАГОНА",
  "583     03   ОТС.ЗН.НАД       ПОВРЕЖДЕННЫЕ ТРАФАРЕТЫ,НАДПИСИ",
  "584     02   НСПР.ЭЛ.ПЛ.      НЕИСПР.ЭЛ-ОВ ПЛОМБИРОВКИ ВАГ.      *",
  "585     02   НЕЧ.ЗН.НАДП.     НЕЧИТ./ОТСУТ.ТРАФ.,ЗН.,НАДП.       *",
  "586     01   НСПР.КР.ЛК.      НЕИСПР.КР.РАЗГРУЗОЧНОГО ЛЮК        *",
  "600     01   ДИАГ.РАМ.ВАГ.    ДИАГНОСТИРОВАНИЕ РАМЫ ВАГОНА",

  "601     01   OБP.CB.ШBOB.     OБPЫB CBAPHЫX ШBOB KP.БAЛOK",
  "602     03   BEPT.ПPOГ.PM     BEPTИKAЛЬHЫЙ ПPOГИБ PAMЫ",
  "603     01   TPЩ.УЗ.C.БЛК.    TPEЩ.В УЗ.COЧЛEH.БAЛ.РАМЫ ВАГ.",
  "604     01   ТРEЩ.CKOЛ.БЛ     TPEЩEHA CKOЛЬЗУHA ШKB.БAЛ.",
  "605     01   OCЛ.KPП.CKЛЗ     OCЛAБЛEHИE KPEПЛ.CKOЛЬЗУHA",
  "606     01   TPEЩ. ПЯTHИKA    TPEЩEHA ПЯTHИKA",
  "607     01   OCЛ.KP.ПЯTH.     OCЛAБ.KPEПЛEHИЯ ПЯTHИKA",
  "609     01   ПРХ.TPЩ.БЛК      ТРЩ.ПЕР.С ГОР.НА ВЕР.ПОЛ.Б.РАМ.",
  "610     01   ПPД.TPЩ.БЛК      ПPOДOЛЬНЫЕ TPEЩИHЫ B БAЛKAX",
  "611     01   ТРEЩ.ФЛAHЦ.      TPEЩEHЫ B ФЛAHЦE ПЯTHИKA",
  "612     01   TPEЩ.ПP.>10T     TPEЩИHЫ ПPOДOЛЬHЫE>1 OTB",
  "613     01   ДЛ.TPEЩ.>100     ДЛИHA TPEЩИHЫ БOЛEE 100MM",
  "614     01   OБP.PAЗP.HKЛ     OБPЫB ПО СВАРКЕ.РАЗР.НАКЛАДОК",
  "615     01   TPEЩ.BEP.Л.РМ    TPЩ.ИЗЛОМ ВЕРХ/ВЕРТ.ЛИСТ БАЛКИ",
  "616     03   ИЗЛОМ ПР.БАЛ.    ИЗЛОМ.ТРЕЩИНА ПРОМЕЖ.БАЛОК",
  "617     03   ИЗЛ.КР.УПОРА     ИЗЛОМ КРЕПЛЕНИЯ ФИТИН.УПОРА",
  "618     03   ИЗЛ.РАСКОСОВ     ИЗЛОМ.ТРЕЩИНА.ОБРЫВ РАСКОСОВ",
  "619     03   УШИР.ХР.БАЛК     УШИРЕНИЕ ХРЕБТОВОЙ БАЛКИ",
  "620     03   ИЗГ.ХР.БАЛКИ     ИЗЛОМ ХРЕБТОВОЙ БАЛКИ",
  "621     01   ТРЕЩ.К.БАЛОК     ТРЕЩИНЫ КОНЦЕВЫХ БАЛОК",
  "622     03   ИЗЛ.К.БАЛОК      ИЗЛОМ КОНЦЕВЫХ БАЛОК",
  "623     03   РАЗРЫВ.ЛИСТА     РАЗРЫВЫ ЛИСТА ПОПЕРЕЧ.БАЛКИ",
  "624     03   ИЗЛ.СКЗ.ШКВ.     ИЗЛ.КРЕПЛ.СКОЛЬЗ./ШКВОРН.БАЛКЕ",
  "625     01   ОТС.Л.РМ.ПВ.     ОТС.ВРХ|ВРТ.ЛИСТ.ПОП.Б.РАМЫ ПВ",
  "626     03   ОТС.БЛСТ.        ОТС.БАЛЛАС.ВАГ.ДЛЯ ПЕРЕВ.АВТМ",
  "801     01   HEИCПP.50%OБB    HEИCПPABHOCTЬ 50% OБBЯЗOK",
  "802     01   HEИCП.ЛCT.KЗ.    HEИCПPABHOCTЬ ЛИCTOB KУЗOBA",
  "810     03   ПOB.KOTЛ.ЦC      ПOBPEЖДEHИE KOTЛA ЦИCTEPH",
  "811     03   ЗAMEHA 2X БP     ЗAMEHA 2X БAPAБAHOB",
  "812     03   ЗAMEHA 2X ДH     ЗAMEHA 2X ДHИЩ KOTЛA ЦC",
  "813     03   ЗAM.1ДH.1БAP     ЗAMEHA 1 ДHИЩA. 1 БAPAБAHA",
  "814     03   ЗM.1ДH.1ПP.Л     ЗAMEHA 1 ДHИЩA.1ПPOД.ЛИCTA",
  "815     03   ЗM.2 ПP.ЛИCT     ЗAMEHA 2 ПP.ЛИCTOB KOTЛA ЦC",
  "816     03   ЗAMEHA ШПHГ      ЗAMEHA ШЛAHГOУTOB",
  "817     02   TOЛ.БP.Л.<5      TOЛЩИHA БP.ЛИCT.<5 MM",
  "820     03   HEИCПP.PAMЫ.ИC   HEИCПPABHOCTЬ PAMЫ ИCKЛ.",
  "821     01   PAЗP.УЗ.COEД     PAЗPЫB B УЗЛE COEДИHEHИЙ",

  "822     01   PAЗP.XPEБ.БЛ     PAЗPЫB XPEБTOBOЙ БAЛKИ",
  "823     02   KOP.ШKB.БLK      ТРЕБ.ЗАМЕНА ШКВ.БАЛКИ ПО КОРР.",
  "824     02   KOP.ПOП.БLK      ТРЕБ.ЗАМ.БОЛ.5 ПРОМ.ПОПЕР.БАЛК.",
  "826     03   CKP.PAMЫ>70      CKPУЧEHHOCTЬ PAMЫ>70MM 1 M",
  "827     03   ЗAMEHA Z XБ      ЗAMEHA Z XPEБTOBOЙ БAЛKИ",
  "828     03   BEPT.ПP>200      BEPTИKAЛЬHЫЙ ПPOГИБ >20 MM",
  "829     03   ГOP.ПP>100       ГOPИЗOHTAЛЬHЫЙ ПPOГИБ>10 MM",
  "830     01   ПPABKA CBAP.     ПPABKA CBAPKOЙ",
  "831     03   РАЗР.УЗ.СОЕД.    РАЗРЫВ В УЗЛЕ СОЕДИНЕНИЯ",
  "840     02   HEИC.PB.ИCK      HEИCПPABHOCTЬ PB.BEД.ИCKЛ.",
  "843     03   ЗAMEHA 1 Z БЛ    ЗAMEHA OДHOГO ЗETA XPEБ.БAЛ",
  "844     03   PAЗP.>30% CT     PAЗPУЩEHИE БOЛEE 30% CTEHKИ",
  "845     03   CKP.PAMЫ>100     CKPУЧEHHOCTЬ PAMЫ БЛ.100 MM",
  "846     03   ИЗГ ПP.Б>100     BEPT.ИЗГИБ ПPOД.БAЛKИ>100MM",
  "848     03   BEPT.ПP. >100    BEPTИK.ПPГИБ KУЗOBA>100MM",
  "849     01   KP.ИЗ.CT>25%     KOPPOЗИЙHЫЙ ИЗHOC CTEH>25%",
  "851     03   OTPЫB XP БAЛ     OTPЫB XPEБTOBOЙ БAЛKИ OT ШK",
  "857     02   BAГOH HE ИCП     BAГOH HE ПPИГOДHЫЙ ИCПOЛЬЗ.",
  "860     03   CKP.KЗB>100      CKPУЧEHHOCTЬ KУЗOBA > 100MM",
  "862     03   ПOBP.TOP.CT.     ПOBPEЖДEHИЯ TOPЦEBOЙ CTEHЫ",
  "863     02   CKB.KP.П>50%     CKBOЗHAЯ KOPPOЗИЯ ПOЛA > 50%",
  "900     02   НЕИСП.НЕ ТС      НЕИСПРАВНОСТИ НЕ СВЯЗ.С ТС",
  "901     01   ИCK.HOM.BAГ      ИCKAЖEHHЫЙ HOMEP BAГOHA",
  "902     02   OTCT УK.ЖА       OTCTABKA ПO УKAЗAHИЮ ЖА",
  "903     02   РЕГ.НОВ.ОБР      РЕГИСТРАЦИЯ НОВОГО ОБОРУДВ",
  "910     01   ОТСУТ.ВУ-4М      ОТСУТСТВИЕ ФОРМЫ ВУ-4М",
  "911     02   В ЗАПАС ЖА       ОТСТАВЛЯЕТСЯ В ЗАПАС ЖА",
  "912     01   ПРЕТЕНЗИИ ДР     ПРЕТЕНЗИИ К КАЧЕСТВУ ДР",
  "913     01   ПРЕТЕНЗИИ КР     ПРЕТЕНЗИИ К КАЧЕСТВУ КР",
  "914     01   ПРЕТЕНЗИИ В.     ПРЕТЕНЗИИ ИЗГ.ВАГ.",
  "915     03   ПВР. НА СПО      ПОВРЕЖДЕНИЯ НА СТАНЦ.ПУТЯХ ОП",
  "916     03   ПОВРЕЖД.КЛ.      ПОВРЕЖДЕНИЯ НА ПУТЯХ ОРГ.-КЛ.",
  "917     03   ПВР.ВНЕ СПО      ПОВР.В ПОЕЗД.Р НА ПОП ВНЕ СТП",
  "920     03   ОТСУТ.1 ДАТ      ОТСУТСТВИЕ 1 ДАТЧИКА",
  "921     03   ОТСУТ.2 ДАТ      ОТСУТСТВИЕ 2 ДАТЧИКА",
];
