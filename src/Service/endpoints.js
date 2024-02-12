const authEndpoints = {
  jwtVerify: "auth/jwt/verify",
  jwtRefresh: "auth/jwt/refresh/",
  jwtCreate: "auth/jwt/create/",
  autMe: "user/me/",
  authImg: "user/signature/",
  carriageGet: "/carriage/",

  getCarriageNumber: "/carriage_numbers/",
  dailyGetAll: "/daily/today/",
  dailyCreate: "/daily/create/",

  // phrase

  phraseList: (page) => `/phrase/list/?page=${page + 1}`,
  phraseUpdate: (carriageID) => `/phrase/${carriageID}/update/`,
  phraseDelate: (carriageID) => `/phrase/${carriageID}/delete/`,
  phraseDownload: (carriageID) => `/${carriageID}/phrase/download/`,

  // phrase wheel
  phraseWheelList: (page) => `/phrase_wheel/list/?page=${page + 1}`,
  phraseWheelGet: (carriageID) => `/${carriageID}/phrase_wheel/`,
  phraseWheelPost: (carriageID) => `/${carriageID}/phrase_wheel/`,
  phraseWheelDelete: (carriageID) => `/${carriageID}/phrase_wheel/`,

  // phrase cart
  phraseCartList: (page) => `/phrase_cart/list/?page=${page + 1}`,
  phraseCartGet: (carriageID) => `/${carriageID}/phrase_cart/`,
  phraseCartPost: (carriageID) => `/${carriageID}/phrase_cart/`,
  phraseCartDelete: (carriageID) => `/${carriageID}/phrase_cart/`,

  // pto
  dailyDelete: (id) => `/daily/delete/${id}`,
  ptoUpdate: (id) => `carriage/${id}/`,
  carriagePageGet: (page) => `carriage/?page=${page + 1}`,
  carriageDelete: (id) => `carriage/${id}/`,
  carriageGetOne: (id) => `carriage/${id}/`,
  carriagePut: (id) => `carriage/${id}/`,
  carriageCreate: "/carriage/create/",
  complectationCreate: (carriageID) => `/complectation/create/${carriageID}/`,
  complectationGet: (carriageID) => `/complectation/${carriageID}/`,
  vu23Dowland: (carriageID) => `/${carriageID}/vu23/download/`,

  // vu31
  vu31: (carriageID) => `/vu31/${carriageID}/`,
  vu31All: `/vu31/list/`,
  vu36All: `/vu36/list/`,
  vu36: (carriageID) => `/vu36/${carriageID}/`,

  // vu 50
  vu50: (carriageID) => `/vu50/${carriageID}/`,
  vu50Delate: (carriageID) => `/vu50/${carriageID}/`,
  vu50All: (page) => `/vu50/list/?page=${page + 1}`,

  // vu 51
  getVu51Default: (carriageID) => `/${carriageID}/vu51/`,
  vu51Delate: (carriageID) => `/${carriageID}/vu51/`,
  postInviteVu51: (carriageID) => `/${carriageID}/vu51/invite/`,
  getInviteVu51: (carriageID) => `/${carriageID}/vu51/invite/`,
  postAcceptedVu51: (carriageID) => `/${carriageID}/vu51/accepted/`,
  vu51All: (page) => `/vu51/list/?page=${page + 1}`,

  // vu 68
  vu68: (carriageID) => `/vu68/${carriageID}/`,
  vu68All: (page) => `/vu68/list/?page=${page + 1}`,

  // vu91
  vu91: (carriageID) => `/vu91/${carriageID}/`,
  vu91Delate: (carriageID) => `/vu91/${carriageID}/`,
  vu91All: (page) => `/vu91/list/?page=${page + 1}`,

  // vu92
  vu92: (carriageID) => `/vu92/${carriageID}/`,
  vu92Delate: (carriageID) => `/vu92/${carriageID}/`,
  vu92All: (page) => `/vu92/list/?page=${page + 1}`,

  // vu93
  vu93: (carriageID) => `/vu93/${carriageID}/`,
  vu93Delate: (carriageID) => `/vu92/${carriageID}/`,
  vu93All: (page) => `/vu93/list/?page=${page + 1}`,
};

export { authEndpoints };
