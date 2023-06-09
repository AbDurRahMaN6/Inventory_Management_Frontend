import { Component, Input, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentUsers: UsersList = {
    username: '',
    email: '',
    roles: '',
    password: '',
    rolling: ''
  };

  message = '';

  constructor(
    private userDetailsService: UsersDetailsListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUserList(this.route.snapshot.params["id"]);
    }    
  }

  getUserList(id: string): void {
    this.userDetailsService.getUsers(id)
      .subscribe({
        next: (usersLog) => {
          this.currentUsers = usersLog;
          console.log(usersLog);
        },
        error: (e) => console.error(e)
      });
  }

  updateUserDetails(): void {
    this.message = '';

    this.userDetailsService.updateUsers(this.currentUsers.id, this.currentUsers)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Users was updated successfully!';
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
          this.router.navigate(['/manager/users']);
        },
        error: (e) => console.error(e)
      });
  }

}