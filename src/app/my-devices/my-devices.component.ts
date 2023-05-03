import { Component, OnInit } from '@angular/core';
import { Devices } from '../models/devices.model';
import { UserDevicesService } from '../_services/user-devices.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.css'],
})
export class MyDevicesComponent implements OnInit {
  usersDevices?: Devices[];
  currentDevice: Devices = {};
  currentIndex = -1;
  model = '';

  constructor(private userDevicesService: UserDevicesService, private storageService: StorageService) {}

  ngOnInit() {
    this.usersGetDevices();
  }

  usersGetDevices(): void {
    this.userDevicesService.getUsersDevices(this.currentDevice.id).subscribe({
      next: (userDevicesList) => {
        this.usersDevices = userDevicesList;
        console.log(userDevicesList);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.usersGetDevices();
    this.currentDevice = {};
    this.currentIndex = -1;
  }

  setActiveUsersDevices(userDevice: Devices, index: number): void {
    this.currentDevice = userDevice;
    this.currentIndex = -1;
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}
