import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent {
  devices: Devices = {
    model: '',
    deviceType: '',
    published: false
  };
  submitted = false;

  constructor(private devicesService: DevicesService) { }

  saveDevices(): void {
    const data = {
      model: this.devices.model,
      type: this.devices.deviceType
    };

    this.devicesService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDevices(): void {
    this.submitted = false;
    this.devices = {
      model: '',
      deviceType: '',
      published: false
    };
  }
}
