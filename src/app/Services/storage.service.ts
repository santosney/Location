import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // private _storage: Storage | null = null;

  constructor(private stor: Storage,) {
    this.init();
  }


  async init() {
    
    await this.stor.create();
    
  }

// Store the value
async store(storageKey: string, value: any) {
const Value = JSON.stringify(value);
await this.stor?.set(storageKey, Value);
}

// Get the value
async get(storageKey: string) {
const ret = await this.stor?.get(storageKey );
return JSON.parse(ret);
}

async removeStorageItem(storageKey: string) {
await this.stor?.remove(storageKey );
}

// Clear storage
async clear() {
await this.stor?.clear();
}
}