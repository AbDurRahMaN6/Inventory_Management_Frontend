import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYW5hZ2VyMyIsImlhdCI6MTY4MDQ5MTk2OSwiZXhwIjoxNjgwNTc4MzY5fQ.WozjssZZ9VXMmFktAWhp7gxmLvO7q_lG_aMtt1RsCch8yT-UUcMWROkMs1A1ZjH6IHXHgde8wOlfZN3TUm7DtA';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
