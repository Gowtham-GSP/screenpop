import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseIP = 'hbprdctiwbap1.hbctxdom.com:85';
const baseURL = 'https://'+baseIP+ '/apiCTI/api/'; 

@Injectable({
  providedIn: 'root'
})
export class CommonWebApiService {

  constructor(private httpClient: HttpClient) { }


  POSTInsertCallEnd(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTInsertCallEnd', data);
  }

  GETHistoryDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETHistoryDetails?registerMobNo=', data);
  }

  POSTInsertCallRemarks(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTInsertCallRemarks', data);
  }

  POSTInsertAgentRemarks(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTInsertAgentRemarks', data);
  }

  GETWrapupCodes(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETWrapupCodes?department=', data);
  }
  GETDepartementMaster(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETDepartementMaster', data);
  }
  GETHistoryDetails1(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETHistoryDetails?CallerNumber=', data);
  }
  GetScreenpopData(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GetScreenpopData?callernumber=', data);
  }
  GETAllOutboundHistoryDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETAllOutboundHistoryDetails?agentID=', data);
  }
  GETHistoryDetails2(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETHistoryDetails?CallerNumber=', data);
  }
  POSTInsertOutboundData(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + ' POSTInsertOutboundData', data);
  }
  POSTFlowDataInsert(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTFlowDataInsert', data);
  }
  // GETAllOutboundHistoryDetails(url: any, data: any): Observable<any> {
  //   return this.httpClient.get(url + 'GETAllOutboundHistoryDetails?agentID=', data);
  // }

  GETWrapupCodes1(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETWrapupCodes?teamID=', data);
  }
}
