import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { UsersDetailsListService } from 'src/app/_services/users-details-list.service';
import { UsersList } from 'src/app/models/usersList.model';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
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

  constructor(private usersDetailsListService: UsersDetailsListService, private storageService: StorageService) { }

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

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }


}