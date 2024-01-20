import { Component } from '@angular/core';
import { CommonWebApiService } from '../common-web-api.service';

@Component({
  selector: 'app-screenpop',
  templateUrl: './screenpop.component.html',
  styleUrls: ['./screenpop.component.css']
})
export class ScreenpopComponent {

  Sendsms=false;
    IsInbound = true; 
    history:any;
    ScreenPopData:any;
    SmsData={};
    loginID='';
    resData='';
    wrapupresData: any;
    agentname='';
    wrapup:any 
    selectedwrapup:any;
    agentRemarks:any;
    isWrapupenable=false;
	isSendsms=false;
	loginExtenstion='';
	teamName='';
	wrapupyesno:any;
	selectedwrapupyesno :any;
	customStyle :any;
  errormessage:any;
  postal: any;
  ScreeType:any;
  //receiveMessage: any;
  selectedWraup:any;
  selectedSubWraup:any;
  errormessag:any;
  receivedmessage:any;
  IsOutbound:any;
  IsPredictiveOutbound:any;

  constructor(private _httpClinet: CommonWebApiService){
    console.log(window["config"]);
    this.wrapup=window['config'].Wrapup;
    this.wrapupyesno=window['config'].Wrapupyesno;
    this.selectedwrapup = this.wrapup[0];
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }


  NgOnInit(){}
  
  turnGreen(){
	this.customStyle.style = {
    "color" : "#000000",
    "background-color" : "#00ff00",
    "font-size" : "15px",
  };
	}
  turnRed(){

		this.customStyle.style = {
    "color" : "#000000",
    "background-color" : "#ff0000",
    "font-size" : "15px",
  };
	}
 preskill(){
	this.customStyle.preskill = {
    "color" : "#ffbf00",
    "background-color" : "#6a0dad",
    "font-size" : "15px",
  };
	}
  turnBlue() {
    this.customStyle.style = {"color":"blue"};
}



  cleareErrormsg() {

  if (this.errormessage != '' || this.errormessage.errormessage != null) {
      this.errormessage = '';
  }
 
  // $timeout(cleareErrormsg, 5000);
};
 

