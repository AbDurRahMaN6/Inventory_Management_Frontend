import { Component, OnInit } from '@angular/core';
import { UsersDetailsListService } from '../_services/users-details-list.service';
import { ManagersList } from '../models/managersList.model';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-add-managers',
  templateUrl: './add-managers.component.html',
  styleUrls: ['./add-managers.component.css']
})
export class AddManagersComponent implements OnInit {
  form: any = {};
  isUsersSuccessful = false;
  isUserFailed = false;
  errorMessage = '';
  confirm_password? : string;

  users: ManagersList = {
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