import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { ToastService } from './toast.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  parthnerUrl = ['api/get/landlord_info', 'api/get/tenant_info'];
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
        private api: ApiService,
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
        // console.log(this.storageService.get("data_landlord"));
       return  this.storageService.get("user-login");
      }

  login(postData: any): Observable<any> {
    // return this.httpService.post('api/auth/', postData);
    console.log("---------------------------",{"jsonrpc":"2.0","params":postData})
    
    return this.httpService.post('api/authen/', {"jsonrpc":"2.0","params":postData}).pipe(
     map(res => res['result']),
     tap(res => {
        console.log('-------------------Data login:', res);
        if(res['status'] === 200){
          const user = {'id': res['user'], 'email': postData.email, 'password': postData.password, 'partner_type': postData.partner_type};
          console.log('----------------User data format', user);
          this.storageService.store('user-login', user).then();
          
          if(postData.partner_type === "landlord"){
            this.api.getAllData(user.id, this.parthnerUrl[0]).subscribe((data) => {
                console.log(data);
                this.storageService.store('data_landlord', data['data']);
  
            });
          }else if (res['data'].partner_type === "tenant"){
             this.api.getAllData(user.id, this.parthnerUrl[1]).subscribe((data) => {
               this.storageService.store('Data', data['data']);
             });
          }
          // this.storageService.get("user-login").then((user) => {
          //   console.log("-----------user local", user);
          //   if(postData.email === user.email && postData.password === user.password){
          //     // this.loader.SimpleLoader(this.isLoanding)
          //     if(user.partner_type === "landlord"){
          //       this.router.navigate['home'];
          //       // window.location.reload();
          //     }else if(user.partner_type === "tenant"){
          //       this.router.navigate['properties'];
          //       // window.location.reload();
          //     }
          //   }

          // })
          this.toastService.presentToast('Session ouverte !');
        }else {
          this.toastService.presentToast(res['message']);
        }
     })
    );
  }


  logout() {
    this.storageService.removeStorageItem(this.AUTH).then(res => {
    this.router.navigate(['/login']);
    });
  }
}