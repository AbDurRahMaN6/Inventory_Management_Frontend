import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';

const baseUrl = 'http://localhost:8080/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDevicesService {

  constructor(private http: HttpClient) { }

create(data: any): Observable<any>{
  return this.http.post(baseUrl + 'devices', data, httpOptions)
}


// getAll(): Observable<Devices[]> {
//   return this.http.get<Devices[]>(baseUrl);
// }

// delete(id: any): Observable<any> {
//   return this.http.delete(`${baseUrl}/${id}`);
// }

// deleteAll(): Observable<any> {
//   return this.http.delete(baseUrl);
// }
}
