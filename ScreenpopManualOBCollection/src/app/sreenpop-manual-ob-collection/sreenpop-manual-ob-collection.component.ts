import { Component, NgZone } from '@angular/core';
import { CommonWebApiService } from '../common-web-api.service';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sreenpop-manual-ob-collection',
  templateUrl: './sreenpop-manual-ob-collection.component.html',
  styleUrls: ['./sreenpop-manual-ob-collection.component.css']
})
export class SreenpopManualObCollectionComponent {

  Obhistory = [];
	
	Obloanval = {};
    OutBoundPopData:any;
    CallScreenData :any;
    //CallData = {};
	newani = true;
	oldani = false;
	addloannum = false;
	isOfferData = true;
    isValid :any;
    cbflag = false;
    obflag = true;
	flowflag = true;
	aniflag = false;
	btnText='Account Details';
    xmlbusObj1:any
    loginID = '';
    agentname = '';
    loginExtenstion = '';
    uniqueId = '';
     xmlbusObj:any
    // CBTypes = config.CBTypes;
    // selectedCBType = CBTypes[0];
    CBTypes:any;
    selectedCBType:any;
     today = new Date();
    CBEndDate = this.today;
    CBStartDate = this.today;
    // WrapupTypes = config.Wrapup;
    WrapupTypes:any;
	teamname = '';
	wrapupMaster = [];
  
	selectedWraup :any;
	selectedLoan :any;
  
	// var $ctrl=this;
	// reasondefault=config.reasondefault;
  reasondefault:any;
    // selecteddefaultreason= reasondefault[0];
    selecteddefaultreason:any;
	// reasonflow=config.reasonflow;
  reasonflow:any;
    // selectedflowreason= reasonflow[0];
    selectedflowreason:any;  CBStartDateOption:any;  CBStartDatePopup:any;  OpenCBStartDate:any;  CBEndDateOption:any;  CBEndDatePopup:any;
    OpenCBEndDate:any;  receivedmessage:any;  errormessage:any; offerData:any;  agentRemarks:any;  callbackRemarks:any;  BusOutcome:any; 
    selectedoutCome:any; ParentBusOutcome:any;  selectedParent:any;  CBModes:any;  selectedCBMode:any; isOBRemarks:any;

    outcomeerror:any;  agentReasonDefaultRemarks :any; agentReasonFlowRemarks:any;  modalInstance:any; cberror:any
  dates: any; timestamp:any; modalService:any; modalTemplate:any;

    constructor(private _httpClinet: CommonWebApiService,private zone: NgZone){
      console.log(window["config"]);
    this.CBTypes = window["config"].CBType;
    this.selectedCBType=window["config"].CBType
    this.WrapupTypes=window["config"].Wrapup
    this.reasondefault=window["config"].reasondefault[0]
    this.selecteddefaultreason=window["config"].reasondefault[0]
    this.reasonflow=window["config"].reasonflow
    this.selectedflowreason=window["config"].reasonflow[0]
    }

    setDate () {
      // Start Date date configuration:
      
     var fromday = new Date();
      
     this.CBStartDate = fromday;
      
     this.CBEndDate = fromday;
      
     this.CBStartDateOption = {
         timepickerOptions: { readonlyInput: false, showMeridian: false },
         datepickerOptions: {
             minDate: fromday,
             maxDate: null
         }
     };
      
     this.CBStartDatePopup = { opened: false };
      
     this.OpenCBStartDate = (e: any) => {
         var fromday = new Date();
      
         this.CBStartDateOption = {
             timepickerOptions: { readonlyInput: false, showMeridian: false },
             datepickerOptions: {
                 minDate: fromday,
                 maxDate: null
             }
         };
      
         e.preventDefault();
         e.stopPropagation();
      
         this.CBStartDatePopup.opened = true;
     };
      
     // End Date date configuration:
      
     var today = new Date();
      
     this.CBEndDateOption = {
         timepickerOptions: { readonlyInput: false, showMeridian: false },
         datepickerOptions: {
             minDate: today,
             maxDate: null
         }
     };
      
     this.CBEndDatePopup = { opened: false };
      
     this.OpenCBEndDate = (e: any) => {
         this.CBEndDateOption = {
             timepickerOptions: { readonlyInput: false, showMeridian: false },
             datepickerOptions: {
                 minDate: today,
                 maxDate: null
             }
         };
      
         e.preventDefault();
         e.stopPropagation();
      
         this.CBEndDatePopup.opened = true;
     };
     
     };
 
