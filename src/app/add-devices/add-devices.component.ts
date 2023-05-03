import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent implements OnInit {
  form: any = {};
  isDeviceSuccessful = false;
  isDeviceFailed = false;
  errorMessage = '';

  devices: Devices = {
    serialId: '',
    model: '',
    deviceType: '',
    // available: false
  };
  submitted = false;

  constructor(private devicesService: DevicesService) { }
  ngOnInit(): void {}

  saveDevices(): void {
    const data = {
      serialId: this.devices.serialId,
      model: this.devices.model,
      deviceType: this.devices.deviceType
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
      serialId:'',
      model: '',
      deviceType: '',
      // available: false
    };
  }

  onSub(): void {
    this.devicesService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isDeviceSuccessful = true;
        this.isDeviceFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isDeviceFailed = true;
      }
    );
  }

}