  notifyMe() {
    
  // check if permission is already granted
  if (Notification.permission ==='granted') {
      // show notification here
      var notify = new Notification('Hi there!', {
          body: 'How are you doing?',
          icon: 'https://bit.ly/2DYqRrh',
      });
  } else {
      // request permission from user
      Notification.requestPermission().then(function (p) {
          if (p === 'granted') {
              // show notification here
              var notify = new Notification('Hi there!', {
                  body: 'How are you doing?',
                  icon: 'https://bit.ly/2DYqRrh',
              });
          } else {
              console.log('User blocked notifications.');
          }
      }).catch(function (err) {
          console.error(err);
          
      });
  }

}

submit ()
        {
          
		
          if (this.ScreenPopData.SRNumber == "" || this.ScreenPopData.SRNumber == undefined)
             {
              this.errormessage = 'Enter the SRNumber ';
	        return;
    }
    if (this.ScreenPopData.SelfVerifiedPIN == "" || this.ScreenPopData.SelfVerifiedPIN == undefined) {
        this.errormessage = 'Enter the Pin';
        return;
    }
	

        if (this.selectedwrapup.id == '00') {
                this.errormessage='Select wrapup';
                    return;
            }else{
                this.errormessag='';
            }
            var wrapup={AgentRemarks:this.agentRemarks,
                WrapString:this.selectedwrapup.description,
                WrapCode:this.selectedwrapup.id,
                CallID:this.ScreenPopData.CallKey,
                RegisterMobNo: this.ScreenPopData.RegisterNo,
                AgentID:this.loginID,
                AgentName:this.agentname,
                SRNumber: this.ScreenPopData.SRNumber,
                CallBackTaken: this.selectedwrapupyesno.description,
                CallBackTakenCode: this.selectedwrapupyesno.id,
                svPin: this.ScreenPopData.SelfVerifiedPIN,
				        Name: this.ScreenPopData.Name,
						    Agency: this.ScreenPopData.Agency
				
            }
              this._httpClinet.POSTInsertAgentRemarks(window['config'].CustomApiUrl,wrapup).subscribe({
                next: (Res: any) => {
                  console.log("api response", Res);
                  this.wrapupresData=Res.data;	
            if(this.wrapupresData=='SUCCESS')
            {
              this.errormessage="Wrapup Added successfully";
            }	
           else
            {
               this.errormessage="Wrapup Not Added successfully something went wrong";
            }	
                       
            
                            this.selectedwrapup = this.wrapup[0];
                            this.selectedwrapupyesno = this.wrapupyesno[0];
                        this.agentRemarks='';
              },
              error: (err: any) => {             
                this.errormessage = 'Unable to insert Wrapup data: ' + err.message;
               console.log(this.errormessage, err);
              }
            });
          /* httpService.httpRequest('POST',config.CustomApiUrl+"POSTInsertAgentRemarks",wrapup)
                        .then(function (val) {  *
						
                        },function (error) {
                       
                        })*/
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
                    if (calldata.type == "OnBeginCall") {
                         this.IsInbound = true;
                         var _language='';				
                    
                         switch (calldata.Callvariables.callVariable3) {
                                case 'ENG':
                                 _language='ENGLISH';
                                break;
                                case 'HIN':
                                   _language='HINDI';
                                break;
                                case 'PUN':
                                    _language='PUNJABI';
                                break;
                                case 'MAR':
                                    _language='MARATHI';
                                break;
                                case 'RAJ':
                                   _language='RAJASTHANI';
                                break;
                                case 'GUJ':
                                    _language='GUJARATI';
                                break;
                  case 'NA':
                                    _language='NA';
                                break;
                                default:
    
                         }
    
           // var obj=$filter('filter')(config.MenuMaster, function (d) {return d.id === calldata.Callvariables.callVariable4;})[0];
    
                     this.isWrapupenable=false;
          
               
               var Agency =calldata.Callvariables.callVariable8 ==  undefined||calldata.Callvariables.callVariable8 == ''  ? "NA" : calldata.Callvariables.callVariable8;
               var  Name= calldata.Callvariables.callVariable7 ==  undefined||calldata.Callvariables.callVariable7 == ''  ? "NA" : calldata.Callvariables.callVariable7;
             
            
    
                        var ScreenPopData = {
                            ANI: calldata.Callvariables.callVariable1,
                            RegisterNo: calldata.Callvariables.callVariable2,
                            LastMenu:'NA',
                            Language: _language,
                            SkillName :calldata.Callvariables.callVariable5,
                            CallKey:calldata.Callvariables.callVariable6,
                            CustomerID:calldata.Callvariables.callVariable7,
                    SelfVerifiedPIN:calldata.Callvariables.callVariable8,
              Name:Name,
              Agency:Agency
                        };
                                             
                        this.ScreenPopData= ScreenPopData;
                        this.ScreeType='INBOUND';                                    
                        this.IsInbound = true;
                        this.IsOutbound = false;
                        this.IsPredictiveOutbound = false;
                        if(this.ScreenPopData.SelfVerifiedPIN =="Y")
              {
    this.ScreenPopData.SelfVerifiedPIN = "YES";
                 this.turnGreen();
              }
    else
    {
    this.ScreenPopData.SelfVerifiedPIN = "NO";
    this.turnRed();
    }
    
    if(this.ScreenPopData.SkillName =="AU-ROYALE")
              {
    
                 this.preskill();					
                 }
    
                       //if(ScreenPopData.RegisterNo !='NA')
               if(ScreenPopData.ANI !='NA')
               {
                this._httpClinet.GETHistoryDetails(window['config'].CustomApiUrl).subscribe({
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
                  var callRemarks={ANI:ScreenPopData.ANI,
                 Language:ScreenPopData.Language,
                 CallKey:ScreenPopData.CallKey,
                  AgentID:this.loginID,
                  AgentName:this.agentname,
                Ext:this.loginExtenstion,
                Name:ScreenPopData.Name,
                Agency:ScreenPopData.Agency,
                 RegisterMobNo:ScreenPopData.RegisterNo,
                 SkillGroup:ScreenPopData.SkillName
                };   
                
                this._httpClinet.POSTInsertCallRemarks(window['config'].CustomApiUrl,JSON.stringify(callRemarks)).subscribe({
                  next: (Res: any) => {
                    console.log("api response", Res);
                                                       
                            
                  },
                  error: (err: any) => {
                    this.errormessage = 'Unable to insert calldata: ' + err.message;             
                   console.log(this.errormessage, err);
                  }
                });
                
                        
                    
                    }
            else if(calldata.type == "OnEndCall")
            {
              console.log(this.isSendsms);
             
    
                            
                    }
                                                   
                  break;
                }
                case 'UserLoad': {
                  debugger;
                  // this.appService.LoadAgentDetails(this.receivedmessage)
                  let calldata =this.receivedmessage;
                             
      
                  break;
                }
                case 'UserData':
                 
                let calldata =this.receivedmessage; 
               
                
                  if (calldata.state == "NOT_READY" || calldata.state == "READY") {
            
     
  
            this.teamName= calldata.TeamName;
                      this.isWrapupenable=true;
            this.agentRemarks='';
            console.log("UserChange event-"+this.teamName);
                     
                          this.errormessage = '';
                          this.ScreenPopData= {};
                          this.customStyle = {};
                    this.ScreeType='';
                          this.agentname=calldata.agentName
                          this.loginID=calldata.agentID;
              this.loginExtenstion= calldata.Extension;
                      
                  
                  }
          if(calldata.state == "NOT_READY")
          {
         
          }
          else
          {
            this.teamName= calldata.TeamName;
            //alert("UserChange event-"+this.teamName);
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
 


}
