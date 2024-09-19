const BASE_URL = "http://192.168.101.21:10155/LifeIntranetAPI/api/v1";
//const BASE_URL = "http://203.115.11.236:10155/LifeIntranetAPI/api/v1";

const ENDPOINTS = {
  MONTHLYGWP: "Gwp/GetMonthlyGWP",
  MONTHLYCUMALATIVE: "Gwp/GetMonthlyCumalative",
  ISLANDRANKMDRT: "Mdrt/GetIslandRankMDRT",
  COTRANK: "Mdrt/GetCOTRankMDRT",
  TOTRANK: "Mdrt/GetTOTRankMDRT",
  LIFEMEMBER: "Mdrt/GetLifeMemberMDRT",
  BR_PERFORMACE_CT_WISE: "Gwp/GetBrPerformCatWise",
  GETContactBranch : "Contacts/GetBranchDir",
  POSTContact: "Contacts/GetTeleDir",
  AdminLogin: "Working/GetAdminLoging",
  SetIdeas: "Working/SetIdeas",
  SetSalasLeads: "Working/SetSalesLeads",
  IdeaHubData: "Working/GetIdeaHubData",
  GetSalesLeads: "Working/GetSalesLead",
  IdeaReadorNot: "Working/IdeaReadorNot",
  IdeaRemoveorNot: "Working/IdeaRemoveorNot",
  SalesLeadActive: "Working/SalesLeadActive",
  CompanyNotices: "Working/GetCompanyNotice"

};

export { BASE_URL, ENDPOINTS };
