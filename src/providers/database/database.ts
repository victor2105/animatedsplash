import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  /**
   * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
   */
  public getDB() {
    return this.sqlite.create({
      name: 'esquemas.db',
      location: 'default'
    });
  }

  /**
   * Cria a estrutura inicial do banco de dados
   */
  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

        // Inserindo dados padrão
        //this.insertDefaultItems(db);

      })
      .catch(e => console.log(e));
  }


  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS esquemas (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT, ativo integer)'],
      ['CREATE TABLE IF NOT EXISTS grupos (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT, valor REAL, funcao TEXT, validade DATE, ativo integer, esquema integer, FOREIGN KEY(esquema) REFERENCES esquemas(id))'],
      ['CREATE TABLE IF NOT EXISTS celulas (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT, valor REAL, funcao TEXT, validade DATE, ativo integer, grupo integer, FOREIGN KEY(grupo) REFERENCES grupos(id))']
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }


}
