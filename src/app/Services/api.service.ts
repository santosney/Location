import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';
import { tap, map } from "rxjs/operators";

import { StorageService } from './storage.service';

 
const API_STORAGE_KEY = 'specialkey';

const API_URL_ = '';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  session_id="";
 
  constructor(private http: HttpClient,
      private storage: Storage,
       private storageService: StorageService,
       ) { 
    this.init();
    this.loadToken()
  }
 

  // recupere tous les datas
  getAllData(uid): Observable<any[]> {
      // Return real API data and store it locally
      return this.http.post<any[]>(API_URL_,{"jsonrpc":"2.0","params":{"uid":uid}}).pipe(
        map(res => res['result']),
        tap(res => {
          console.log("operateurs service--------  ",res);
          // this.setLocalData('res', res);
          this.setLocalData('data', res['gear'])
            
        })
      )
  }

  // Save result of API requests
  setLocalData(key, data) {
    return this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }
 
  // Get cached API result
    private getLocalData(key) {
      return this.storage.get(`${API_STORAGE_KEY}-${key}`);
    }

   getLocalData1(key) {
    
    return from(this.storage.get(`${API_STORAGE_KEY}-${key}`));
  }

  async init() {
    
    this.storage = await this.storage.create();
  }

  getLocalUserData(key) {
    this.storage.get(key).then((user)=> {return user});
  }


  async loadToken() {
    this.storageService.get("user").then(token => {
      if (token) {
        this.session_id = token;
      } 
    });
}


}



