import { Component, OnInit } from '@angular/core';
import { UsersList } from '../models/usersList.model';
import { ManagersDetailsListService } from '../_services/managers-details-list.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-managers-details-list',
  templateUrl: './managers-details-list.component.html',
  styleUrls: ['./managers-details-list.component.css']
})
export class ManagersDetailsListComponent implements OnInit {

  managers?: UsersList[];
  currentManagers: UsersList = {};
  currentIndex = -1;
  model = '';
  constructor(private managersDetailsListService: ManagersDetailsListService, private storageService: StorageService){}
  ngOnInit(): void {
    this.retrieveManagers()
  }

  retrieveManagers(): void {
    this.managersDetailsListService.getAllManagers().subscribe({
      next: (managerDtls) => {
        this.managers = managerDtls;
        console.log(managerDtls);
      },
      error: (e) => console.error(e)
    })
  }


  setActivemanagers(manager: UsersList, index: number): void {
    this.currentManagers = manager;
    this.currentIndex = index;
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

  

  

}
