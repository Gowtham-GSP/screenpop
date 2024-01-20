var config = config ||{}


config.reasondefault=[{id:"00",description:"Select Wrapup"},

	      {id:"01",description:"Liability-A/C Balance/Cheq status/ A/c Status"},
{id:"02",description:"Liability-Debit card is not working (ATM/Online)/Status"},
{id:"03",description:"Liability-Charges Related:-AMB/Debit card Fee & others"},
{id:"04",description:"Liability-A/c Transaction & Statement Request"},
{id:"05",description:"Liability-Delieverables Cheque Book/Debit Card/Welcome kit/"},
{id:"06",description:"Liability-Transaction dispute Cash not deposited-AU Bank"},
{id:"07",description:"Liability-Transaction dispute Cash not dispensed-Other Bank"},
{id:"08",description:"Liability-POS Transaction Dispute (POS or E-COM)"},
{id:"09",description:"Liability-Net banking Related Queries"},
{id:"10",description:"Liability-Payment:-NEFT/RTGS/IMPS/CHEQUE (Both inward & outward)"},
{id:"11",description:"Liability-Online transacton:-OTP Related"},
{id:"12",description:"Liability-ATM :- PIN Generation (OTP not receive at ATM & IVR issue)/Excessive PIN Tried"},
{id:"13",description:"Liability-Insta Alets/Service SMS"},
{id:"14",description:"Liability-Fraud call intimation/Misuse in a/c"},
{id:"15",description:"Liability-Debit card hotlisting/Debit card reissuance"},
{id:"16",description:"Liability-Debit Card is not working"},
{id:"17",description:"Liability Others"},
{id:"18",description:"Assets-NOC/Return of Original documents/Permit renewal/FC letter/Statement"},
{id:"19",description:"Assets-Repayment/EMI Status/Payment/ACH"},
{id:"20",description:"Assets-Assets documents -LOD Request/Welcome letter"},
{id:"21",description:"Assets Related-Others:-Deferral Amount/Loan Disbursal Status"},
{id:"22",description:"Assets-Others"},
{id:"23",description:"Other-Leads CASA/FD/LOCKER/MSME/Wheels/GL/TWL/HL/PL/BL/Credit Card"},
{id:"24",description:"Others-Non a/c Related query"},
{id:"25",description:"Others-Au Employee Query- Self or Customer related"},
{id:"26",description:"Others-Call disconnected by customer/Blank Call/Voice Not Clear"},
{id:"27",description:"Others-Customer misbehave with agents."},
{id:"28",description:"Others-Branch Related Complaint-Misbehave/No response/Denied for any Request"},
{id:"29",description:"Other General Query-Branch address,Branch Contact #,A/C Maintainance"},
{id:"30",description:"Other-Verification Failure/Third Party Called/Insurance Department"},
{id:"31",description:"Other-Collection Care or HR Department Related"},
{id:"32",description:"Others-Fraud and Misuse"},
{id:"33",description:"Others-Go Green initiative"},
{id:"34",description:"Net banking :-Login/Register related"},
{id:"35",description:"Net banking :-User ID/Password retrieval related"},
{id:"36",description:"Net banking :-Funds Transfer thru IMPS/NEFT/RTGS related"},
{id:"37",description:"Net banking :-Payee addition/deletion to make payment thru Net banking"},
{id:"38",description:"OTP Related :-Not getting OTP while using Net banking"},
{id:"39",description:"OTP Related :-Not getting OTP while making online Transaction"},
{id:"40",description:"OTP Related :-Not getting OTP while making Debit Card PIN at ATM"},
{id:"41",description:"Debit Card is Not working :-Not able to make online transaction at Merchant Website"},
{id:"42",description:"Lead:- Mutual Fund/SIP/Life Insurance/General Insurance Related"},
{id:"43",description:"Query:- Mutual Fund/SIP/Life Insurance/General Insurance related"}];

config.reasonflow=[{id:'00',description:'Select Reason'},
{id:'AUF_MN_0001',description:'Main Menu'},
{id:'AUF_MN_0002',description:'Sub Menu'}]

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
			   {id:"38",description:"Others"}];

config.MenuMaster=[{id:'AUF_MN_0001',Desc:'Main Menu'},
{id:'AUF_MN_0002',Desc:'Sub Menu'}]

/*Get All Call back types*/
config.CBTypes = [{ id: 0, Description: 'None' }, 
{ id: 1, Description: 'Callback' }, 
{ id: 2, Description: 'Personal Callback' }];


//config.LCMURL="http://10.57.6.161/lcmwebservice/contracts/lcmwcfservice.svc/";
config.LCMURL="https://CLUBLRLCMAPPPRD.aufadmgmt.com/AULCMWebservice/Contracts/LCMWCFService.svc/";
//config.LCMURL="https://lcm.aubank.in/AULCMWebservice/Contracts/LCMWCFService.svc/";
/*config.CustomApiUrl="http://10.57.6.162/AUFAPI/Screenpop/";
config.CustomOBApiUrl="http://10.57.6.162/AUFOBAPI/Screenpop/";*/
config.CustomApiUrl="https://pccedata.aubank.in/AUF_APIIB/Screenpop/";
config.CustomOBApiUrl="https://pccedata.aubank.in/AUF_MOBAPI_CAR/Screenpop/";