import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHttp } from '../utils/jwt-http';


const CONTENT_TYPE_HEADER: string = 'Content-Type';
const URLENCODED: string = 'application/x-www-form-urlencoded';
const CLIENT_ID: string = 'airbnb';
const CLIENT_KEY: string = 'Consert0-BNB';

@Injectable()
export class AuthProvider {

    urlServer: string = 'https://tomcat-rbb.consertotech.pro:8080/';
    url: string = 'localhost:8443/';
    headers:any = new Headers();

    constructor (private http: JwtHttp) {}

    login(username, password) {

        let bodyCredentials = new HttpParams()
            .set('grant_type', 'password')
            .set('username', username)
            .set('password', password);

        console.log(bodyCredentials);
        // Requête post au BackEnd
        console.log("data credentials:", bodyCredentials.toString());
        this.headers.set(CONTENT_TYPE_HEADER, URLENCODED);
        return this.http.post('https://'+CLIENT_ID+':'+CLIENT_KEY+'@'+this.url + 'oauth/token', bodyCredentials.toString(), { headers: this.headers });
    }
}