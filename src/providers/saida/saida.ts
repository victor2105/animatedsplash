import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the SaidaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaidaProvider {

  constructor(public http: Http) {
    console.log('Hello SaidaProvider Provider');
  }

}
