import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYW5hZ2VyMyIsImlhdCI6MTY4MTg4MzY1NiwiZXhwIjoxNjgxOTcwMDU2fQ.IuLprNJm28SC48hFpi8cv5lRYbKNJ1mb-zAQ5RYLRkT6cj77HnMIRTixulXznsY6ss6lxDMvNGqBNFO8kFoWuA';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
