import { Observable } from 'rxjs/Observable';
import { JwtHttp } from '../../utils/jwt-http';
import { Injectable } from '@angular/core';
import { Housing } from '../../models/housing';

/*
  Generated class for the LodgingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LodgingsProvider {
  

  housings: Housing;

  url: string = "https://localhost:8443"

  constructor (private http: JwtHttp) {
    console.log('Hello LodgingsProvider Provider');
  }

  getAllLodgings(): Observable<any> {

    let lodgings = this.http.get(this.url + "/api/lodgings/");

    return lodgings;

  }

  getLodgingsByCity(city : string): Observable<any> {

    let lodgings = this.http.get(process.env.API + "/lodgings/" + city);

    return lodgings;

  }

  getLodgingsById(Id: number): Observable<any> {

    let lodgings = this.http.get(this.url + "/lodgings/" + Id);

    return lodgings;

  }






} 
