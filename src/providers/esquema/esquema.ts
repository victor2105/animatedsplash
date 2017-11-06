import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DatabaseProvider } from '../database/database';
import { Esquema } from '../../models/esquema';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the EsquemaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EsquemaProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello EsquemaProvider Provider');
  }

  public saveUpdate(esquema: Esquema){
    if(esquema.id != 0){
      this.update(esquema);
    }else{
      this.insert(esquema);
    }
  }

  public insert(esquema: Esquema) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into esquemas (nome) values (?)';
        let data = [esquema.nome];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
 
  public update(esquema: Esquema) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update esquemas set nome=? where id = ?';
        let data = [esquema.nome, esquema.id];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from esquemas where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from esquemas where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let esquema = new Esquema();
              esquema.id = item.id;
              esquema.nome = item.nome;
 
              return esquema;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(active: boolean, name: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT e.* FROM esquemas p where e.ativo = ?';
        var data: any[] = [active ? 1 : 0];
 
        // filtrando pelo nome
        if (name) {
          sql += ' and p.nome like ?'
          data.push('%' + name + '%');
        }
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let esquemas: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var esquema = data.rows.item(i);
                esquemas.push(esquema);
              }
              return esquemas;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

}
