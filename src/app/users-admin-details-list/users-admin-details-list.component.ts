import { Component, Input, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-users-admin-details-list',
  templateUrl: './users-admin-details-list.component.html',
  styleUrls: ['./users-admin-details-list.component.css']
})
export class UsersAdminDetailsListComponent implements OnInit {

  usersDetails?: UsersList[];
  currentUsers: UsersList = {};
  currentIndex = -1;
  model = '';

  constructor(private userDetailsService: UsersDetailsListService, private storageService: StorageService){}

  ngOnInit(): void {
    this.retrieveAdminUsersDetails();
  }

  retrieveAdminUsersDetails(): void {
    this.userDetailsService.getAllAdminUsers()
      .subscribe({
        next: (usersAdminLog) => {
          this.usersDetails = usersAdminLog;
          console.log(usersAdminLog);
        },
        error: (e) => console.error(e)
      });
  }

  refreshListUsers(): void {
    this.retrieveAdminUsersDetails();
    this.currentUsers = {};
    this.currentIndex = -1;
  }

  setActiveAdminUsersDetails(user: UsersList, index: number): void {
    this.currentUsers = user;
    this.currentIndex = index;
  }

  searchUserName(): void {
    this.currentUsers = {};
    this.currentIndex = -1;

    this.userDetailsService.findByUsers(this.model)
      .subscribe({
        next: (usersLog) => {
          this.usersDetails = usersLog;
          console.log(usersLog);
        },
        error: (e) => console.error(e)
      });
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

  

}