     public receiveMessage(event: any): void {

      try {
        if (event.data != undefined && event.data != '') {
          //alert(event.data);
  
          //debugger;
           console.log('event.data:custom app ***************');
          // console.log(event.data);
          this.receivedmessage = JSON.parse(event.data);
  
          console.log(this.receivedmessage.type);
          switch (this.receivedmessage.type) {
                
            case 'ANIPreviewOutBound': {
              /*Load agent information from finesse */ 
              let calldata =this.receivedmessage;// JSON.parse(this.receivedmessage.data);
               calldata = JSON.parse(event.data);
              if (calldata.type == "CallerIDForPreviewOutBound") {
                  var OutBoundPopData1 = {
                      Callerid11: calldata.CallerID
                  };
                  
                      this.OutBoundPopData = OutBoundPopData1;
                 
              }                           
              break;
            }
            case 'GetDPACCEPTCallValues': {
              debugger;
              // this.appService.LoadAgentDetails(this.receivedmessage)
              let calldata =this.receivedmessage;
                
              calldata = JSON.parse(event.data);
       
              break;
            }
            case 'OutboundEndData': {
              debugger;
              // this.appService.LoadAgentDetails(this.receivedmessage)
              let calldata =this.receivedmessage;
               calldata = JSON.parse(event.data);
				
              if (calldata.type == "OnOutboundEndCall") {
                  //update call data datetime in to custom db
                  if (this.OutBoundPopData != null && this.OutBoundPopData != undefined) {
                      
                  }
              } 
              break;
            }
            case 'OnMakeOutCallvalues': {
              debugger;
              // this.appService.LoadAgentDetails(this.receivedmessage)
              let calldata =this.receivedmessage;
              
                calldata = JSON.parse(event.data);
				//this.agentname = calldata.agentName
             //  this.loginID = calldata.agentID;
				var CallANI=calldata.ANI;
				var generateUniquenum = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
          var uniquenumber = generateUniquenum();
                        this.uniqueId = uniquenumber;
                        this._httpClinet.GETOutboundHistoryDetails(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
                          next: (Res: any) => {
                            console.log("api response", Res);
                            this.Obhistory = Res.data;
                            console.log(Res.data);       
                                      
                          },
                          error: (err: any) => {
                            
                            this.errormessage = 'Unable to load Outbound History data: ' + err.message;
                           console.log(this.errormessage, err);
                          }
                        });

				 this.obflag = false;
				 this.flowflag = false;
				//alert(calldata.ANI);
				if(CallANI !=null)
				{
					this.aniflag=true;
			        	
          this._httpClinet.GetLoanNoData(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
            next: (Res: any) => {
              console.log("api response", Res);
              this.Obloanval = Res.data;
                                        
            },
            error: (err: any) => {
              
              this.errormessage = 'Unable to load Loannumbers codes: ' + err.message;
             console.log(this.errormessage, err);
            }
          });

				
				}
				else{
					this.aniflag=false;
				}
                if (calldata.type == "OnMakeOutCall" && this.aniflag==true) {
					
  
                  this._httpClinet.GetAccountDetails(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
                    next: (Res: any) => {
                      console.log("api response", Res);
                               
                      this.offerData = Res.data;
                      console.log("Offer Data respone Length "+this.offerData.length);       
                      if(this.offerData.length  == 0)
                      {
                         console.log("Inside If for length");
                        this.btnText='No Data Avilable';
                        this.isOfferData=true;
                       }
                      else{
                        this.isOfferData=false;
                      }
                      console.log(this.offerData);
                   console.log("offerData"+JSON.stringify(this.offerData));
                    },
                    error: (err: any) => {
                      
                      this.errormessage = 'Unable to load Outbound History data: ' + err.message;
                     console.log(this.errormessage, err);
                    }
                  });         


					//alert(CallANI);
          this._httpClinet.GetScreenpopData(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
            next: (Res: any) => {
              console.log("api response", Res);
              this.CallScreenData = Res.data;
					 
              if(this.CallScreenData.length > 0)
              {
              this.OutBoundPopData.CustName=this.CallScreenData[0].CustomerName;
              this.OutBoundPopData.ANI=this.CallScreenData[0].ANI;
              
              
              
              if(!this.Obloanval)
              {
                
              this.oldani = true;
              this.addloannum = true;
              
              this.newani = false;
              this.OutBoundPopData.newloan = false;
              this.OutBoundPopData.oldLoanNum=this.Obloanval;
              
              }
              else
              {
                this.OutBoundPopData.LoanNum = '';
                this.newani = true;
                this.oldani = false;
                this.OutBoundPopData.newloan = true;
              }
              //this.agentRemarks=this.CallScreenData[0].Remarks;
              this.agentRemarks='';
              // this.obflag = false;
              
              }
              else{
                this.newani = true;
                this.oldani = false;
                this.errormessage = 'No history found for thi call';
              }                 
            },
            error: (err: any) => {
              
              this.errormessage = 'Unable to load Outbound History data: ' + err.message;
             console.log(this.errormessage, err);
            }
          });


                
                   
                }
				
  
              break;
            }
            case 'OutboundData': {
              debugger;
              // this.appService.LoadAgentDetails(this.receivedmessage)
              let calldata =this.receivedmessage;
             
               calldata = JSON.parse(event.data);
                this.agentname = calldata.agentName
                this.loginID = calldata.agentID;
                this.loginExtenstion = calldata.Extension;
		this.teamname = calldata.TeamName;
		//alert("From Method calling UserState");
                if (calldata.state == "NOT_READY" || calldata.state == "READY") {
                    
                        this.OutBoundPopData = {};
						 this.CallScreenData = {};
						this.Obloanval = {};
						this.addloannum = true;
					
					this.newani = true;
					this.OutBoundPopData.newloan = true;
					this.OutBoundPopData.oldLoanNum = {};
						
						this.oldani = false;
						this.getWrapupCodes();
						//this.selectedWraup = this.WrapupTypes[0];
                        //this.isOutcomeEnable = true;
                        //this.IsOutbound = false;
                        //this.IsInbound = false;
                        //this.IsPredictiveOutbound = false;
                    


                    // -------resetting values---- //
                    var today = new Date();
                    this.CBEndDate = today;
                    this.CBStartDate = today;
                    //jQuery("#OBHistorygrid").jqGrid('clearGridData');
                    //jQuery("#OBHistorygrid").jqGrid('setGridParam', { data: [] });
                   // jQuery("#OBHistorygrid").trigger('reloadGrid');


                    this.callbackRemarks = "";
                    this.agentRemarks = "";
                    if (this.BusOutcome != null && this.BusOutcome != undefined) {
                        this.selectedoutCome = this.BusOutcome[0];
                    }
                    if (this.ParentBusOutcome != null && this.ParentBusOutcome != undefined) {
                        this.selectedParent = this.ParentBusOutcome[0];
                    }
                    if (this.CBModes != null && this.CBModes != undefined) {
                        this.selectedCBMode = this.CBModes[0];
                    }
                    if (this.CBTypes != null && this.CBTypes != undefined) {
                        this.selectedCBType = this.CBTypes[0];
                    }



                }
              
  
              break;
            }
            case 'LoggedInUserData': {
              /*Load agent information from finesse */ 
              let calldata =this.receivedmessage;// JSON.parse(this.receivedmessage.data);
             calldata = JSON.parse(event.data);
              this.loginID = calldata.agentID;
      this.teamname = calldata.TeamName;
//alert("Team Name:"+calldata.TeamName);

this._httpClinet.GETAllOutboundHistoryDetails(window['config'].CustomOBApiUrl,this.loginID).subscribe({
  next: (Res: any) => {
    console.log("api response", Res);
    this.Obhistory = Res.data;          
  },
  error: (err: any) => {
    
    this.errormessage = 'Unable to load Outbound History data: ' + err.message;
   console.log(this.errormessage, err);
  }
});
   this.getWrapupCodes();
               
              
              break;
            }
            case 'UserData': {
              /*Load agent information from finesse */ 
              let calldata =this.receivedmessage;// JSON.parse(this.receivedmessage.data);
             
                 calldata = JSON.parse(event.data);
                this.agentname = calldata.agentName;
                this.loginID = calldata.agentID;
                this.loginExtenstion = calldata.Extension;
		this.teamname = calldata.TeamName;
		//alert("From Method calling UserState");
                if (calldata.state == "NOT_READY" || calldata.state == "READY") {
                    
                        this.OutBoundPopData = {};
						this.CallScreenData = {};
						this.Obloanval = {};
						this.addloannum = true;
						this.isOfferData = true;
					 this.offerData={};
					 this.btnText='Account Details';
					this.newani = true;
					this.OutBoundPopData.newloan = true;
					this.OutBoundPopData.oldLoanNum = {};
						
						this.oldani = false;
						this.getWrapupCodes();
						//this.selectedWraup = this.WrapupTypes[0];
                        //this.isOutcomeEnable = true;
                        //this.IsOutbound = false;
                        //this.IsInbound = false;
                        //this.IsPredictiveOutbound = false;
                    


                    // -------resetting values---- //
                    var today = new Date();
                    this.CBEndDate = today;
                    this.CBStartDate = today;
                    //jQuery("#OBHistorygrid").jqGrid('clearGridData');
                    //jQuery("#OBHistorygrid").jqGrid('setGridParam', { data: [] });
                   // jQuery("#OBHistorygrid").trigger('reloadGrid');


                    this.callbackRemarks = "";
                    this.agentRemarks = "";
                    if (this.BusOutcome != null && this.BusOutcome != undefined) {
                        this.selectedoutCome = this.BusOutcome[0];
                    }
                    if (this.ParentBusOutcome != null && this.ParentBusOutcome != undefined) {
                        this.selectedParent = this.ParentBusOutcome[0];
                    }
                    if (this.CBModes != null && this.CBModes != undefined) {
                        this.selectedCBMode = this.CBModes[0];
                    }
                    if (this.CBTypes != null && this.CBTypes != undefined) {
                        this.selectedCBType = this.CBTypes[0];
                    }



                }
           
               
              
              break;
            }
            default:
              break;
          }
  
          (<any>window).top.postMessage("success", "*");
        }
      }
      catch (e) {
        console.error(e);
      }
    }
    enableremarks () {
      this.isOBRemarks = true;
  }
  loadhistory() {
    this._httpClinet.GETOutboundHistoryDetails(window['config'].CustomOBApiUrl,this.OutBoundPopData.ANI).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.Obhistory = Res.data;     
                               
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to load Outbound History data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });

}


