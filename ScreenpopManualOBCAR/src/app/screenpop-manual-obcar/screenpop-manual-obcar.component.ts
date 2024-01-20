import { Component } from '@angular/core';
import { CommonWebApiService } from '../common-web-api.service';
import * as moment from 'moment';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-screenpop-manual-obcar',
  templateUrl: './screenpop-manual-obcar.component.html',
  styleUrls: ['./screenpop-manual-obcar.component.css']
})
export class ScreenpopManualOBCARComponent {
  //----------------------inbound---------
  IsInbound:any;
 history:any; ScreenPopData:any; loginID :any;
   agentname:any; wrapupMaster :any; departmentMaster:any; agentRemarks:any; isWrapdisable = true; today = new Date();  wrapupDateTime:any;
  //  wrapupDateTime = this.today;
   loginExtenstion:any; wrapupendtime:any; callstarttime :any; callendtime :any; isWrapupDisable :any; isWrapupComplete = false;
   receivedmessage:any; errormessage:any;  selectedwrapup:any; ScreeType:any;  IsOutbound :any;  IsPredictiveOutbound:any;  timestamp:any;
   selecteddepartment:any;  employeeName:any;  employeeCode:any; isValid:any;

   //----------------------outbound ------
   Obhistory = [];
   Obloanval = {};
   OutBoundPopData:any; newani = true; oldani = false;  addloannum = false;  isOfferData = true; CallScreenData:any; offerData:any;
     //CallData = {}; //  isValid = true;
    cbflag = false;  obflag = true;  flowflag = true; aniflag = false; btnText='Account Details';  xmlbusObj1:any; callbackRemarks:any;
    //  loginID = ''; loginExtenstion = ''; agentname = ''; 
    uniqueId = '';  xmlbusObj:any;  CBTypes:any;  selectedCBType:any; CBEndDate = this.today; CBStartDate = this.today;  CBModes:any;
    //  CBTypes = config.CBTypes; WrapupTypes = config.Wrapup; selectedCBType = this.CBTypes[0]; today = new Date();
    WrapupTypes:any;   teamname = ''; BusOutcome:any; selectedoutCome:any; ParentBusOutcome:any;  selectedParent:any; selectedCBMode :any;
  //  wrapupMaster = [];
   selectedWraup :any;  selectedLoan :any;  reasondefault:any;  selecteddefaultreason: any; isOBRemarks:any;
  //  var $ctrl=this; reasondefault=config.reasondefault; reasonflow=config.reasonflow;
    reasonflow:any;  selectedflowreason:any; CBStartDateOption:any;  CBStartDatePopup:any;  OpenCBStartDate:any;  CBEndDateOption:any;
    CBEndDatePopup:any;  OpenCBEndDate:any; agentReasonRemarks:any;  outcomeerror:any; modalTemplate:any; cberror:any;
    modalService: any; dates: any; modalInstance: any;
    
     
   //-------
	constructor(private _httpClinet: CommonWebApiService){  
    console.log(window["config"]);
    this.CBTypes = window["config"].CBType;
    this.selectedCBType=window["config"].CBType
    this.WrapupTypes=window["config"].Wrapup
    this.reasonflow=window["config"].reasonflow
    this.reasondefault=window["config"].reasondefault[0]
     if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }}


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
                
            case 'EndData': {
              /*Load agent information from finesse */ 
              let calldata =this.receivedmessage;// JSON.parse(this.receivedmessage.data);
                 
              
                 calldata = JSON.parse(event.data);
                if (calldata.type == "OnEndCall") {
                    //update call data datetime in to custom db
                    var callendtime = new Date();
					this.callendtime = moment(callendtime).format('DD/MM/YYYY HH:mm:ss');

					var callend = {
						CallID:this.ScreenPopData.CallKey,
						AgentID:this.loginID,
						CallEndTime:this.callendtime
					}

          this._httpClinet.POSTInsertCallEnd(window['config'].CustomApiUrl,callend).subscribe({
            next: (Res: any) => {
              console.log("api response", Res);
             this.selectedwrapup =this.wrapupMaster[0];
							this.agentRemarks = '';							
							this.getDepartment();
							this.getWrapupMaster();
							this.getHistory();         
                 
                      
            },
            error: (err: any) => {
              
              this.errormessage = '';
             console.log(this.errormessage, err);
            }
          });
                }
                      
              break;
            }
            case 'CallData': {
              debugger;
              // this.appService.LoadAgentDetails(this.receivedmessage)
              let calldata =this.receivedmessage;
              
               calldata = JSON.parse(event.data);
                console.log(calldata);
                if (calldata.type == "OnBeginCall") {
                   this.IsInbound = true;
                    var _language = '';
                    switch (calldata.Callvariables.callVariable3) {
                        case 'ENG':
                            _language = 'ENGLISH';
                            break;
                        case 'HIN':
                            _language = 'HINDI';
                            break;
                        case 'PUN':
                            _language = 'PUNJABI';
                            break;
                        case 'MAR':
                            _language = 'MARATHI';
                            break;
                        case 'RAJ':
                            _language = 'RAJASTHANI';
                            break;
                        case 'GUJ':
                            _language = 'GUJARATI';
                            break;
                        default:

                    }

                    //var obj = $filter('filter')(config.MenuMaster, function (d) { return d.id === calldata.Callvariables.callVariable4; })[0];
                   
                      const filteredArray = window["config"].MenuMaster.filter((d:any) => d.id === calldata.Callvariables.callVariable4);
                       
                          // If you only want the first matching element
                          const obj = filteredArray.length > 0 ? filteredArray[0] : null;
                       
                          // return obj;
                      
                    
                   this.isWrapdisable = false;

                    var screenPopData = {
                        ANI: calldata.Callvariables.callVariable1,
                        RegisterNo: calldata.Callvariables.callVariable2,
                        LastMenu: obj.Desc,
                        Language: _language,
                        SkillName: calldata.Callvariables.callVariable5,
                        CallKey: calldata.Callvariables.callVariable6,
                        CustomerID: calldata.Callvariables.callVariable7,
                        TransCode: calldata.Callvariables.callVariable7
                    };



                  
                       this.ScreenPopData = screenPopData;
                        this.ScreeType = 'INBOUND';
                   

                    this.IsInbound = true;
                    this.IsOutbound = false;
                    this.IsPredictiveOutbound = false;


                    if (screenPopData.ANI != 'NA') {
                      this._httpClinet.GETHistoryDetails(window['config'].CustomApiUrl,screenPopData.ANI).subscribe({
                        next: (Res: any) => {
                          console.log("api response", Res);
                          this.history = Res.data;              
                                                                        
                        },
                        error: (err: any) => {
                          
                          this.errormessage = 'Unable to load History data: ' + err.message;
                         console.log(this.errormessage, err);
                        }
                      });
                  
                    }
					
					var starttime = new Date();
					this.callstarttime = moment(starttime).format('DD/MM/YYYY HH:mm:ss');
					
                    var callRemarks = {
                        ANI: screenPopData.ANI,
                        RegisterMobNo: screenPopData.RegisterNo,
                        LastMenu: screenPopData.LastMenu,
                        Language: screenPopData.Language,
                        CustomerID: screenPopData.CustomerID,
                        CallKey: screenPopData.CallKey,
                        TransCode: screenPopData.TransCode,
                        SkillName: screenPopData.SkillName,
                        AgentID:this.loginID,
                        AgentName:this.agentname,
                        Ext:this.loginExtenstion,
                        EmployeeCode: 'NA',
                        EmployeeName: 'NA',
                        Department:this.selecteddepartment.Department,
                        InsertedTime:this.callstarttime
                    }
					
					var delayInMilliseconds = 1000; //1 second

					setTimeout(()=>{
            this._httpClinet.POSTInsertCallRemarks(window['config'].CustomApiUrl,callRemarks).subscribe({
              next: (Res: any) => {
                console.log("api response", Res);
                                                     
              },
              error: (err: any) => {
                
                this.errormessage = 'Unable to insert calldata: ' + err.message;
               console.log(this.errormessage, err);
              }
            });	

					}, delayInMilliseconds);

                }		
              break;
            }
            case 'UserData':{
             
            let calldata =this.receivedmessage; 
            
               calldata = JSON.parse(event.data);
     this.loginID = calldata.agentID;
     this.agentname = calldata.agentName;
     this.loginExtenstion = calldata.Extension;
              if (calldata.state == "NOT_READY" || calldata.state == "READY") {
                 this.agentname = calldata.agentName;
                 this.loginID = calldata.agentID;
                 this.loginExtenstion = calldata.Extension;

                  if (this.isWrapupComplete == false &&this.isWrapupDisable == false) {
                     this.InsertCallDetails();

                      if (this.isWrapupDisable == true) {
                     
                              this.errormessage = '';
                             this.agentRemarks = '';
                             this.ScreenPopData = {};
                              this.ScreeType = '';
                         
                      }
                  }
             
                      if (this.isWrapupDisable == true) {
                         this.ScreenPopData = {};
                         this.agentRemarks = '';
                          this.ScreeType = '';
                      }
                      if (this.errormessage != '' || this.errormessage != null) {
                          this.errormessage = '';
                      }

                      if (this.isWrapupComplete == true) {
                         this.isWrapupComplete = false;
                      }

                  this.clear();
                 
              }
              if (calldata.state == "WORK" || calldata.state == "WORK_READY") {
                 this.isWrapupDisable = false;
                  //this.isWrapdisable = false;
                  var today = new Date();
                 this.wrapupDateTime = moment(today).format('DD/MM/YYYY HH:mm:ss');
              }
              if (calldata.state == "RESERVED" || calldata.state == "TALKING") {
                  if (this.errormessage != '' || this.errormessage != null) {
                      this.errormessage = '';
                  }
                  if (this.isWrapupComplete == true) {
                     this.isWrapupComplete = false;
                  }
              }           
   
              break;
          }
  //----------outbound------
           case 'ANIPreviewOutBound': {
                  debugger;
                  // this.appService.LoadAgentDetails(this.receivedmessage)
                  let calldata =this.receivedmessage;
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
            //alert("MOB END EVENT");
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
                      this._httpClinet.GETHistoryDetails1(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
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
                    
          
              // httpService.httpRequest('GET', config.CustomOBApiUrl + 'GetLoanNoData?callernumber=' + calldata.ANI.substr(calldata.ANI.length-10))
                // .then(function (val) 
                // {
                  // this.Obloanval = val.data;
                // }, function (error) 
                // {
                  // $rootScope.errormessage = 'Unable to load Loannumbers codes: ' + error.message;
                // });
          
        
            
            }
            else{
              this.aniflag=false;
            }
                    if (calldata.type == "OnMakeOutCall" && this.aniflag==true) {
              //alert( calldata.ANI.substr(calldata.ANI.length-10));
              // httpService.httpRequest('GET', config.CustomOBApiUrl + 'GetAccountDetails?callernumber='+ calldata.ANI.substr(calldata.ANI.length-10))
                    // .then(function (val) {
                         // $ctrl.offerData = val.data;
              // console.log("Offer Data respone Length "+$ctrl.offerData.length);
               // if($ctrl.offerData.length  == 0)
              // {
                 // console.log("Inside If for length");
                // this.btnText='No Data Avilable';
                // this.isOfferData=true;
               // }
              // else{
                // this.isOfferData=false;
              // }
              
                         // console.log($ctrl.offerData);
                       // console.log("offerData"+JSON.stringify($ctrl.offerData));
                     // }, function (error) {
               // console.log("offerData error"+error);
                         // $rootScope.errormessage = 'Unable to load Account data: ' + error.message;
                     // });
            
              //alert(CallANI);
              
              this._httpClinet.GetScreenpopData(window['config'].CustomOBApiUrl,calldata.ANI.substr(calldata.ANI.length-10)).subscribe({
                next: (Res: any) => {
                  console.log("api response", Res);
                  this.CallScreenData = Res.data;
                  //$ctrl.offerData = val.data;
                 if(this.CallScreenData.length > 0)
                 {
                   
                   // this.isOfferData=false;
                 this.OutBoundPopData.Name=this.CallScreenData[0].Name;
                 this.OutBoundPopData.ANI=this.CallScreenData[0].ANI;
                 this.OutBoundPopData.Agency=this.CallScreenData[0].Agency;
                                               
                 this.agentRemarks='';
                                 
                 }
                 else{
                 
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
              
              //alert(this.isOfferData);
              this.newani = true;
              this.OutBoundPopData.newloan = true;
              this.OutBoundPopData.oldLoanNum = {};
                this.isOfferData = true;
               this.offerData={};
               this.btnText='Account Details';
                this.oldani = false;
                this.getWrapupCodes();
       
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
                  debugger;
                  // this.appService.LoadAgentDetails(this.receivedmessage)
                  let calldata =this.receivedmessage;
                    
                  
                     calldata = JSON.parse(event.data);
                   this.loginID = calldata.agentID;
           this.teamname = calldata.TeamName;
    //alert("Team Name:"+calldata.TeamName);
    this._httpClinet.GETAllOutboundHistoryDetails(window['config'].CustomOBApiUrl,this.loginID).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.Obhistory =Res.data;     
 
                
                
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
                  debugger;
                  // this.appService.LoadAgentDetails(this.receivedmessage)
                  let calldata =this.receivedmessage;
                 
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
                //this.selectedWraup =this.WrapupTypes[0];
                            //this.isOutcomeEnable = true;
                            //$rootScope.IsOutbound = false;
                            //$rootScope.IsInbound = false;
                            //$rootScope.IsPredictiveOutbound = false;
                       
    
    
                        // -------resetting values---- //
                        var today = new Date();
                       this.CBEndDate = today;
                       this.CBStartDate = today;
                        //jQuery("#OBHistorygrid").jqGrid('clearGridData');
                        //jQuery("#OBHistorygrid").jqGrid('setGridParam', { data: [] });
                       // jQuery("#OBHistorygrid").trigger('reloadGrid');
    
    
                       this.callbackRemarks = "";
                       this.agentRemarks = "";
                        if (this.BusOutcome != null &&this.BusOutcome != undefined) {
                           this.selectedoutCome =this.BusOutcome[0];
                        }
                        if (this.ParentBusOutcome != null &&this.ParentBusOutcome != undefined) {
                           this.selectedParent =this.ParentBusOutcome[0];
                        }
                        if (this.CBModes != null &&this.CBModes != undefined) {
                           this.selectedCBMode =this.CBModes[0];
                        }
                        if (this.CBTypes != null &&this.CBTypes != undefined) {
                           this.selectedCBType =this.CBTypes[0];
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

    enableremark () {
      this.isOBRemarks = true;
  }

    submit() {
			this.IsValidInputs();
			this.InsertCallDetails();
     }

     
     InsertCallDetails() {
            
      //var timestamp = new Date().getUTCMilliseconds();
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

       var wrapendtime = new Date();
      this.wrapupendtime = moment(wrapendtime).format('DD/MM/YYYY HH:mm:ss');

      var wrapup = {
          AgentRemarks: this.agentRemarks,
          WrapString: this.selectedwrapup.WrapupDescription,
          WrapCode: this.selectedwrapup.WrapupCode,
          CallID: this.ScreenPopData.CallKey,
          RegisterMobNo: this.ScreenPopData.RegisterNo,
          AgentID: this.loginID,
          AgentName: this.agentname,
  Extension: this.loginExtenstion,
          EmployeeCode: this.employeeCode,
          EmployeeName: this.employeeName,
          Department: this.selecteddepartment.Department,
          //WrapupDateTime: this.wrapupDateTime,
          InsertedTime: this.wrapupendtime
      }

      this._httpClinet.POSTInsertAgentRemarks(window['config'].CustomApiUrl,wrapup).subscribe({
        next: (Res: any) => {
          console.log("api response", Res);
          this.errormessage = "Wrapup Added successfully";
          this.selectedwrapup = this.wrapupMaster[0];
          this.agentRemarks = '';
          this.isWrapdisable = true;
          this.isWrapupComplete = true;
          this.isWrapupDisable = true;
          this.getDepartment();
          this.getWrapupMaster();
          this.getHistory();         
                                  
        },
        error: (err: any) => {
          
          this.errormessage = 'Unable to insert Wrapup data: ' + err.message;
         console.log(this.errormessage, err);
         this.isWrapupComplete = false;
        }
      });
     
  }

  getWrapupMaster() {

    //alert('dept change');
    this._httpClinet.GETWrapupCodes(window['config'].CustomApiUrl,this.selecteddepartment.Department).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.wrapupMaster = Res.data;
             this.selectedwrapup = this.wrapupMaster[0];           
                          
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to load wrapup codes: ' + err.message;
       console.log(this.errormessage, err);
      }
    });
 }


 getHistory(){
  this._httpClinet.GETHistoryDetails(window['config'].CustomApiUrl,this.ScreenPopData.ANI).subscribe({
    next: (Res: any) => {
      console.log("api response", Res);
      this.history = Res.data;                  
    },
    error: (err: any) => {
      
      this.errormessage = 'Unable to load History data: ' + err.message;
     console.log(this.errormessage, err);
    }
  });
  }

  getDepartment() {

    this._httpClinet.GETDepartementMaster(window['config'].CustomApiUrl,'').subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.departmentMaster = Res.data;
            this.selecteddepartment = this.departmentMaster[0];           
                
      },
      error: (err: any) => {
        
        this.errormessage =  'Unable to load department data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });
}

// IsValidInputs() {
//   this.isValid = '';

//    if (this.employeeName == null || this.employeeName == undefined || this.employeeName == "") 
//   {
//      this.errormessage = "Employee Name should not empty";
//       this.isValid = false;
//   }
//   else if (this.employeeCode == null || this.employeeCode == undefined || this.employeeCode == "") 
//   {
//       this.errormessage = "Employee Code should not empty";
//       this.isValid = false;
//   }      
//   else if (this.agentRemarks == null || this.agentRemarks == undefined || this.agentRemarks == "") 
//   {
//       this.errormessage = "Agent Remarks should not empty";
//       this.isValid = false;
//   }
//   else {
//       this.isValid = true;
//   }
// }

clear() {
           this.getDepartment();
           this.getWrapupMaster();
           this.ScreenPopData = {};
           this.agentRemarks='';
           this.loginID='';
           this.agentname='';
           this.employeeCode='';
           this.employeeName='';
           this.wrapupDateTime='';
           this.errormessage = '';
           this.ScreeType = '';
           this.selecteddepartment = this.departmentMaster[0];
           this.selectedwrapup = this.wrapupMaster[0];
  }

  // --------------------------- outbound -----------------
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

   loadhistory() {
    this._httpClinet.GETHistoryDetails2(window['config'].CustomOBApiUrl,this.OutBoundPopData.CustNum).subscribe({
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

InsertCallDetails1 () {
  //IsValidInputs();
  
  // var now = new Date();

        // var timestamp = now.getFullYear().toString(); // 2011
        // timestamp += ((now.getMonth < 9) ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
        // timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString(); // pad with a 0
        // timestamp += ((now.getHours <10) ? '0' : '') + now.getHours().toString();
        // timestamp += ((now.getMinutes <10) ? '0' : '') + now.getMinutes().toString();
        // timestamp += ((now.getSeconds <10) ? '0' : '') + now.getSeconds().toString();
        // timestamp += ((now.getMilliseconds <10) ? '0' : '') + now.getMilliseconds().toString();
    // this.uniqueId = timestamp;
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
                Name : this.OutBoundPopData.Name,
                ANI : this.OutBoundPopData.ANI,
                Agency : this.selectedLoan.Agency ,
                Remarks : this.agentRemarks,
                //UniqueID : timestamp
      UniqueID : this.uniqueId
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
                Name : this.OutBoundPopData.Name,
                ANI : this.OutBoundPopData.ANI,
                Agency : this.OutBoundPopData.Agency,
                Remarks : this.agentRemarks,
               UniqueID : this.uniqueId
            });
   }
 //  if(incalldataParam.LoanNumber.length>0)
 //  {
  //   incalldataParam.LoanNumber =  this.selectedLoan.LoanNumber;
 //  }
 this.obflag = true;
 this._httpClinet.POSTInsertOutboundData(window['config'].CustomOBApiUrl,incalldataParam).subscribe({
  next: (Res: any) => {
    console.log("api response", Res);
    this.errormessage = "Call Data Added successfully";       

    this._httpClinet.GETAllOutboundHistoryDetails(window['config'].CustomOBApiUrl ,this.loginID).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.Obhistory = Res.data;         
 
        this.errormessage = "Call Data Added successfully";          
                
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to load Outbound History data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });

  },
  error: (err: any) => {
    
    this.errormessage ='Unable to insert call data: ' + err.message;
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

    SetReasonData() {
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
          if (this.agentReasonRemarks == null || this.agentReasonRemarks == undefined || this.agentReasonRemarks == "") {
              this.outcomeerror = "Agent Remarks should not empty";
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
            
              ReasonRemarks: this.agentReasonRemarks,
             // ModeOfCall: "PredictiveOutbound",
              Ani: this.OutBoundPopData.ANI,
             
              AgentID: this.loginID,
               AgentName: this.agentname
             // CampaignName: this.OutBoundPopData.CampaignName,

          });
    console.log('Flow data--'+inOutParam);
          //insert outcome data in to custom db

          this._httpClinet.POSTFlowDataInsert(window['config'].CustomOBApiUrl,inOutParam).subscribe({
            next: (Res: any) => {
              console.log("api response", Res);
              console.log("Flow response-->"+JSON.stringify(Res));
                      if (Res.data == "SUCCESS") {
                          this.outcomeerror = "Flow Data configured successfully";
            this.selecteddefaultreason = this.reasondefault[0];
                         this.selectedflowreason = this.reasonflow[0];
                          this.agentReasonRemarks = "";
                this.flowflag = true;
                      }
                      else {
                          this.errormessage = '';
                       this.selecteddefaultreason = this.reasondefault[0];
                         this.selectedflowreason = this.reasonflow[0];
                          this.agentReasonRemarks = "";
                      }                         
                      
            },
            error: (err: any) => {
              this.outcomeerror = 'Unable to update the Flow Data : ' + err.message;
              this.selecteddefaultreason = this.reasondefault[0];
                   this.selectedflowreason = this.reasonflow[0];
                    this.agentReasonRemarks = "";
             this.flowflag = false;
              this.errormessage = '';
             console.log(this.errormessage, err);
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
  change() {
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

  this._httpClinet.GETWrapupCodes1(window['config'].CustomOBApiUrl,this.teamname).subscribe({
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
      // $timeout(cleareErrormsg, 5000);
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
