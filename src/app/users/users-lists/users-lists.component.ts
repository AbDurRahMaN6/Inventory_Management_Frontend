import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { UsersDetailsListService } from 'src/app/_services/users-details-list.service';
import { UsersList } from 'src/app/models/usersList.model';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.css']
})
export class UsersListsComponent implements OnInit {

  usersDetails?: UsersList[];
  currentUsers: UsersList = {};
  currentIndex = -1;
  model = '';

  @Input() currentUser: UsersList = {
    username: '',
    email: '',
    password: '',
    roles: '',
    confirm_password: '',
  };

  message = '';

  constructor(private userDetailsService: UsersDetailsListService,
    private router: Router, private storageService: StorageService ){}

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

  getUsers(id: string): void {
    this.userDetailsService.getUsers(id)
      .subscribe({
        next: (usersLog) => {
          this.currentUser = usersLog;
          console.log(usersLog);
        },
        error: (e) => console.error(e)
      });
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
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

  deleteUserDetails(id: any): void {
    if(confirm('Are you Delete this User?'))
    this.userDetailsService.deleteUsers(id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  updateUser(id: any): void {
    this.router.navigate(['manager/users/update/', id]);
  }

  

}
