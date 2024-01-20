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

  GetProcessInfo(url: string): Observable<any> {
    return this.httpClient.get(url + 'GetProcessInfo');
  }
  GetProcessResponsewithoutNA(url: string,data:any): Observable<any> {
    return this.httpClient.get(url + 'GetProcessResponsewithoutNA?processtype='+data);
  }

  GetWrapupCategoryDetails(url: string,data:any): Observable<any> {
    return this.httpClient.get(url + 'GetWrapupCategoryDetails?teamName=' +data + '&process=Insurance');
  }
  GetWrapupSubCategoryDetails(url: string,teamName:any,selectedWraup:any): Observable<any> {
    return this.httpClient.get(url + 'GetWrapupSubCategoryDetails?teamName=' +teamName + '&process=Insurance&category=' + selectedWraup);
  }

  POSTInsertCallRemarks(URL:any,data: any): Observable<any> {
    return this.httpClient.post(URL + 'POSTInsertCallRemarks', data);
  }
  POSTInsertAgentRemarks(URL:any,data: any): Observable<any> {
    return this.httpClient.post(URL + 'POSTInsertAgentRemarks', data);
  }
  GETHistoryDetails(url: string,data:any,ScreenPopData:any): Observable<any> {
    return this.httpClient.get(url + 'GETHistoryDetails?registerMobNo=' +data + ScreenPopData.ANI);
  }

}
