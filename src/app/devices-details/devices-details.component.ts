import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices } from '../models/devices.model';
import { DevicesService } from '../_services/devices.service';

@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.css']
})
export class DevicesDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentDevice: Devices = {
    model: '',
    deviceType: '',
    published: false
  };
  
  message = '';

  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDevice(this.route.snapshot.params["id"]);
    }
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

  updatePublished(status: boolean): void {
    const data = {
      model: this.currentDevice.model,
      type: this.currentDevice.deviceType,
      published: status
    };

    this.message = '';

    this.devicesService.update(this.currentDevice.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentDevice.published = status;
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
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteDevice(): void {
    this.devicesService.delete(this.currentDevice.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/devices']);
        },
        error: (e) => console.error(e)
      });
  }

}