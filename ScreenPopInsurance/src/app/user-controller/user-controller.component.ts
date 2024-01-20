import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonWebApiService } from '../common-web-api.service';

@Component({
  selector: 'app-user-controller',
  templateUrl: './user-controller.component.html',
  styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent {
 
      Sendsms = false;    IsInbound = true;	ProcessType = 'Insurance';
	ProcessName :any;	ProcessData :any; errormessage:any; history = [];	Arrlist = [];
   ScreenPopData :any;	CCdata:any;receivedmessage:any;
onbegindata:any;  loginID = '';    resData = '';  agentname = '';    wrapup:any; feedback :any;
   // this..SmsData = {};
   processlabelvalue :any; agentRemarks = '';  isWrapupenable = false;   issubcategory=false;
   issurveyenable = false;  loginExtenstion = ''; uniqueId:any;   wrapupyesno :any;
   // isSendsms = false;
    
   
    selectedwrapupyesno:any
    customStyle = {};
    creditCardNumber = '';
    customerName = '';
    nextDueDate = '';
    outstandingBalance = '';
    billedOutStanding = '';
	premiumyes='';
    premiumno='';
	teamName='';
	wrapupMaster = [];
	selectedWraup :any;
	wrapupSubMaster = [];
	selectedSubWraup = this.wrapupSubMaster[0];
	ProcessLabels :any;
	Process ="";
	label1 = '';
	label2 = '';
	label3 = '';
	label4 = '';
	label5 = '';
	label6 = '';
	label7 = '';
	label8 = '';
	label9 = '';
	label10 = '';
	label11 = '';
	label12 = '';
	label1Value = '';
	label2Value = '';
	label3Value = '';
	label4Value = '';
	label5Value = '';
	label6Value = '';
	label7Value = '';
	label8Value = '';
	label9Value = '';
	label10Value = '';
	label11Value = '';
	label12Value = '';
	textboxname = '';
	labelname = '';
	label= '';
	isDataLoaded = false;
	isLoopCompleted=false;
  // postal: any;
	txtNextDueDate:any;
  IsOutbound:any;
  txtOutstandingBalance:any;
  txtBilledOutStanding:any;
  IsPremiumCaller:any;
  IsPredictiveOutbound:any;
  ScreeType:any; selectedwrapup :any;


  constructor(private _httpClinet: CommonWebApiService){
    console.log(window["config"]);
    this.wrapup=window['config'].Wrapup;
    this.feedback=window['config'].feedback;
    this.processlabelvalue=window['config'].ProcessLabel;
    this.wrapupyesno=window['config'].Wrapupyesno;
    this.selectedwrapup = this.wrapup[0];
    this.wrapupMaster= this.wrapupMaster[0];
    this.selectedwrapupyesno= this.wrapupyesno[0];
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }
  NgOnInit(){}
	//YesNo=[];
	//YesNo.push('Yes');
	//YesNo.push('No');
	
	generateUniquenum () {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
	
    turnGreen() {
      this.customStyle = {
            "color": "#000000",
            "background-color": "#00ff00",
            "font-size": "15px",
        };
    }

   [key:string]:any
	 Label(){
		for(let i=0; i < 12 ; i++)
				{
					var data = i+1;
				this['label'+ data] =  'BF' + data;
												
				}	
	}
	  //  Label();
	
     turnRed() {

        this.customStyle = {
            "color": "#000000",
            "background-color": "#ff0000",
            "font-size": "15px",
        };
		
    }
     preskill() {
        this.customStyle= {
            "color": "#ffbf00",
            "background-color": "#6a0dad",
            "font-size": "15px",
        };
    }
    turnBlue() {
        this.customStyle = { "color": "blue" };
    }
	
    multipleExist(arr: any[], value: any): boolean {
      for (const item of arr) {
        if (item === value) {
          return true;
        }
      }
      return false;
    }
	 


	 postmsg(data:any) {
			try {
				//alert('Post Msg:'+data);
				var win = window.parent;
				win.postMessage(data, '*');
				return false;
			}
			catch (ex) {
				//alert('error in client index.html post message' + ex);
        return false;
			}
		}
		
		Transfer () {
			this.issurveyenable=false;
			this.postmsg(JSON.stringify({ type: "ConsultTransfer" }));
		};
		
		 getConfiguration()
	   	{

      this._httpClinet.GetProcessInfo(window['config'].CustomInsuranceUrl).subscribe({
        next: (Res: any) => {
          console.log("api response", Res);
          this.ProcessName=Res.data;
							
          for(let i=0; i <this.ProcessName.length; i++)
          {
            this.isLoopCompleted=true;
            if (this.teamName.indexOf(this.ProcessName[i]["processType"]) !== -1) 
               {
              this.Process=this.ProcessName[i]['processType'];
              this.getresonsedata(this.Process);
              this.isLoopCompleted=true;
                break;
                // return true;
               }
                          
          }
if(this.isLoopCompleted==true)
        {
    this.getresonsedata(this.Process);	
        }	
                  
                  
        },
        error: (err: any) => {
          
          this.errormessage = '';
         console.log(this.errormessage, err);
        }
      });
			 
							
		}
		 getresonsedata(Process:any)
		{
			var Processname= (Process=="" ||  Process == undefined) ? "Default"  : Process;
			
      this._httpClinet.GetProcessResponsewithoutNA(window['config'].CustomInsuranceUrl,Processname).subscribe({
        next: (Res: any) => {
          console.log("api response", Res);
         
							this.ProcessLabels=Res.data;
						
							//this.ProcessLabels["data"] = [{"labelData":"ANI","callVariable":"callVariable1","orderData":"1"},{"labelData":"Customer Name","callVariable":"callVariable2","orderData":"2"},{"labelData":"Language","callVariable":"callVariable3","orderData":"3"},{"labelData":"Validated","callVariable":"callVariable4","orderData":"4"},{"labelData":"Skill","callVariable":"callVariable5","orderData":"5"},{"labelData":"Process","callVariable":"text","orderData":"6"}];
							this.ProcessData =this.ProcessLabels;
							
						for(let i=0; i <this.ProcessLabels["data"].length; i++)
						{
							var data = (i+1);
							this['label'+data] = this.ProcessLabels["data"][i].labelData;
														
						}

						for(let j=1; j <= (12-this.ProcessLabels["data"].length); j++)
						{
							this.textboxname = 'txtbox'+(j+this.ProcessLabels["data"].length);
							this.labelname = 'tdlabel'+(j+this.ProcessLabels["data"].length);
							
						//	document.getElementById(this.textboxname).style.display = 'None';
							//document.getElementById(this.labelname).style.display = 'None';
						}	

						for(let k=0; k <this.ProcessLabels["data"].length; k++)
						{
							this.textboxname = 'txtbox'+(k+1);
							
							if (this.ProcessLabels["data"][k].callVariable == 'text') 
							{
								//document.getElementById(this.textboxname).readOnly = false;
							}
						}						
		               this.isDataLoaded=true;
        },
        error: (err: any) => {
          
          this.isDataLoaded=false;
         console.log(this.errormessage, err);
        }
      });
			// (this.ScreenPopData.TextFree == undefined ||this.ScreenPopData.TextFree == '')? 'NA' :this.ScreenPopData.TextFree,
			 
						
		}

     getWrapupCodes() {

      this._httpClinet.GetWrapupCategoryDetails(window['config'].CustomApiUrl,this.teamName).subscribe({
        next: (Res: any) => {
          console.log("api response", Res);
          this.wrapupMaster = Res.data;
        },
        error: (err: any) => {
          this.errormessage = 'Unable to load wrapup codes: ' + err.message;
         
         console.log(this.errormessage, err);
        }
      });
	
        }

	 getWrapupSubCodes() {
    this._httpClinet.GetWrapupSubCategoryDetails(window['config'].CustomApiUrl,this.teamName,this.selectedWraup).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
        this.wrapupSubMaster = Res.data;
      },
      error: (err: any) => {
        this.errormessage = 'Unable to load wrapup codes: ' + err.message;
      
       console.log(this.errormessage, err);
      }
    });


			
        }
		
		 enableremarks () {
		    this.issubcategory=true;
			 //this.teamName = 'Aufin_Inbound';
			 this.getWrapupSubCodes();
           //this.isOBRemarks = true;
        }
		
		enableWrapup  ()
		{
			if(this.selectedSubWraup != '' ||this.selectedSubWraup  != undefined)
			{
				this.isWrapupenable = true;
			}
		}

        submit () {


            // if (this.ScreenPopData.SRNumber == "" ||this.ScreenPopData.SRNumber == undefined) {
                // this.errormessage = 'Enter the SRNumber ';
                // return;
            // }
            // if (this.ScreenPopData.SelfVerifiedPIN == "" ||this.ScreenPopData.SelfVerifiedPIN == undefined) {
                // this.errormessage = 'Enter the Pin';
                // return;
            // }
			if(this.selectedWraup =='')
			{
				 this.errormessage = 'Enter the Category';
                return;
			}
			if(this.selectedWraup !='' &&this.selectedSubWraup == '')
			{
				 this.errormessage = 'Enter the SubCategory';
                return;
			}



            //if (this.selectedwrapup.id == '00') {
              //  this.errormessage = 'Select wrapup';
              //  return;
           // } else {
             //   this.errormessag = '';
            //}
			
			
                    var callRemarks = {
                        ANI:this.ScreenPopData.BF1,
                        RegisterMobNo:this.ScreenPopData.BF1,
                        LastMenu:this.ScreenPopData.BF1,
                        Language:this.ScreenPopData.BF1,
                        CustomerID:this.ScreenPopData.BF1,
                        CallKey:this.ScreenPopData.BF1,
                        SkillGroup:this.ScreenPopData.BF1,
                        AgentID:this.loginID,
                        AgentName:this.agentname,
						Ext :this.loginExtenstion,
						BusinessField1 :this.ScreenPopData.BF1,
						BusinessField2 :this.ScreenPopData.BF2,
						BusinessField3 :this.ScreenPopData.BF3,
						BusinessField4 :this.ScreenPopData.BF4,
						BusinessField5 :this.ScreenPopData.BF5,
						BusinessField6 :this.ScreenPopData.BF6,
						BusinessField7 :this.ScreenPopData.BF7,
						BusinessField8 :this.ScreenPopData.BF8,
						BusinessField9 :this.ScreenPopData.BF9,
						BusinessField10 :this.ScreenPopData.BF10,
						BusinessField11 :this.ScreenPopData.BF11,
						BusinessField12 :this.ScreenPopData.BF12,
						UniqueCallId :this.uniqueId
                    }
                    this._httpClinet.POSTInsertCallRemarks(window["config"].CustomApiUrl,JSON.stringify(callRemarks)).subscribe({
                      next: (Res: any) => {
                        console.log("api response", Res);
                       
                      },
                      error: (err: any) => {
                        this.errormessage = 'Unable to insert calldata: ' + err.message;
                       
                       console.log(this.errormessage, err);
                      }
                    });
                 
						
            var wrapup = {
				
					
					
                AgentRemarks:this.agentRemarks,
                WrapString: '',
                WrapCode: 0,
                CallID:this.onbegindata.CallKey+'-'+'0',
                RegisterMobNo:this.ScreenPopData.RegisterNo,
                AgentID:this.onbegindata.CallDataAgentID,
			    AgentExtension:this.onbegindata.CallDataExt,
                AgentName:this.onbegindata.CallDataAgentName,	
                SRNumber:this.ScreenPopData.SRNumber,
                CallBackTaken:this.selectedwrapupyesno.description,
                //CallBackTakenCode:this.selectedwrapupyesno.id,
                svPin:this.ScreenPopData.SelfVerifiedPIN,
			    CustomerMobileNo: (this.ScreenPopData.MobileNo == undefined ||this.ScreenPopData.MobileNo =='')?'NA' :this.ScreenPopData.MobileNo,
                CustomerName:(this.ScreenPopData.CustomerName == undefined ||this.ScreenPopData.CustomerName == '')? 'NA' :this.ScreenPopData.CustomerName,
                CIF: (this.ScreenPopData.CIF == undefined ||this.ScreenPopData.CIF == '')? 'NA' :this.ScreenPopData.CIF,
                ICMCALLID:(this.ScreenPopData.ICMCallID == undefined ||this.ScreenPopData.ICMCallID == '')? 'NA' :this.ScreenPopData.ICMCallID,
                BranchName:(this.ScreenPopData.BranchName == undefined ||this.ScreenPopData.BranchName == '')? 'NA' :this.ScreenPopData.BranchName,
                TextFree: (this.ScreenPopData.TextFree == undefined ||this.ScreenPopData.TextFree == '')? 'NA' :this.ScreenPopData.TextFree,
				Category :this.selectedWraup,
				SubCategory :this.selectedSubWraup,
				ProcessType : 'Insurance',
				UniqueCallId :this.uniqueId,
				Process:this.Process,
				TeamName:this.teamName,
				QueueName:this.onbegindata.QueueName
            }
		
            this._httpClinet.POSTInsertAgentRemarks(window["config"].CustomApiUrl,wrapup).subscribe({
              next: (Res: any) => {
                console.log("api response", Res);
                this.errormessage = "Wrapup Added successfully";
                //this.issurveyenable=false;
                this.isWrapupenable = false;
                this.getWrapupCodes();
                          //this.selectedwrapup =this.wrapup[0];
                this.wrapupSubMaster=[];
                this.wrapupMaster=[];
                this.selectedWraup =this.wrapupMaster[0];
                this.selectedSubWraup =this.wrapupSubMaster[0];
                         this.selectedwrapupyesno =this.wrapupyesno[0];
                         this.agentRemarks = '';
              },
              error: (err: any) => {
                this.errormessage = 'Unable to insert calldata: ' + err.message;
                this.errormessage = 'Unable to insert Wrapup data: ' + err.message;
                
                this.isWrapupenable = false;
                 this.getWrapupCodes();
               console.log(this.errormessage, err);
              }
            });

        
        }


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
                    
                case 'CallData': {
                  /*Load agent information from finesse */ 
                  let calldata =this.receivedmessage;// JSON.parse(this.receivedmessage.data);
                      
                      console.log(calldata);
                      if (calldata.type == "OnBeginCall")
                      {
                this.teamName= calldata.TeamName;
                //this.teamName= 'Aufin_Inbound';
                this.getWrapupCodes();
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
                         //calldata.Callvariables.callVariable5 = 'CC_VETTA_ENG_SG';
                 
                          this.isWrapupenable = false;
                this.issurveyenable = true;
                
                          var ScreenPopData = {
                              ANI: calldata.ANI,
                              //RegisterNo: calldata.Callvariables.callVariable2,
                             // LastMenu: obj.Desc,
                  //LastMenu: 'Credti card',
                              //Language: _language,
                              //SkillName: calldata.Callvariables.callVariable5,
                              CallKey: calldata.CallKey,
                  QueueName:calldata.QueueName,
                              //CustomerID: calldata.Callvariables.callVariable7,
                              //SelfVerifiedPIN: calldata.Callvariables.callVariable8,
                  CallDataExt:calldata.extn,
                  CallDataAgentID:calldata.AgentId ,
                  CallDataAgentName:calldata.AgentName,
      
                  //IsPremiumCaller:calldata.Callvariables.callVariable3
                  //ICMCallID:calldata.Callvariables.callVariable6
                  
                          };
                
                this.onbegindata= ScreenPopData;
                
                
                  //if (this.Multipleexist(this.feedback ,calldata.Callvariables.callvariable5))
                 if(calldata.Callvariables.callVariable5.indexOf("VETTA") !== -1 || calldata.Callvariables.callVariable5.indexOf("ZENITH") !== -1 || calldata.Callvariables.callVariable5.indexOf("VIP") !== -1)  // will show whatever value in callVariable5. need to add the VIP skill once confirm from IVR
                
                           //if(ScreenPopData.IsPremiumCaller=='YES')
                 {
                   this.IsPremiumCaller=true;
                   //this.premiumyes='Yes';
                   if(calldata.Callvariables.callVariable5.includes('AUF'))
                   {
                     calldata.Callvariables.callVariable5 = calldata.Callvariables.callVariable5.replace('AUF_','');
                   }
                   else
                   {
                     calldata.Callvariables.callVariable5 = calldata.Callvariables.callVariable5.replace('CC_','').replace('_ENG_SG','');
                   }
      
                   this.premiumyes = calldata.Callvariables.callVariable5;
                  
                 }
                 else
                 {
                   this.IsPremiumCaller=false;
                   this.premiumno='NA';
                    
                } 
      
                          
      
                          
                           
          
          			
          //this.teamName = 'credit';
        
                      //this.ProcessLabels = [{"labelData":"ANI","callVariable":"callVariable3","orderData":"1"},{"labelData":"Customer Name","callVariable":"callVariable2","orderData":"2"},{"labelData":"Call ID","callVariable":"callVariable1","orderData":"3"},{"labelData":"Validated","callVariable":"callVariable8","orderData":"4"},{"labelData":"Skill","callVariable":"callVariable7","orderData":"5"},{"labelData":"Process","callVariable":"callVariable4","orderData":"6"},{"labelData":"VIPCaller","callVariable":"callVariable9","orderData":"7"},{"labelData":"BF2","callVariable":"callVariable10","orderData":"8"},{"labelData":"BF3","callVariable":"callVariable6","orderData":"9"},{"labelData":"BF4","callVariable":"NA","orderData":"10"},{"labelData":"BF5","callVariable":"callVariable6","orderData":"11"},{"labelData":"BF6","callVariable":"NA","orderData":"12"}//];
                  if (this.isDataLoaded == false)
                  {
                    //getresonsedata();
                    this.getresonsedata(this.Process);
                  }							
                  for(let i=0; i <this.ProcessData["data"].length; i++)
                  {
                    var cadata = (i+1);
                    this.ScreenPopData['BF'+cadata] = calldata.Callvariables[this.ProcessData["data"][i].callVariable];
                    
                  }
                	
        
          
                          
                              //this.ScreenPopData = ScreenPopData;
                             this.ScreeType = 'INBOUND';
                  
                            
                         
      
                         this.IsInbound = true;
                         this.IsOutbound = false;
                         this.IsPredictiveOutbound = false;
                          if (this.ScreenPopData.SelfVerifiedPIN == "Y") {
                              this.ScreenPopData.SelfVerifiedPIN = "YES";
                              this.turnGreen();
                          }
                          else {
                              this.ScreenPopData.SelfVerifiedPIN = "NO";
                              this.turnRed();
                          }
      
                          if (this.ScreenPopData.SkillName == "AU-ROYALE") {
      
                              this.preskill();
                          }
      
                          //if(ScreenPopData.RegisterNo !='NA')
                          // if (ScreenPopData.ANI != 'NA') {
                          //     //httpService.httpRequest('GET',config.CustomApiUrl+'GETHistoryDetails?registerMobNo='+ScreenPopData.RegisterNo,'')
                          //     httpService.httpRequest('GET', config.CustomApiUrl + 'GETHistoryDetails?registerMobNo=' + ScreenPopData.ANI)
                          //         .then(function (val) {
                          //             this.history = val.data;
      
                                     
                          //         }, function (error) {
                          //            this.errormessage = 'Unable to load History data: ' + error.message;
                          //         });
                          // }
                
                var uniquenumber = this.generateUniquenum();
                          this.uniqueId = uniquenumber;
      
                 
                          var callRemarks = {
                               ANI: ScreenPopData.ANI,
                              // RegisterMobNo: this.ScreenPopData.BF1,
                              // LastMenu: this.ScreenPopData.BF1,
                              // Language: this.ScreenPopData.BF1,
                              // CustomerID: this.ScreenPopData.BF1,
                               CallKey: ScreenPopData.CallKey+'-'+'0',
                              SkillGroup: ScreenPopData.QueueName,
                              AgentID:ScreenPopData.CallDataAgentID==undefined||ScreenPopData.CallDataAgentID =='' ?this.loginID:ScreenPopData.CallDataAgentID,
                              AgentName:ScreenPopData.CallDataAgentName ==undefined||ScreenPopData.CallDataAgentName =='' ?this.agentname:ScreenPopData.CallDataAgentName,
                  Ext : ScreenPopData.CallDataExt ==undefined||ScreenPopData.CallDataExt == ''?this.loginExtenstion:ScreenPopData.CallDataExt,
                  BusinessField1 : this.ScreenPopData.BF1,
                  BusinessField2 : this.ScreenPopData.BF2,
                  BusinessField3 : this.ScreenPopData.BF3,
                  BusinessField4 : this.ScreenPopData.BF4,
                  BusinessField5 : this.ScreenPopData.BF5,
                  BusinessField6 : this.ScreenPopData.BF6,
                  BusinessField7 : this.ScreenPopData.BF7,
                  BusinessField8 : this.ScreenPopData.BF8,
                  BusinessField9 : this.ScreenPopData.BF9,
                  BusinessField10 : this.ScreenPopData.BF10,
                  BusinessField11 : this.ScreenPopData.BF11,
                  BusinessField12 : this.ScreenPopData.BF12,
                  UniqueCallId : this.uniqueId,
                  Process:this.Process,
                  TeamName:this.teamName
                          }
      
                          // httpService.httpRequest('POST', config.CustomApiUrl + 'POSTInsertCallRemarks', JSON.stringify(callRemarks))
                          //     .then(function (val) {
      
                          //     }, function (error) {
                          //        this.errormessage = 'Unable to insert calldata: ' + error.message;
                          //     });
      
                          
                      }
                       else if (calldata.type == "OnEndCall")
                       {
                          
    
                      }
                  
                  break;
                }
                case 'UserLoad': {
                  debugger;
                  // this.appService.LoadAgentDetails(this.receivedmessage)
                  let calldata =this.receivedmessage;
                    
            
            //alert("From UserStateIB");
            //this.Process ="";
            if (calldata.type == "UserLoad") {
               
              this.teamName= calldata.TeamName;
              
                if(this.isDataLoaded==false)
                {
                this.getConfiguration();
                }
              
              
              this.getWrapupCodes();
                 
            				
              
               if(this.wrapup.length == 0)
               {
                console.log(this.wrapup.length);
                //this.dropdownload(this.teamName);
                this.selectedwrapup=this.wrapup[0];
               }
            }
            
          
      
                  break;
                }
                case 'UserData':
                 
                let calldata =this.receivedmessage; 
               
                    if (calldata.state == "NOT_READY" || calldata.state == "READY") {
              
                        this.isWrapupenable = false;
              this.issubcategory=false;
              this.issurveyenable = false;
                        this.agentRemarks = '';
              this.premiumyes='';
              this.premiumno='';
              this.IsPremiumCaller = false;
              this.teamName= calldata.TeamName;
             this.ProcessName = calldata.TeamName;
              
              if (this.isDataLoaded == false)
              {
                this.getConfiguration();
                
              }
              //if(this.teamName.includes("Customer"))
              //{
              //	this.Process = "Banking";
              //}
              //else if(this.teamName.includes("CC") || this.teamName.includes("Credit"))
              //{
              //	this.Process = "Credit";
              //}
              //else if(this.teamName.includes("Insurance"))
              //{
              //	this.Process = "Insurance";
              //}
              //else if(this.teamName.includes("Car"))
              //{
              //	this.Process = "Car";
              //}
              
              
              this.getWrapupCodes();
          
              var label ;
                
              //if ($rootScope.ProcessName != this.teamName)
              //{
                
              
                
              //}
                    //this.ProcessLabels = [{"labelData":"ANI","callVariable":"CallVariable3","orderData":"1"},{"labelData":"Customer //Name","callVariable":"CallVariable2","orderData":"2"},{"labelData":"Call ID","callVariable":"CallVariable1","orderData":"3"},{"labelData":"Validated","callVariable":"CallVariable8","orderData":"4"},{"labelData":"Skill","callVariable":"CallVariable7","orderData":"5"},{"labelData":"Process","callVariable":"CallVariable4","orderData":"6"},{"labelData":"VIPCaller","callVariable":"CallVariable9","orderData":"7"},{"labelData":"BF2","callVariable":"CallVariable10","orderData":"8"},{"labelData":"BF3","callVariable":"CallVariable6","orderData":"9"},{"labelData":"BF4","callVariable":"NA","orderData":"10"},{"labelData":"BF5","callVariable":"NA","orderData":"11"},{"labelData":"BF6","callVariable":"NA","orderDat//a":"12"}];
                       
                           this.errormessage = '';
                            this.ScreenPopData = {};
                        this.onbegindata=[];						
                            this.CCdata={};
                            this.customStyle = {};
                           this.ScreeType = '';
                            this.agentname = calldata.agentName
                            this.loginID = calldata.agentID;
                            this.loginExtenstion = calldata.Extension;
                
                        
                       
                         
                    
                }
       
                  break;
      
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

        change (selectedvalue:any){
          for(let i=0; i < this.CCdata.length; i++)
          {
            if(this.CCdata[i].CardNumber == selectedvalue)
            {
              this.customerName =  this.CCdata[i].CustomerName;
              this.txtNextDueDate = this.CCdata[i].NextDueDate;
              this.txtOutstandingBalance = this.CCdata[i].OutStandingBalance;
              this.txtBilledOutStanding = this.CCdata[i].BilledOutStandingBalance;
            }
          }
        }
}
