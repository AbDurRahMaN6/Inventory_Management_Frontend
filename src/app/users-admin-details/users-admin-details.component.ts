import { Component, Input, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-admin-details',
  templateUrl: './users-admin-details.component.html',
  styleUrls: ['./users-admin-details.component.css']
})
export class UsersAdminDetailsComponent implements OnInit {

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
      this.getAdminUserList(this.route.snapshot.params["id"]);
    }    
  }

  getAdminUserList(id: string): void {
    this.userDetailsService.getAdminUsers(id)
      .subscribe({
        next: (usersAdminLog) => {
          this.currentUsers = usersAdminLog;
          console.log(usersAdminLog);
        },
        error: (e) => console.error(e)
      });
  }

  updateAdminUserDetails(): void {
    this.message = '';

    this.userDetailsService.updateAdminUsers(this.currentUsers.id, this.currentUsers)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Users was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAdminUserDetails(): void {
    if(confirm('Are you Delete this User?'))
    this.userDetailsService.deleteAdminUsers(this.currentUsers.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/users']);
        },
        error: (e) => console.error(e)
      });
  }

}