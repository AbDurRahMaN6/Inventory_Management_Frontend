import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';

const baseUrl = 'http://localhost:8080/api/users/devices'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDevicesService {
  findByDevice(model: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }


  getAll(): Observable<Devices[]> {
    return this.http.get<Devices[]>(baseUrl);
  }

// delete(id: any): Observable<any> {
//   return this.http.delete(`${baseUrl}/${id}`);
// }

// deleteAll(): Observable<any> {
//   return this.http.delete(baseUrl);
// }
}
