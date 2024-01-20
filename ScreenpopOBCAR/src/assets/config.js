var config = config ||{}

config.Wrapup=[{id:"00",description:"Select Wrapup"},
	       {id:"01",description:"Non Customer enquiry"},
               {id:"02",description:"Non Customer Complaint"},
               {id:"03",description:"Assets Closure"},
               {id:"04",description:"Assets Repayment"},
               {id:"05",description:"Assets Documents"},
               {id:"06",description:"Assets others"},
               {id:"07",description:"Liability Deliverables"},
	       {id:"08",description:"Liability PIN & OTP"},
	       {id:"09",description:"Liability ATM & Debit Card"},
	       {id:"10",description:"Liability Net banking & Online transaction"},
	       {id:"11",description:"Liability others"},
	       {id:"12",description:"Call disconnected by customer"},
	       {id:"13",description:"AU Employee Query"},
		   {id:"14",description:"Agreement Loan Closed"},
		   {id:"15",description:"Call Back To Customer"},
		   {id:"16",description:"Cancelation"},
		   {id:"17",description:"Complaint"},
		   {id:"18",description:"Customer Not Contactable"},
		   {id:"19",description:"EMI U Ins Lead converted"},
		   {id:"20",description:"Endorsement"},
		   {id:"21",description:"Enquiry"},
		   {id:"22",description:"IPL Lead Converted"},
		   {id:"23",description:"Renewal Lead converted"},
		   {id:"24",description:"Leads under Follow up"},
		   {id:"25",description:"Lost Paid to Others"},
		   {id:"26",description:"Others"},
		   {id:"27",description:"Policy copy - Chola"},
		   {id:"28",description:"Policy copy - ABHI"},
		   {id:"29",description:"Refund"},
		   {id:"30",description:"Renewal already done"},
		   {id:"31",description:"Renewal Customer Not Interest"},
		   {id:"32",description:"Renewal Decline model"},
		   {id:"33",description:"Renewal Due Future Month "},
		   {id:"34",description:"Vehicle Seized Sold Theft"},
		   {id:"35",description:"Call drop"},
		   {id:"36",description:"Wrong number"},
		   {id:"37",description:"Covid Shield FD verification"},
		   
		   ];

config.MenuMaster=[{id:'MN_0001',Desc:'Main Menu'},
{id:'MN_0002',Desc:'Pin Collection_BlockCard'},
{id:'MN_0003',Desc:'Pin Collection_BankingServices'},
{id:'MN_0004',Desc:'Banking Services Menu'},
{id:'MN_0006',Desc:'Language Selection Menu'},
{id:'MN_0007',Desc:'Cheque Number Collection'},
{id:'MN_0008',Desc:'Old Pin Collection'},
{id:'MN_0009',Desc:'New Pin Collection'},
{id:'MN_0010',Desc:'New Pin Confirmation'},
{id:'MN_0011',Desc:'Cheque Number Collection'},
{id:'MN_0012',Desc:'Cheque Number Confirmation'},
{id:'MN_0013',Desc:'Non Registered Menu'},
{id:'MN_0014',Desc:'Mobile Number Collection'},
{id:'MN_0015',Desc:'General Menu'},
{id:'NA',Desc:'NA'},
{id:'MN_0023',Desc:'Global Menu'},
{id:'MN_0029',Desc:'Mobile/AccountNo Collection'},
{id:'MN_0040',Desc:'Expiry Date Collection'},
{id:'MN_0034',Desc:'Account number collection'},
{id:'MN_0031',Desc:'Customer ID Collection'},
{id:'MN_0037',Desc:'Debit Card Collection'},
{id:'MN_0041',Desc:'Green Pin Collection'},
{id:'MN_0042',Desc:'Green Pin Confirmation'}]

/*Get All Call back types*/
config.CBTypes = [{ id: 0, Description: 'None' }, 
{ id: 1, Description: 'Callback' }, 
{ id: 2, Description: 'Personal Callback' }];
config.Wrapupyesno= [{ id: '001', description: 'NO' }, 
{ id: '002', description: 'YES' }];


 
//config.LCMURL = "http://10.57.9.52/lcmwebservice/contracts/lcmwcfservice.svc/";
config.LCMURL="https://CLUBLRLCMAPPPRD.aufadmgmt.com/AULCMWebservice/Contracts/LCMWCFService.svc/";
//config.LCMURL="https://lcm.aubank.in/AULCMWebservice/Contracts/LCMWCFService.svc/";
//config.CustomApiUrl = "http://10.57.6.162/AUFAPI/Screenpop/";
//config.CustomApiUrl = "http://172.20.6.125/AUFAPI/Screenpop/";
config.CustomApiUrl = "https://pccedata.aubank.in/AUFAPICAR/Screenpop/";
config.CustomOBApiUrl="https://pccedata.aubank.in/AUFOBAPI/Screenpop/";