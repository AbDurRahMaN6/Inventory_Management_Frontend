import { Component, Input, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { ManagersDetailsListService } from '../_services/managers-details-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-managers-details',
  templateUrl: './managers-details.component.html',
  styleUrls: ['./managers-details.component.css']
})
export class ManagersDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentManagerList: UsersList = {
    username:'',
    email: '',
    roles: '',
  };

  message = '';

  constructor (private managersDetailsService: ManagersDetailsListService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getManager(this.route.snapshot.params["username"]);
    }
  }

  getManager(username: string):void{
    this.managersDetailsService.getManagers(username)
      .subscribe({
        next: (userManager) => {
          this.currentManagerList = userManager;
          console.log(userManager);
        },
        error: (e) => console.error(e)
      });
  }

  updateManagersList(): void {
    this.message = '';

    this.managersDetailsService.updateManagers(this.currentManagerList.username, this.currentManagerList)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Manager was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteManagerList(): void {
    if(confirm('Are you Delete this device?'))
    this.managersDetailsService.deleteManagers(this.currentManagerList.username)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/manager/devices']);
        },
        error: (e) => console.error(e)
      });
  }


}
