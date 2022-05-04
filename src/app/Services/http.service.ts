import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  apiUrl:string =  'http://144.217.12.148:8069/';
  // apiUrl:string =  'http://26.174.238.244:8069/';


  constructor(private http: HttpClient) {}
  
    post(serviceName: string, data: any) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = { headers: headers};
        const url = this.apiUrl + serviceName;
        
        return this.http.post(url, JSON.stringify(data), options);
      }
  
      get(serviceName: string) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const options = { headers: headers};
        const url = this.apiUrl + serviceName;
        return this.http.get(url, options);
      }
  }