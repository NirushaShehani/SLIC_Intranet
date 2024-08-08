// apiConfig.js

const BASE_URL = "http://203.115.11.236:10155/SalesTrackAppAPI/api/v1";

const ENDPOINTS = {
  GWPMONTH: "/Gwp/GetMonthlyGWP",
  GWPCUMALATIVE: "/Gwp/GetMonthlyCumalative",
  NationalAchievers: "/Mdrt/GetIslandRankMDRT",
  TOTRANK: "/Mdrt/GetTOTRankMDRT",
  COTRANK: "/Mdrt/GetCOTRankMDRT",
  LIFE_MEMBER_MDRT: "/Mdrt/GetLifeMemberMDRT",
};

export { BASE_URL, ENDPOINTS };
