import { Component, OnInit } from '@angular/core';
import { UserDevices } from '../models/userDevices.model';
import { UserDevicesService } from '../_services/user-devices.service';

@Component({
  selector: 'app-user-devices-list',
  templateUrl: './user-devices-list.component.html',
  styleUrls: ['./user-devices-list.component.css']
})
export class UserDevicesListComponent implements OnInit {

  devices?: UserDevices[];
  currentUserDevice: UserDevices = {};
  currentUserIndex = -1;
  model = '';

  constructor(private userDevicesService: UserDevicesService) { }

  ngOnInit(): void {

  }
  refreshList(): void {
    this.currentUserDevice = {};
    this.currentUserIndex = -1;
  }

  setActiveDevices(device: UserDevices, index: number): void {
    this.currentUserDevice = device;
    this.currentUserIndex = index;
  }
} 
