import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersList } from '../models/usersList.model';

const baseUrl = 'http://localhost:8080/api/'
@Injectable({
  providedIn: 'root'
})
export class UsersDetailsListService {

  constructor(private http: HttpClient) { }

  getUsers(username: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `manager/users`}/${username}`);
  }

  getAllUsers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `manager/users`);
  }

  updateUsers(username: any, usersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `manager/users`}/${username}`, usersLog);
  }

  deleteUsers(username: any, usersLog: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `manager/users`}/${username}`, usersLog);
  }

  create(usersLog: any): Observable<any> {
    return this.http.post(baseUrl, usersLog);
  }

  getAdminUsers(username: any): Observable<UsersList>{
    return this.http.get<UsersList>(`${baseUrl + `admin/users`}/${username}`);
  }

  updateAdminUsers(username: any, usersLog: any): Observable<any> {
    return this.http.put(`${baseUrl+ `admin/users`}/${username}`, usersLog);
  }

  deleteAdminUsers(username: any, usersLog: any): Observable<any> {
    return this.http.delete(`${baseUrl+ `admin/users`}/${username}`, usersLog);
  }

  getAllAdminUsers(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(baseUrl + `admin/users`);
  }




}
