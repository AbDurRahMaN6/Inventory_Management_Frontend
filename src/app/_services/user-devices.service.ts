import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from '../models/devices.model';

const baseUrl = 'http://localhost:8080/api/users/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserDevicesService {
  findByDevice(model: string) {
  }

  constructor(private http: HttpClient) { }


  getAllDevices(): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${baseUrl + `/devices`}`);
  }

  getUsersDevices(username: string): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${baseUrl + `myDevice`}/${username}`);
  }

}
