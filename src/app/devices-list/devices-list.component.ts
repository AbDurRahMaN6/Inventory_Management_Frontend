import { Component, OnInit, Input } from '@angular/core';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersList } from '../models/usersList.model';
import { UsersDetailsListService } from '../_services/users-details-list.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  usersDetails?: UsersList[];
  currentUsers: UsersList = {};
  devices?: Devices[];
  currentDevices: Devices = {};
  currentIndex = -1;
  model = '';

  // @Input() viewMode = false;

  @Input() currentDevice: Devices = {
    serialId:'',
    model: '',
    deviceType: '',
    // available: false,
    username: ''
  };

  message = '';

  constructor(
    private devicesService: 
    DevicesService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private usersDetailsListServices: UsersDetailsListService) { }

  ngOnInit(): void {
    this.retrieveDevices();
    this.retrieveUsersDetails();
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

  retrieveDevices(): void {
    this.devicesService.getAll()
      .subscribe({
        next: (data) => {
          this.devices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDevices();
    this.retrieveUsersDetails();
    this.currentDevice = {};
    this.currentIndex = -1;
  }

  setActiveDevices(device: Devices, user: UsersList, index: number): void {
    this.currentDevice = device;
    this.currentUsers = user;
    this.currentIndex = index;
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
      status: this.currentDevice.status
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

  searchDevice(): void {
    this.currentDevice = {};
    this.currentIndex = -1;

    this.devicesService.findByDevice(this.model)
      .subscribe({
        next: (data) => {
          this.devices = data;
          console.log(data);
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