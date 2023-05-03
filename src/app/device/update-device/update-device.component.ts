import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from 'src/app/_services/devices.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Devices } from 'src/app/models/devices.model';
import { UsersList } from 'src/app/models/usersList.model';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})

export class UpdateDeviceComponent implements OnInit {
  currentUsers: UsersList = {};
  usersDetails?: UsersList[];
  currentIndex = -1;
  // currentDevices: Devices = {};

  @Input() currentDevice: Devices = {
    username: '',
    model:'',
    deviceStatus:'',
    deviceType:'',
  };

  message = '';

  id: any;
  device: Devices = new Devices();
  constructor(private devicesService: DevicesService,
    private route: ActivatedRoute,
    private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.devicesService.get(this.id).subscribe(data => {
      this.device = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.devicesService.update(this.id, this.device).subscribe( data =>{
      this.goToDeviceList();
    }
    , error => console.log(error));
  }

  goToDeviceList(){
    this.router.navigate(['/manager/devices']);
  }

  setActiveUsersDetails(user: UsersList, index: number): void {
    this.currentUsers = user;
    this.currentIndex = index;
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }
}