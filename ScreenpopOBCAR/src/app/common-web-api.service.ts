import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

const baseIP = 'hbprdctiwbap1.hbctxdom.com:85';
const baseURL = 'https://'+baseIP+ '/apiCTI/api/'; 

@Injectable({
  providedIn: 'root'
})
export class CommonWebApiService {

    constructor(private httpClient: HttpClient) { }

    GETHistoryDetails(data:any):Observable<any>{
        return this.httpClient.get(baseURL+'GETHistoryDetails?registerMobNo='+data)
    }
    POSTInsertCallRemarks(url:any,data:any):Observable<any>{
        return this.httpClient.post(baseURL+'POSTInsertCallRemarks?registerMobNo=',data)
    }

    POSTInsertAgentRemarks(URL:any,data: any): Observable<any> {
    return this.httpClient.post(baseURL + 'POSTInsertAgentRemarks', data);
  }


}