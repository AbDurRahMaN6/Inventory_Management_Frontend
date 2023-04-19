import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';
import { UsersList } from '../models/usersList.model';



const baseUrl = 'http://localhost:8080/api/manager/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Devices[]> {
    return this.http.get<Devices[]>(baseUrl);
  }

  get(id: any): Observable<Devices> {
    return this.http.get<Devices>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }


  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByDevice(model: any): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${baseUrl}?model=${model}`);
  }

}