InsertCallDetails () {
  this.IsValidInputs();
  
  var now = new Date();

  this.timestamp = now.getFullYear().toString();
 
  // JS months are 0-based, so +1 and pad with 'e's
  this.timestamp += ((now.getMonth() < 9) ? 'e' : '') + (now.getMonth() + 1).toString();

  // Pad with a 0
  this.timestamp += ((now.getDate() < 10) ? '0' : '') + now.getDate().toString();

  this.timestamp += ((now.getHours() < 10) ? '0' : '') + now.getHours().toString();

  this.timestamp += ((now.getMinutes() < 10) ? 'e' : '') + now.getMinutes().toString();

  this.timestamp += ((now.getSeconds() < 10) ? '0' : '') + now.getSeconds().toString();

  this.timestamp += ((now.getMilliseconds() < 10) ? '0' : '') + now.getMilliseconds().toString();
  if (this.isValid == true) {
       if(this.oldani == true)
   {
     
            var incalldataParam = JSON.stringify({
                //AgentID: this.OutBoundPopData.AgentID == undefined ? "" : this.OutBoundPopData.AgentID,
                //Extension: this.OutBoundPopData.Extension == undefined ? "" : this.OutBoundPopData.Extension,
                AgentID: this.loginID,
                AgentName: this.agentname,
                Extension: this.loginExtenstion,
                CallWrapupCode : this.selectedWraup.WrapupDescription,
                CustomerName : this.OutBoundPopData.CustName,
                ANI : this.OutBoundPopData.ANI,
                LoanNumber : this.selectedLoan.LoanNumber ,
                Remarks : this.agentRemarks,
                UniqueID : this.uniqueId,
      TeamName:this.teamname
            });
   }
   else
   {
      var incalldataParam = JSON.stringify({
                //AgentID: this.OutBoundPopData.AgentID == undefined ? "" : this.OutBoundPopData.AgentID,
                //Extension: this.OutBoundPopData.Extension == undefined ? "" : this.OutBoundPopData.Extension,
                 AgentID: this.loginID,
                 AgentName: this.agentname,
                Extension: this.loginExtenstion,
                CallWrapupCode : this.selectedWraup.WrapupDescription,
                CustomerName : this.OutBoundPopData.CustName,
                ANI : this.OutBoundPopData.ANI,
                LoanNumber : this.OutBoundPopData.LoanNum,
                Remarks : this.agentRemarks,
                UniqueID : this.uniqueId,
      TeamName:this.teamname
            });
   }
 //  if(incalldataParam.LoanNumber.length>0)
 //  {
  //   incalldataParam.LoanNumber =  this.selectedLoan.LoanNumber;
 //  }
 this._httpClinet.POSTInsertOutboundData(window['config'].CustomOBApiUrl,incalldataParam).subscribe({
  next: (Res: any) => {
    console.log("api response", Res);
    this.obflag = false        
    console.log(Res);  
    
    
    this._httpClinet.GETAllOutboundHistoryDetails(window['config'].CustomOBApiUrl,this.loginID).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.Obhistory = Res.data;
        console.log(Res.data);           
                
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to load Outbound History data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });
  },
  error: (err: any) => {
    
    this.errormessage = 'Unable to insert call data: ' + err.message;
   console.log(this.errormessage, err);
  }
});
 
        }


    }

    newloannochange () {
			if(this.OutBoundPopData.newloan == true){
			this.oldani = false;
			this.newani = true;
			this.OutBoundPopData.LoanNum = '';
			}
			if(this.OutBoundPopData.newloan == false)
			{
				
				this.oldani = true;
			this.newani = false;
			this.OutBoundPopData.oldLoanNum = this.Obloanval;
			}
		}


    SetReasonData () {
      try {
  if (this.selecteddefaultreason != null) {
              if (this.selecteddefaultreason.id == "00") {
                  this.outcomeerror = "Select Default-Reason";
                  return;
              }
          }
    if (this.selectedflowreason != null) {
              if (this.selectedflowreason.id == "00") {
                  this.outcomeerror = "Select Flow-Reason";
                  return;
              }
          }
          if (this.selecteddefaultreason == null && this.selectedflowreason == undefined) {
              this.outcomeerror = "Select Default-Reason";
              return;
          }
  if (this.selectedflowreason == null && this.selectedflowreason == undefined) {
              this.outcomeerror = "Select Flow-Reason";
              return;
          }
          if (this.agentReasonDefaultRemarks == null || this.agentReasonDefaultRemarks == undefined || this.agentReasonDefaultRemarks == "") {
              this.outcomeerror = "Reason Remarks should not empty";
              return;
          }
   if (this.agentReasonFlowRemarks == null || this.agentReasonFlowRemarks == undefined || this.agentReasonFlowRemarks == "") {
              this.outcomeerror = "Flow Remarks should not empty";
              return;
          }
          
          //this.cbflag = false;

          var inOutParam = JSON.stringify({
              UniqueCallId: this.uniqueId,
              //BAAccountNumber: this.OutBoundPopData.BAAccountNumber,
              ReasonDefault: this.selecteddefaultreason.id,
              ReasonDefaultDesc: this.selecteddefaultreason.description,
              ReasonFlow: this.selectedflowreason.id,
              ReasonFlowDesc: this.selectedflowreason.description,
            
              ReasonDefaultRemarks: this.agentReasonDefaultRemarks,
    ReasonFlowRemarks: this.agentReasonFlowRemarks,
             // ModeOfCall: "PredictiveOutbound",
              Ani: this.OutBoundPopData.ANI,
             
    AgentID: this.loginID,
    AgentName: this.agentname
             // CampaignName: this.OutBoundPopData.CampaignName,

          });
    console.log('Flow data--'+inOutParam);
          //insert outcome data in to custom db

          this._httpClinet.POSTFlowDataInsert(window['config'].CustomOBApiUrl,inOutParam ).subscribe({
            next: (Res: any) => {
              console.log("api response", Res);
              console.log("Flow response-->"+JSON.stringify(Res));
              if (Res.data == "SUCCESS") {
                  this.outcomeerror = "Flow Data configured successfully";
    this.selecteddefaultreason = this.reasondefault[0];
                 this.selectedflowreason = this.reasonflow[0];
                  this.agentReasonDefaultRemarks = "";
  this.agentReasonFlowRemarks = "";
this.flowflag = true;
              }
              else {
                  this.errormessage = '';
               this.selecteddefaultreason = this.reasondefault[0];
                 this.selectedflowreason = this.reasonflow[0];
   this.agentReasonDefaultRemarks = "";
  this.agentReasonFlowRemarks = "";
              }       
                               
            },
            error: (err: any) => {             
              this.errormessage = '';
             console.log(this.errormessage, err);
             this.outcomeerror = 'Unable to update the Flow Data : ' + err.message;
             this.selecteddefaultreason = this.reasondefault[0];
                  this.selectedflowreason = this.reasonflow[0];
     this.agentReasonDefaultRemarks = "";
   this.agentReasonFlowRemarks = "";
   this.flowflag = false;
            }
          });

    //logging data
     // httpService.httpRequest('POST', config.CustomOBApiUrl + "logData", logParam)
              // .then(function (val) {
                 
              // }, function (error) {
                  
              // });
          
      }
      catch (ex) {
          this.outcomeerror = ex;
      }

  }

