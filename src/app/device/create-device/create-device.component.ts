import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'autoprefixer';
import { DevicesService } from 'src/app/_services/devices.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Devices } from 'src/app/models/devices.model';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})

export class CreateDeviceComponent implements OnInit {
  device: Devices = new Devices();
  submitted = false;


  constructor(private devicesService: DevicesService,
    private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.devicesService.create(this.device)
    .subscribe(data => console.log(data), error => console.log(error));
    this.device = new Devices();
    this.router.navigate(['/manager/devices']);
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

}