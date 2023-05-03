import { Component, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';

@Component({
  selector: 'app-users-details-list',
  templateUrl: './users-details-list.component.html',
  styleUrls: ['./users-details-list.component.css']
})
export class UsersDetailsListComponent implements OnInit {

  usersDetails?: UsersList[];
  currentUsers: UsersList = {};
  currentIndex = -1;
  model = '';

  constructor(private userDetailsService: UsersDetailsListService){}

  ngOnInit(): void {
    this.retrieveUsersDetails();
  }

  retrieveUsersDetails(): void {
    this.userDetailsService.getAllUsers()
      .subscribe({
        next: (usersLog) => {
          this.usersDetails = usersLog;
          console.log(usersLog);
        },
        error: (e) => console.error(e)
      });
  }

  refreshListUsers(): void {
    this.retrieveUsersDetails();
    this.currentUsers = {};
    this.currentIndex = -1;
  }

  setActiveUsersDetails(user: UsersList, index: number): void {
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

  deleteUserDetails(): void {
    if(confirm('Are you Delete this User?'))
    this.userDetailsService.deleteUsers(this.currentUsers.id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  

}
