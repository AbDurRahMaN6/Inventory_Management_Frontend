import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4MTYyODY2MiwiZXhwIjoxNjgxNzE1MDYyfQ.qyfruFLjBeXe3eDpRRjGLVlzXAUh-kblZIZ_Xs1Mu2u617FNYrus8BVhYlVlHf3lK_h20PK72eKID27Nw57yyQ';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
