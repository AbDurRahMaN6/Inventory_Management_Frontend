import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYW5hZ2VyMyIsImlhdCI6MTY4MzA4NjM0MiwiZXhwIjoxNjgzMTcyNzQyfQ.zao54SuwdaAoz9t3Z2LBqtQYb5zGl9i0RiOYBCYpCxV0XpZ9pKU0GzQeMeFh3L9xPAov9WikkkGGBJnIuBLacQ';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
