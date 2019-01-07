import { Http, Response, RequestOptionsArgs, RequestOptions, XHRBackend, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageUtils } from '../utils/localStorageUtils';

const APPLICATION_JSON: string = 'application/json';
const AUTHORIZATION_TYPE_HEADER: string = 'Authorization';
const CONTENT_TYPE_HEADER: string = 'Content-Type';

export class JwtHttp extends Http {

    message: string;
    // options: any;
    constructor(_backend: XHRBackend, _defaultOptions: RequestOptions) {
        super(_backend, _defaultOptions);
        console.log('JwtHttp constructor');
    }
    setAuthorizationHeader(options: RequestOptionsArgs) {
        let jwt: string = StorageUtils.getToken();

        if (jwt && (options === undefined || (options && options.headers.get(CONTENT_TYPE_HEADER) === null))) {
            if (options === undefined) {
                options = {
                    headers: new Headers()
                }
                options.headers.append(AUTHORIZATION_TYPE_HEADER, 'Bearer ' + jwt);
                options.headers.append(CONTENT_TYPE_HEADER, APPLICATION_JSON);
            }
        }

        return options;
    }
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {

        return super.get(url, this.setAuthorizationHeader(options));
    }
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        let option = this.setAuthorizationHeader(options);
        console.log("---->", option);
        return super.post(url, body, option);
    }
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.setAuthorizationHeader(options));
    }
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.setAuthorizationHeader(options);
        return super.patch(url, body, options);
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.setAuthorizationHeader(options);
        return super.delete(url, options);
    }
}
