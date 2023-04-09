import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4MDg2MjczNCwiZXhwIjoxNjgwOTQ5MTM0fQ.5ao1-QagBFqm-IZEdqsA4I_zXB6kl8tsrCmJz_ld0f6p8u4vet_Bz_McOi82JSMwKHbSRQPen3Ggpz9FobC_Kw';

    let jwttoken = req.clone({
      setHeaders : {
        Authorization : 'Bearer ' + token 
      }
    })
    return next.handle(jwttoken);
  }
}
