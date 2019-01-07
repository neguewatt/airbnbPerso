import { Injectable }    from '@angular/core';
import {JwtHttp} from './jwt-http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor (private http: JwtHttp) {}
}
