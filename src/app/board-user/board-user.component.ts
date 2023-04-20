import { Component, OnInit } from '@angular/core';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';
import { UserDevicesService } from '../_services/user-devices.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

  devices?: Devices[];
  currentDevice: Devices = {};
  currentIndex = -1;
  model = '';

  constructor(private devicesService: DevicesService, private userDevicesService: UserDevicesService) { }

  ngOnInit(): void {
    this.retrieveDevices();
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
    this.currentDevice = {};
    this.currentIndex = -1;
  }

  setActiveDevices(device: Devices, index: number): void {
    this.currentDevice = device;
    this.currentIndex = index;
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

}
