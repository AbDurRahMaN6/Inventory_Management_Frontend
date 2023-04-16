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
    id:'',
    email: '',
    roles: '',
    password:'',
  };

  message = '';

  constructor (private managersDetailsService: ManagersDetailsListService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getManager(this.route.snapshot.params["id"]);
    }
  }

  getManager(id: string):void{
    this.managersDetailsService.getManagers(id)
      .subscribe({
        next: (managersLog) => {
          this.currentManagerList = managersLog;
          console.log(managersLog);
        },
        error: (e) => console.error(e)
      });
  }

  updateManagersList(): void {
    this.message = '';

    this.managersDetailsService.updateManagers(this.currentManagerList.id, this.currentManagerList)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Manager was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteManagerList(): void {
    if(confirm('Are you Delete this manager?'))
    this.managersDetailsService.deleteManagers(this.currentManagerList.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/admin/managers']);
        },
        error: (e) => console.error(e)
      });
  }


}
