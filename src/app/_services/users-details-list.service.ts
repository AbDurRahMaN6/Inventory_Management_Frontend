import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersList } from '../models/usersList.model';
import { Devices } from '../models/devices.model';



const baseUrl = 'http://localhost:8080/api/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsListService {

  constructor(private http: HttpClient) { }

  getUsers(id: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `manager/users`}/${id}`);
  }
  
  getAllUsers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `manager/users`);
  }

  updateUsers(id: any, usersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `manager/users`}/${id}`, usersLog);
  }

  updateUsersDetailsList(id: any, usersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `manager/devices`}/${id}`, usersLog);
  }

  deleteUsers(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `manager/users`}/${id}`);
  }

  findByUsers(username: any): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(`${baseUrl + `manager/users`}?username=${username}`);
  }

  createUserDevice(id: any, device: Devices): Observable<Devices> {
    return this.http.post<Devices>(`${baseUrl + `user/${id}/device`}`, device);
  }

  getUserDevices(id: any,): Observable<Devices[]> {
    return this.http.get<Devices[]>(`${baseUrl + `user/${id}/device`}`);
  }


  createUsers(user: {
    username: any; email: any; password: any; rolling: any, roles: any
  }): Observable<any> {
    return this.http.post(baseUrl + `manager/users`, {
      username: user.username,
      email: user.email,
      password: user.password,
      rolling: user.rolling,
      roles: user.roles
    }, httpOptions);
  }

  getAdminUsers(id: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `admin/users`}/${id}`);
  }

  getAllAdminUsers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `admin/users`);
  }

  updateAdminUsers(id: any, usersAdminLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `admin/users`}/${id}`, usersAdminLog);
  }

  deleteAdminUsers(id: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `admin/users`}/${id}`);
  }

  
}
