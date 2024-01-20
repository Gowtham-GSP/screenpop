import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppDataService } from './app.dataservice';
import { Observable } from 'rxjs';



const baseIP = 'hbprdctiwbap1.hbctxdom.com:85';
const baseURL = 'https://' + baseIP + '/apiCTI/api/';

@Injectable({
  providedIn: 'root'
})

export class CommonWebApiService {
  constructor(private httpClient:HttpClient,private appDataService:AppDataService){}

  GETHistoryDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETHistoryDetails?registerMobNo' + data);
  }
  POSTInsertCallRemarks(url: any, data: any){
    return this.httpClient.post(url + 'POSTInsertCallRemarks', data);
  }

  POSTInsertAgentRemarks(url:any,data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTInsertAgentRemarks', data);
  }
}