//   open (size:any, parentSelector:any) {
//     var parentElem = parentSelector ?
//         angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
//     var modalInstance = $uibModal.open({
//         animation: true,
//         backdrop:false,
//         ariaLabelledBy: 'modal-title',
//         ariaDescribedBy: 'modal-body',
//         templateUrl: 'myModalContent.html',
//         controller: 'ModalInstanceCtrl',
//         controllerAs: '$ctrl',
//         size: size,
//         appendTo: parentElem,
// resolve:{
//   offerData:function(){
//     return this.offerData;
//   }
// }
//     });

//  timeout(()=>{
//  $('.modal-content').draggable({handle:".topbar"});
//  },10);

//     modalInstance.result.then( );
// }

open(size: any, parentSelector: any) {
  const modalOptions: NgbModalOptions = {
    animation: true,
    backdrop: false,
    ariaLabelledBy: 'modal-title',
    ariaDescribedBy: 'modal-body',
    size: size
  };

  const parentElem = parentSelector ?
    this.modalService.getContainer()!.querySelector(parentSelector) :
    undefined;


  const modalInstance = this.modalService.open(this.modalTemplate, modalOptions);

  // Accessing the resolved data
  modalInstance.componentInstance.offerData = this.offerData;

  // Uncomment the following lines if you need to perform actions after the modal is opened
  // modalInstance.result.then(() => {
  //   // Handle modal close
  // });

  
}
closeModal () {
  console.log(this.modalInstance);
};

