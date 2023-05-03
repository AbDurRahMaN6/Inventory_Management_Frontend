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
  confirm_password? : string;

  users: UsersList = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
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

    if (this.users.password !== this.confirm_password) {
      alert('Passwords do not match!');
      return;
    }
  }

  

}
