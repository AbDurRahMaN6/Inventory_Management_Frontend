import { Component, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  form: any = {};
  isUsersSuccessful = false;
  isUserFailed = false;
  errorMessage = '';

  users: UsersList = {
    username: '',
    email: '',
    password: '',
    roles: '',
    rolling:'',
  };
  submitted = false;

  constructor(private usersDetailsListService: UsersDetailsListService) { }

  ngOnInit(): void {}

  saveUsers(): void {
    this.usersDetailsListService.createUsers(this.form).subscribe(
      data => {
        console.log(data);
        this.isUsersSuccessful = true;
        this.isUserFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isUserFailed = true;
      }
    );
  }

  // saveUsers(): void {
    // this.usersDetailsListService.createUsers(this.form).subscribe(
    //   usersLog => {
    //     console.log(usersLog);
    //     this.isUsersSuccessful = true;
    //     this.isUserFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isUserFailed = true;
    //   }
    // )
  //   const usersLog = {
  //     username: this.users.username,
  //     email: this.users.email,
  //     password: this.users.password,
  //     roles: this.users.roles,
  //     rolling: this.users.rolling
  //   };

  //   this.usersDetailsListService.createUsers(usersLog)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // newUsers(): void {
  //   this.submitted = false;
  //   this.users = {
  //     username:'',
  //     email: '',
  //     password: '',
  //     roles: '',
  //     rolling:''
  //   };
  // }

  // onSubmitUsers(): void {
  //   this.usersDetailsListService.createUsers(this.form).subscribe(
  //     usersLog => {
  //       console.log(usersLog);
  //       this.isUsersSuccessful = true;
  //       this.isUserFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isUserFailed = true;
  //     }
  //   );
  // }


}
