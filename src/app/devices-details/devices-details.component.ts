import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';

@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.css'],
})


export class DevicesDetailsComponent implements OnInit {

  usersDetails?: UsersList[];
  currentUsers: UsersList = {};
  currentIndex = -1;
  model = '';
  
  @Input() viewMode = false;

  @Input() currentDevice: Devices = {
    serialId:'',
    model: '',
    deviceType: '',
    // available: false,
    username: ''
  };

  @Input() usersList: UsersList = {
    username: ''
  }
  
  message = '';

  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute,
    private router: Router,
    private usersDetailsListServices: UsersDetailsListService
    ) 
    { }

  ngOnInit(): void {
    this.retrieveUsersDetails();
    if (!this.viewMode) {
      this.message = '';
      this.getDevice(this.route.snapshot.params["id"]);
    }
  }

  retrieveUsersDetails(): void {
    this.usersDetailsListServices.getAllUsers()
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

  setActiveUsersDetails(user: UsersList, index: number): void {
    this.currentUsers = user;
    this.currentIndex = index;
  }


  getDevice(id: string): void {
    this.devicesService.get(id)
      .subscribe({
        next: (data) => {
          this.currentDevice = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateAvailable(status: boolean): void {
    const data = {
      serialId: this.currentDevice.serialId,
      model: this.currentDevice.model,
      type: this.currentDevice.deviceType,
      username: this.currentDevice.username,
      status: this.currentDevice.status,
    };
    

    this.message = '';

    this.devicesService.update(this.currentDevice.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.currentDevice.available = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });

  }

  updateDevice(): void {
    this.message = '';

    this.devicesService.update(this.currentDevice.id, this.currentDevice)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Device was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteDevice(): void {
    if(confirm('Are you Delete this device?'))
    this.devicesService.delete(this.currentDevice.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/manager/devices']);
        },
        error: (e) => console.error(e)
      });
  }

}