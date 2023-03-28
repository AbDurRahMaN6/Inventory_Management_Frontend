import { Component, OnInit } from '@angular/core';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  devices?: Devices[];
  currentDevice: Devices = {};
  currentIndex = -1;
  model = '';

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
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
    this.retrieveTutorials();
    this.currentDevice = {};
    this.currentIndex = -1;
  }

  setActiveDevices(device: Devices, index: number): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }

  removeAllDevices(): void {
    this.devicesService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchDevice(): void {
    this.currentDevice = {};
    this.currentIndex = -1;

    this.devicesService.findByTitle(this.model)
      .subscribe({
        next: (data) => {
          this.devices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}