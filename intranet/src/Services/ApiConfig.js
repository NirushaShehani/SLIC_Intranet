//For Test Development

//const BASE_URL = "http://192.168.101.102:10155/LifeIntranetAPI/api/v1"; // Internal
//const BASE_URL = "http://122.255.4.187:10155/LifeIntranetAPI/api/v1"; // External

//For Live Development,
const BASE_URL = "http://192.168.101.111:10455/LifeIntranetAPI/api/v1"; // Internal

const Find_And_Replace = "http://lifenet:8081";

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
  CompanyNotices: "Working/GetCompanyNotice",
  EventGallery: "Working/GetEventGallery"
};

export { BASE_URL, ENDPOINTS, Find_And_Replace };
