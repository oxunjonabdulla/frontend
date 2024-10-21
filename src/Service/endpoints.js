const authEndpoints = {
  jwtVerify: "auth/jwt/verify",
  jwtRefresh: "auth/jwt/refresh/",
  jwtCreate: "auth/jwt/create/",
  autMe: "user/me/",
  authImg: "user/signature/",
  carriageGet: "/carriage/",

  getCarriageNumber: "/carriage_numbers/",
  dailyGetAll: "/daily/today/",
  dailyAll: "/daily/",
  dailyCreate: "/daily/create/",
  dailyExitImage: (carriageID) => `/daily/${carriageID}/update_exit_images/`,

  //AVTOREJIM

  avtoRejim: `/autorejim/`,
  avtoRejimId: (carriageID) => `/autorejim/${carriageID}/`,

  //razobkran

  razobKranGet: `/razobkran/list/`,
  razobKranPost: (carriageID) => `/razobkran/${carriageID}/`,

  rezervuarGet: `/rezervuar/list/`,
  rezervuarPost: (carriageID) => `/rezervuar/${carriageID}/`,
  // Rukva

  rukvaGet: `/rukva/list/`,
  rukvaPost: (carriageID) => `/rukva/${carriageID}/`,
  // Regular

  regularGet: `/regulyator/`,
  regularPost: (carriageID) => `/regulyator/${carriageID}/`,

  // phrase
  collectActGetAll: `/collectact/list/`,
  collectActPostFront: (carriageID) => `/${carriageID}/collect/act/front/`,
  collectActPostBack: (carriageID) => `/${carriageID}/collect/act/back/`,
  // wheel
  wheelActGetAll: `/kolesoact/list/`,
  wheelActPostFront: (carriageID) => `/${carriageID}/koleso/act/front/`,
  wheelActPostBack: (carriageID) => `/${carriageID}/koleso/act/back/`,
  deleteActWheel: (carriageID) => `/${carriageID}/koleso/act/`,

  // dalolatnoma
  aravaActGetAll: `/aravaact/list/`,
  aravaActDelete: (carriageID) => `/${carriageID}/arava/act/`,
  aravaActPostFrontID: (carriageID) => `/${carriageID}/collect/act/`,
  aravaActPostFront: (carriageID) => `/${carriageID}/arava/act/front/`,
  aravaActPostBack: (carriageID) => `/${carriageID}/arava/act/back/`,
  // dalolatnoma Avtobirikmaa

  birikmaActGetAll: `/avtoact/list/`,
  birikmaActPostFront: (carriageID) => `/${carriageID}/act/front/`,
  birikmaActPostBack: (carriageID) => `/${carriageID}/act/back/`,
  birikmaActdelete: (carriageID) => `/${carriageID}/act/`,

  phraseList: `/phrase/list/`,
  phraseUpdate: (carriageID) => `/phrase/${carriageID}/`,
  phraseDelate: (carriageID) => `/phrase/${carriageID}/`,
  phraseDownload: (carriageID) => `/${carriageID}/phrase/download/`,

  // phrase wheel
  phraseWheelList: `/phrase_wheel/list/`,
  phraseWheelGet: (carriageID) => `/${carriageID}/phrase_wheel/`,
  phraseWheelPost: (carriageID) => `/${carriageID}/phrase_wheel/`,
  phraseWheelDelete: (carriageID) => `/${carriageID}/phrase_wheel/`,

  // phrase cart
  phraseCartList: `/phrase_cart/list/`,
  phraseCartGet: (carriageID) => `/${carriageID}/phrase_cart/`,
  phraseCartPost: (carriageID) => `/${carriageID}/phrase_cart/`,
  phraseCartDelete: (carriageID) => `/${carriageID}/phrase_cart/`,

  // pto
  dailyDelete: (id) => `/daily/delete/${id}`,
  ptoUpdate: (id) => `carriage/${id}/`,
  carriagePageGet: `carriage/`,
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

  // vu_36
  vu36All: `/vu36/`,
  vu36: (carriageID) => `/vu36/${carriageID}/`,
  // vu_54
  vu54All: `/vu54/`,
  vu54ById: (id) => `/vu54/${id}/`,

  vu47All: `/vu47/list/`,

  vu47: (carriageID) => `/vu47/detail/${carriageID}/`,
  vu47Back: (carriageID) => `/vu47/back/update/${carriageID}/`,
  vu47Post: `/vu47/create/`,

  // vu 50
  vu50: `/vu50/list/`,
  vu50Delate: (carriageID) => `/vu50/detail/${carriageID}/`,
  vu50All: (page) => `/vu50/list/?page=${page + 1}`,

  // vu 51
  getVu51Default: (carriageID) => `/${carriageID}/vu51/`,
  vu51Delate: (carriageID) => `/${carriageID}/vu51/`,
  postInviteVu51: (carriageID) => `/${carriageID}/vu51/invite/`,
  getInviteVu51: (carriageID) => `/${carriageID}/vu51/invite/`,
  postAcceptedVu51: (carriageID) => `/${carriageID}/vu51/accept/`,
  createVu51: `/vu51/create/`,
  vu51All: (page) => `/vu51/list/?page=${page + 1}`,
  // vu 53
  getVu53All: `/vu53/`,
  vu53IDPrihod: (id) => `/vu53_prihod/${id}/`,
  postVu53Prihod: `/vu53_prihod/create/`,

  vu31TOVu10: (carriageID) => `/vu31/${carriageID}/transfer_to_vu10/`,
  vu10: "/vu10/",
  // vu 68
  vu68: (carriageID) => `/vu68/${carriageID}/`,
  vu68All: `/vu68/list/`,

  // vu91
  vu90: `/vu90/`,
  vu90Id: (carriageID) => `/vu90/${carriageID}/`,
  vu90All: `/vu90/list/`,
  // vu91
  vu91: `/vu91/`,
  vu91Delate: (carriageID) => `/vu91/${carriageID}/`,
  vu91All: `/vu91/list/`,

  // vu92
  vu92: (carriageID) => `/vu92/${carriageID}/`,
  vu92Delate: (carriageID) => `/vu92/${carriageID}/`,
  vu92All: (page) => `/vu92/list/?page=${page + 1}`,

  // vu93
  vu93: `/vu93/`,
  vu93Delate: (carriageID) => `/vu93/${carriageID}/`,
  vu93All: (page) => `/vu93/list/?page=${page + 1}`,

  // defestoskop
  defestoskopList: `/defestoskop/`,
  defestoskopId: (id) => `/defestoskop/${id}/`,
  postDefectoscope: `/defestoskop/`,

  vu22WithId: (id) => `/vu22/maintenance_record/${id}/`,
  vu22get: `/vu22/maintenance_records/list/`,

  // vu32

  vu32List: "/vu32/",
  vu32Id: (carriage_number) => `/vu32/${carriage_number}/`,

  generalReport: "/general-report-list/",
  generalReportCreate: "/general-report/",

  signature: "/unsigned-logs/",
  signatureSigns: (signData) =>
    `/sign-log/${signData.log_type}/${signData.identifier}/${signData.user_role}/`,

  // vu32 current repair
  vu31Current: (carriageID) => `/vu31-current/${carriageID}/`,
  vu31CurrentAll: `/vu31-current/list/`,

  // vu36 current repair
  vu36Current: (carriageID) => `/vu36-current/${carriageID}/`,
  vu36CurrentAll: `/vu36-current/`,
};

export { authEndpoints };
