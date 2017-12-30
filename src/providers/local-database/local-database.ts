import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Cel } from '../../models/cel';

/*
  Generated class for the LocalDatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDatabaseProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(cel: Cel) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, cel);
  }

  public save(key: string, cel: Cel) {
    return this.storage.set(key, cel);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    let cels: CelList[] = [];
    return this.storage.forEach((value: Cel, key: string, iterationNumber: Number) => {
      let cel = new CelList();
      cel.key = key;
      cel.cel = value;
      cels.push(cel);
    })
      .then(() => {
        return Promise.resolve(cels);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class CelList {
  key: string;
  cel: Cel;
}
