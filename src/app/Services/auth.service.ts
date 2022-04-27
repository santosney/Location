import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from './http.service';
import { IonLoaderService } from './ion-loader.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>([]);
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  token = '';
  data = '';

  public AUTH = 'user';

constructor(
        private httpService: HttpService,
        private storageService: StorageService,
        private router: Router,
        private toastService: ToastService,
        ) {
          this.loadToken();
        }

    async loadToken() {
      this.storageService.get("user").then(token => {
        if (token) {
          this.isAuthenticated.next(true);
        } else {
          this.isAuthenticated.next(false);
        }   
      });
        
  }

    getUserData() {
          this.storageService.get("user").then(res => {
            
          this.userData$.next(res);
          });
      }

      getToken() {
        this.storageService.get("user").then(res => {
          this.data = res;
        });
        return this.data;
      }


      getData(key) {
        
        this.storageService.get(key).then(res => {
          this.data = res;
        });
        console.log("tttt  ",this.data)
        return this.data;
      }

      getToken1() {
        return this.storageService.get("user")
      }

      getUser() {
       return  this.storageService.get("user-login");
      }

  login(postData: any): Observable<any> {
    // return this.httpService.post('api/auth/', postData);
    console.log("---------------------------",{"jsonrpc":"2.0","params":postData})
    
    return this.httpService.post('api/authen/', {"jsonrpc":"2.0","params":postData}).pipe(
      catchError(err => {
        this.getUser().then((user) => {
          console.log("--------------Status------:", user.status);
          if (postData.email === user.email && postData.password === user.password) {
            if(postData.partner_type === user.partner_type){
              this.storageService.store("user",user.user).then();
              this.router.navigate(['home']);
            window.location.reload();
            }
          }else {
            this.toastService.presentToast(user.message);
            return;
          }
        })
        
        throw new Error("Erreur serveur");
      })
    );
  }


  logout() {
    this.storageService.removeStorageItem(this.AUTH).then(res => {
    this.router.navigate(['/login']);
    });
  }
}