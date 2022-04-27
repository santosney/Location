import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }


  async init() {
    
    await this.storage.create();
    
  }

// Store the value
async store(storageKey: string, value: any) {
const Value = JSON.stringify(value);
await this.storage?.set(
storageKey,
Value
);

}

// Get the value
async get(storageKey: string) {
const ret = await this.storage?.get(storageKey );
return JSON.parse(ret);
}

async removeStorageItem(storageKey: string) {
await this.storage?.remove(storageKey );
}

// Clear storage
async clear() {
await this.storage?.clear();
}
}