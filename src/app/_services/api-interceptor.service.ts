import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNYW5hZ2VyMyIsImlhdCI6MTY4MTk2MTI5OSwiZXhwIjoxNjgyMDQ3Njk5fQ.UG3UnifcEr6kbG3ot4KM9jZPE7Cbb0LeEwLbVk63K-U6TN-GzqOz8OH6jBi4Jebu8uR_s-OJMmxqmW_yFt9tNQ';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
