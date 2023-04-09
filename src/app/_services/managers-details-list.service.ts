import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersList } from '../models/usersList.model';


const baseUrl = 'http://localhost:8080/api/'
@Injectable({
  providedIn: 'root'
})
export class ManagersDetailsListService {
  

  constructor(private http: HttpClient) { }

  getManagers(username: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `admin/managers`}/${username}`);
  }

  getAllManagers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `admin/managers`);
  }

  updateManagers(username: any, managersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `admin/managers`}/${username}`, managersLog);
  }

  deleteManagers(username: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `admin/mangers`}/${username}`);
  }

}