change () {
  //alert('inside change method');
  //alert(this.OutBoundPopData.ag);
  if(this.OutBoundPopData.ag == true){
    this._httpClinet.GETAllOutboundHistoryDetails(window['config'].CustomOBApiUrl,this.loginID).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.Obhistory = Res.data;
        console.log(Res.data);                    
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to load Outbound History data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });

  }
 
}

getWrapupCodes() {
  this._httpClinet.GETWrapupCodes(window['config'].CustomInsuranceUrl,this.teamname).subscribe({
    next: (Res: any) => {
      console.log("api response", Res);
               
      this.wrapupMaster = Res.data;
      this.selectedWraup = this.wrapupMaster[0];
              
              
    },
    error: (err: any) => {
      
      this.errormessage = 'Unable to load wrapup codes: ' + err.message;
     console.log(this.errormessage, err);
    }
  });
 
    }

    cleareErrormsg() {

      if (this.errormessage != '' || this.errormessage != null) {
          this.errormessage = '';
      }
      if (this.cberror != '' || this.cberror != null) {
          this.cberror = '';
      }
      if (this.outcomeerror != '' || this.outcomeerror != null) {
          this.outcomeerror = '';
      }
      // timeout(this.cleareErrormsg, 5000);
  };

   dayDuration = 60 * 60 * 24 * 1000;

   areDatesEqual(date1:any, date2:any) {
    return Math.floor(date1 / this.dayDuration) == Math.floor(date2 / this.dayDuration);
}
disabledTest(data: any): boolean {
  const date = data.date,
          mode = data.mode;
   
    let isRealDate = false;
   
    for (let i = 0; i < this.dates.length; i++) {
      const changedDate = Date.parse(this.dates[i]);
   
      if (this.areDatesEqual(changedDate, date)) {
        isRealDate = true;
        return mode === 'day' && !isRealDate;
      }
    }
   
    return false;
  }

  IsValidInputs () {
    this.isValid = '';
if (this.OutBoundPopData.newloan == true)
{
if( this.OutBoundPopData.LoanNum == null || this.OutBoundPopData.LoanNum == undefined || this.OutBoundPopData.LoanNum == "") 
    {
        this.cberror = "LoanNumber should not empty";
        this.isValid = false;
    }
}
else if (this.OutBoundPopData.newloan == false && this.OutBoundPopData.oldLoanNum == null || this.OutBoundPopData.oldLoanNum == undefined || this.OutBoundPopData.oldLoanNum == "") 
    {
        this.cberror = "AdditionalLoanNumber should not empty";
        this.isValid = false;
    }
    if (this.OutBoundPopData.CustName == null || this.OutBoundPopData.CustName == undefined || this.OutBoundPopData.CustName == "") 
    {
        this.cberror = "Customername should not empty";
        this.isValid = false;
    }

    else if (this.OutBoundPopData.ANI == null || this.OutBoundPopData.ANI == undefined || this.OutBoundPopData.ANI == "") 
    {
        this.cberror = "ANI is invalid";
        this.isValid = false;
    }
    
    else if (this.selectedWraup == undefined || this.selectedWraup == null || this.selectedWraup.id == "00") {
        this.cberror = "Select Wrapup Type";
        this.isValid = false;
    }        
    else if (this.agentRemarks == null || this.agentRemarks == undefined || this.agentRemarks == "") 
    {
        this.cberror = "Agent Remarks should not empty";
        this.isValid = false;
    }
    else {
        this.isValid = true;
    }
}

}
