import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DevicesService } from 'src/app/_services/devices.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Devices } from 'src/app/models/devices.model';
import { UsersList } from 'src/app/models/usersList.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices?: Devices[];
  currentDevices: Devices = {};
  currentIndex = -1;
  model = '';

  @Input() currentDevice: Devices = {
    serialId:'',
    model: '',
    deviceType: '',
    status:'',
    deviceStatus:'',
    username: ''
  };

  message = '';

  constructor(private devicesService: DevicesService,
    private router: Router, private storageService: StorageService) { 
    }

  ngOnInit() {
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
    this.currentIndex = -1;
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

  deleteDevice(id: any): void {
    if(confirm('Are you sure Delete this device?'))
    this.devicesService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
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

 
  updateDevice(id: any): void {
    this.router.navigate(['manager/devices/update/', id]);
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}

