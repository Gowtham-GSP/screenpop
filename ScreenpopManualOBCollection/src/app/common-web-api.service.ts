import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseIP = 'hbprdctiwbap1.hbctxdom.com:85';
const baseURL = 'https://'+baseIP+ '/apiCTI/api/'; 

@Injectable({
  providedIn: 'root'
})
export class CommonWebApiService {

  constructor(private httpClient:HttpClient) { }

  GETOutboundHistoryDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETOutboundHistoryDetails?callernumber='+ data );
  }

  GetLoanNoData(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GetLoanNoData?callernumber='+ data );
  }

  GetAccountDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GetAccountDetails?callernumber='+ data );
  }
  GetScreenpopData(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GetScreenpopData?callernumber='+ data );
  }
  GETAllOutboundHistoryDetails(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETAllOutboundHistoryDetails?agentID='+ data );
  }

  // GETOutboundHistoryDetails(url: any, data: any): Observable<any> {
  //   return this.httpClient.get(url + ' GETOutboundHistoryDetails?callernumber='+ data );
  // }

  POSTInsertOutboundData(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + 'POSTInsertOutboundData', data );
  }

  // GETAllOutboundHistoryDetails(url: any, data: any): Observable<any> {
  //   return this.httpClient.get(url + 'GETAllOutboundHistoryDetails?agentID='+ data );
  // }
  POSTFlowDataInsert(url: any, data: any): Observable<any> {
    return this.httpClient.post(url + ' POSTFlowDataInsert', data );
  }

  // GETAllOutboundHistoryDetails(url: any, data: any): Observable<any> {
  //   return this.httpClient.get(url + 'GetScreenpopData?callernumber='+ data );
  // }
  
  GETWrapupCodes(url: any, data: any): Observable<any> {
    return this.httpClient.get(url + 'GETWrapupCodes?teamID='+ data );
  }
}

