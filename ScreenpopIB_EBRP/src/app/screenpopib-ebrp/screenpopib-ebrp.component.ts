import { Component } from '@angular/core';
import { CommonWebApiService } from '../common-web-api.service';

@Component({
  selector: 'app-screenpopib-ebrp',
  templateUrl: './screenpopib-ebrp.component.html',
  styleUrls: ['./screenpopib-ebrp.component.css']
})
export class ScreenpopibEbrpComponent {


  IsInbound = true;
   history:any;
   ScreenPopData:any;
   loginID='';
   agentname='';
   wrapup:any;
   selectedwrapup:any;
   agentRemarks='';
   isWrapupenable=true;
	loginExtenstion='';
  IsOutbound:any;
  IsPredictiveOutbound:any;  ScreeType:any;   errormessage:any;   receivedmessage:any   

  constructor(private _httpClient:CommonWebApiService){
    console.log(window["config"]);
    this.wrapup=window['config'].Wrapup;
    this.selectedwrapup = this.wrapup[0];
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
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
                     default:

              }

//  var obj=$filter('filter')(window["config"].MenuMaster, function (d:any) {return d.id === calldata.Callvariables.callVariable4;})[0];

          this.isWrapupenable=false;
             var ScreenPopData = {
                 ANI: calldata.Callvariables.callVariable1,
                 RegisterNo: calldata.Callvariables.callVariable2,
                 LastMenu:'NA',
     //LastMenu:calldata.Callvariables.callVariable4,
                 Language: _language,
                 SkillName :calldata.Callvariables.callVariable5,
                 CallKey:calldata.Callvariables.callVariable6,
                 CustomerID:calldata.Callvariables.callVariable7
             };
             
           

            
             this.ScreenPopData= ScreenPopData;
             this.ScreeType='INBOUND';
            
            
             this.IsInbound = true;
             this.IsOutbound = false;
             this.IsPredictiveOutbound = false;
             
            //if(ScreenPopData.RegisterNo !='NA')
    if(ScreenPopData.ANI !='NA')
    {
             //httpService.httpRequest('GET',config.CustomApiUrl+'GETHistoryDetails?registerMobNo='+ScreenPopData.RegisterNo,'')

             this._httpClient.GETHistoryDetails(window['config'].CustomApiUrl,ScreenPopData.ANI).subscribe({
              next: (Res: any) => {
                console.log("api response", Res);
                this.history = Res.data;       
                                          
              },
              error: (err: any) => {
                
                this.errormessage = 'Unable to load History data: ' + err.message;
               console.log(this.errormessage, err);
              }
            });
   /*----------httpService.httpRequest('GET',config.CustomApiUrl+'GETHistoryDetails?registerMobNo='+ScreenPopData.ANI,'')
                     .then(function (val:any) {
                     this.history = val.data;
                     
                ;
                     },function (error:any) {
                     this.errormessage = 'Unable to load History data: ' + error.message;
                     }); -----------*/
            }
                 var callRemarks={ANI:ScreenPopData.ANI,
                 RegisterMobNo:ScreenPopData.RegisterNo,
                 LastMenu:ScreenPopData.LastMenu,
                 Language:ScreenPopData.Language,
                 CustomerID:ScreenPopData.CustomerID,
                 CallKey:ScreenPopData.CallKey,
                 SkillGroup:ScreenPopData.SkillName,
                 AgentID:this.loginID,
                 AgentName:this.agentname,
     Ext : this.loginExtenstion
     }   

     this._httpClient.POSTInsertCallRemarks(window['config'].CustomApiUrl,callRemarks).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
                            
                
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to insert calldata: ' + err.message;
       console.log(this.errormessage, err);
      }
    });
                   
             /*----------- httpService.httpRequest('POST',config.CustomApiUrl+'POSTInsertCallRemarks',callRemarks)
                 .then(function (val) {
                
                 },function (error) {
                 this.errormessage = 'Unable to insert calldata: ' + error.message;
                 });--------*/
                 
         }
             
            
            break;
          }
          case 'UserData': {
            debugger;
            // this.appService.LoadAgentDetails(this.receivedmessage)
            let calldata =this.receivedmessage;
              
            this.receiveMessage = JSON.parse(event.data);
            if (calldata.state == "NOT_READY" || calldata.state == "READY") {
                this.isWrapupenable=true;
                  this.agentRemarks='';
                    this.errormessage = '';
                    this.ScreenPopData= {};
                    this.ScreeType='';
                    this.agentname=calldata.agentName
                    this.loginID=calldata.agentID;
        this.loginExtenstion= calldata.Extension;
                        
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
  submit() {

    if(this.selectedwrapup.id =='00'){
       this.errormessage='Select wrapup';
            return;
    }else{
       this.errormessage='';
    }
    var wrapup={AgentRemarks:this.agentRemarks,
        WrapString:this.selectedwrapup.description,
        WrapCode:this.selectedwrapup.id,
        CallID:this.ScreenPopData.CallKey,
        RegisterMobNo:this.ScreenPopData.RegisterNo,
        AgentID:this.loginID,
        AgentName:this.agentname

    }

    this._httpClient.POSTInsertAgentRemarks(window['config'].CustomApiUrl,wrapup).subscribe({
      next: (Res: any) => {
        console.log("api response", Res);
                 
        this.errormessage="Wrapup Added successfully";
        this.selectedwrapup= this.wrapup[0];
        this.agentRemarks='';           
                
      },
      error: (err: any) => {
        
        this.errormessage = 'Unable to insert Wrapup data: ' + err.message;
       console.log(this.errormessage, err);
      }
    });
  /*-------- httpService.httpRequest('POST',config.CustomApiUrl+"POSTInsertAgentRemarks",wrapup)
                .then(function (val) {
               this.errormessage="Wrapup Added successfully";
                this.selectedwrapup= this.wrapup[0];
                this.agentRemarks='';
                },function (error) {
               this.errormessage = 'Unable to insert Wrapup data: ' + error.message;
                }); -----------*/
}
}