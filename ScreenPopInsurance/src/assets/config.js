var config = config ||{}

config.Wrapup=[{id:"00",description:"Select Wrapup"},
	      {id:"01",description:"Liability-A/C Balance/Cheq status/ A/c Status"},
{id:"02",description:"Liability-Charges Related:-AMB/Debit card Fee & others"},
{id:"03",description:"Liability-A/c Transaction & Statement Request"},
{id:"04",description:"Liability-Delieverables Cheque Book/Debit Card/Welcome kit/"},
{id:"05",description:"Liability-Transaction dispute Cash not deposited-AU Bank"},
{id:"06",description:"Liability-Transaction dispute Cash not dispensed-Other Bank"},
{id:"07",description:"Liability-POS Transaction Dispute (POS or E-COM)"},
{id:"08",description:"Liability-Net banking Related Queries"},
{id:"09",description:"Liability-Payment:-NEFT/RTGS/IMPS/CHEQUE (Both inward & outward)"},
{id:"10",description:"Liability-ATM :- PIN Generation (OTP not receive at ATM & IVR issue)/Excessive PIN Tried"},
{id:"11",description:"Liability-Insta Alets/Service SMS"},
{id:"12",description:"Liability-FD/RD Related"},
{id:"13",description:"Liability-Debit card hotlisting/Debit card reissuance"},
{id:"14",description:"Liability-Debit Card is not working"},
{id:"15",description:"Liability-UPI Related"},
{id:"16",description:"Assets-NOC/Return of Original documents/Permit renewal/FC letter/Statement"},
{id:"17",description:"Assets-Repayment/EMI Status/Payment/ACH"},
{id:"18",description:"Assets-Assets documents -LOD Request/Welcome letter"},
{id:"19",description:"Assets Related-Others:-Deferral Amount/Loan Disbursal Status"},
{id:"20",description:"Assets-Cibil Related"},
{id:"21",description:"Other-Leads CASA/FD/LOCKER/MSME/Wheels/GL/TWL/HL/PL/BL/Credit Card"},
{id:"22",description:"Others-Non a/c Related query"},
{id:"23",description:"Others-Au Employee Query- Self or Customer related"},
{id:"24",description:"Others-Call disconnected by customer/Blank Call/Voice Not Clear"},
{id:"25",description:"Others-Customer misbehave with agents."},
{id:"26",description:"Others-Branch Related Complaint-Misbehave/No response/Denied for any Request"},
{id:"27",description:"Other General Query-Branch address,Branch Contact #,A/C Maintainance"},
{id:"28",description:"Other-Verification Failure/Third Party Called/Insurance Department"},
{id:"29",description:"Other-Collection Care or HR Department Related"},
{id:"30",description:"Others-Fraud and Misuse"},
{id:"31",description:"Others-Test Call"},
{id:"32",description:"Net banking :-Login/Register related"},
{id:"33",description:"Net banking :-User ID/Password retrieval related"},
{id:"34",description:"Net banking :-Payee addition/deletion to make payment thru Net banking"},
{id:"35",description:"OTP Related :-Not getting OTP while using Net banking"},
{id:"36",description:"OTP Related :-Not getting OTP while making online Transaction"},
{id:"37",description:"OTP Related :-Not getting OTP while making Debit Card PIN at ATM"},
{id:"38",description:"Lead:- Mutual Fund/SIP/Life Insurance/General Insurance Related"},
{id:"39",description:"Query:- Mutual Fund/SIP/Life Insurance/General Insurance related"}];

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
{id:'MN_0023',Desc:'Global Menu'},
{id:'MN_0029',Desc:'Mobile/AccountNo Collection'},
{id:'MN_0040',Desc:'Expiry Date Collection'},
{id:'MN_0034',Desc:'Account number collection'},
{id:'MN_0031',Desc:'Customer ID Collection'},
{id:'MN_0037',Desc:'Debit Card Collection'},
{id:'MN_0041',Desc:'Green Pin Collection'},
{id:'MN_0042',Desc:'Green Pin Confirmation'},
{id:'MN_0048',Desc:'Loan Asset'},
{id:'NA',Desc:'NA'},
{id:'MN_0049',Desc:'Loan Services'}]

/*Get All Call back types*/
config.CBTypes = [{ id: 0, Description: 'None' }, 
{ id: 1, Description: 'Callback' }, 
{ id: 2, Description: 'Personal Callback' }];

config.feedback = [{id :'VETTA', id2:'ZENITH', id3:'ALTURA'}];

config.ProcessLabel = [{"labelData":"ANI","callVariable":"callVariable1","orderData":"1"},{"labelData":"Customer Name","callVariable":"callVariable2","orderData":"2"},{"labelData":"Language","callVariable":"callVariable3","orderData":"3"},{"labelData":"Validated","callVariable":"callVariable4","orderData":"4"},{"labelData":"Skill","callVariable":"callVariable5","orderData":"5"},{"labelData":"SR","callVariable":"text","orderData":"6"}];

config.Wrapupyesno= [{ id: '001', description: 'NO' }, 
{ id: '002', description: 'YES' }];

config.LCMURL = "https://lcm.aubank.in/lcmwebservice/contracts/lcmwcfservice.svc/";
//config.LCMURL = "https://CLUBLRLCMAPPPRD.aufadmgmt.com/lcmwebservice/contracts/lcmwcfservice.svc/";
config.CustomOBApiUrl="https://pccedatadr.aubank.in/AUFCC_OBAPI/Screenpop/";
//config.CustomApiUrl = "https://pccedatadr.aubank.in/AUF_CC_API/Screenpop/";
config.CustomApiUrl = "https://pccedatadr.aubank.in/AUF_API_INS/Screenpop/";
config.CustomInsuranceUrl = "https://pccedatadr.aubank.in/AUF_AdminAPI/api/Admin/";
//config.CustomApiUrl = "https://pccedatadr.aubank.in/AUF_API_CC/Screenpop/";
//config.CustomApiUrl = "https://localhost:53136/Screenpop/";
//config.CustomOBApiUrl="https://pccedatadr.aubank.in/AUFOBAPI/Screenpop/";