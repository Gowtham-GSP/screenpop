var config = config ||{}

config.reasondefault=[{id:"00",description:"Select Default Reason"},

	      {id:"01",description:"Bounce due to technical issue"},
{id:"02",description:"Prefer Cash Payment"},
{id:"03",description:"Due date is before salary"},
{id:"04",description:"Payment by third Party"},
{id:"05",description:"Intentional Defaulter"},
{id:"06",description:"Dispute"},
{id:"07",description:"Death Case"},
{id:"08",description:"Change in Bank Account"},
{id:"09",description:"Medical issue"},
{id:"10",description:"Job loss"},
{id:"11",description:"Business Loss"},
{id:"12",description:"Instrument not available"},
{id:"13",description:"BT"},
{id:"14",description:"Bank Corrupt"},
{id:"15",description:"HBRB Case"}];

config.reasonflow=[{id:'00',description:'Select Flow Reason'},
{id:"01",description:"Travel & Transport/Taxi-Auto Driver"},
{id:"02",description:"School/Education Institutes"},
{id:"03",description:"Shops Garments/Jewelry Business/Perishable"},
{id:"04",description:"Goods/Manufactures/Exporters"},
{id:"05",description:"Building Material Supplier/Civil Construction/Railway Contractor"},
{id:"06",description:"FMCG Retail/Daily Usage Eateries Goods retailer/Traders"},
{id:"07",description:"Catering/Food products/Tent house"},
{id:"08",description:"Vegetable Business/Mandi/Dairy & allied"},
{id:"09",description:"Farmer/Agriculture/Laghu Udyogs"},
{id:"10",description:"Private Job/Salaried"},
{id:"11",description:"Hospital"},
{id:"12",description:"Hotel"},
{id:"13",description:"Other"}];

config.Wrapup=[{id:"00",description:"Select Wrapup"},
			   {id:"01",description:"CALLBK - Call back"},
               {id:"02",description:"CBFP - Call Back Follow-up"},
               {id:"03",description:"Critic - Critical_Accidental_OPS"},
               {id:"04",description:"CRP - Check Present"},
               {id:"05",description:"Death - Death Case"},
               {id:"06",description:"Dialer - NC"},
               {id:"07",description:"DIB - Direct In Branch"},
			   {id:"08",description:"Disput - Dispute"},
			   {id:"09",description:"DROP - NC"},
			   {id:"10",description:"EXEINT - Branch Executive Interaction"},
			   {id:"11",description:"FPTP - Future Promise to Pay"},
			   {id:"12",description:"FR - Field Referral"},
			   {id:"13",description:"NCB - Notice_Call Back"},
			   {id:"14",description:"NCBPT - NC Beep tone"},
               {id:"15",description:"NCDNE - NC Does not exist/Not in Servi"},
               {id:"16",description:"NCHU - NC Hung up"},
               {id:"17",description:"NCIVR - NC IVR playing"},
               {id:"18",description:"NCLRNR - NC Line ringing not responding"},
               {id:"19",description:"NCNIS - NC"},
               {id:"20",description:"NCNRCH - NC Not reachable"},
			   {id:"21",description:"NCSWOF - NC Switched Off"},
			   {id:"22",description:"NCWN - NC Wrong Number"},
			   {id:"23",description:"NDIS - Notice_Dispute Case"},
			   {id:"24",description:"NEFT - AU Account Payment"},
			   {id:"25",description:"NFPTP - Notice_Future Promise to Pay"},
			   {id:"26",description:"NPTP - Notice_Promise to Pay"},
			   {id:"27",description:"NPU - Notice_Pick Up"},
               {id:"28",description:"NQRY - Notice related information"},
               {id:"29",description:"NRTP - Notice_Refuse to Pay"},
               {id:"30",description:"NVS - Notice_Vehicle Sold"},
               {id:"31",description:"OPU - Online Pick-Up"},
			   {id:"32",description:"PTP - Promise to Pay"},
			   {id:"33",description:"RP - Reported Paid"},
			   {id:"34",description:"RPU - Regular Pick Up"},
			   {id:"35",description:"RTP - Refuse to pay"},
			   {id:"36",description:"TPC - Third Party Contact"},
			   {id:"37",description:"Busy"},
			   {id:"38",description:"Others"},
			   ];

config.MenuMaster=[{id:'AUF_MN_0001',Desc:'Main Menu'},
{id:'AUF_MN_0002',Desc:'Sub Menu'}]

/*Get All Call back types*/
config.CBTypes = [{ id: 0, Description: 'None' }, 
{ id: 1, Description: 'Callback' }, 
{ id: 2, Description: 'Personal Callback' }];

config.LCMURL="https://lcm.aubank.in/AULCMWebservice/Contracts/LCMWCFService.svc/";
/*config.CustomApiUrl="http://10.57.6.162/AUFAPI/Screenpop/";
config.CustomOBApiUrl="http://10.57.6.162/AUFOBAPI/Screenpop/";*/
config.CustomApiUrl="https://pccedatadr.aubank.in/AUF_APIIB/Screenpop/";
//config.CustomOBApiUrl="https://pccedata.aubank.in/AUF_OBAPI/Screenpop/";
config.CustomOBApiUrl="https://pccedatadr.aubank.in/AUFMOBAPI_COLLECTION/Screenpop/";
