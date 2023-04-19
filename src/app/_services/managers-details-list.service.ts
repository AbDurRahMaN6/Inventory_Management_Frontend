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

  getManagers(id: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `admin/managers`}/${id}`);
  }

  getAllManagers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `admin/managers`);
  }

  updateManagers(id: any, managersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `admin/managers`}/${id}`, managersLog);
  }

  deleteManagers(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `admin/managers`}/${id}`);
  }

}
