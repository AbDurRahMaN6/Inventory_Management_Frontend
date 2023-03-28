import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Devices } from '../models/devices.model';
import { UserDevices } from '../models/userDevices.model';
import { UserDevicesService } from '../_services/user-devices.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
// export class BoardUserComponent implements OnInit {
//   deviceModels: string ="";
//   deviceTypes: string="";


//   constructor(private http:HttpClient){}

//   ngOnInit() : void {

//   }
  // Devices = [
  //   {
  //     name: 'Laptop',
  //     subItems: [
  //       { name: 'HP' },
  //       { name: 'Dell' },
  //       { name: 'Acer' },
  //       { name: 'Samsung' },
  //       { name: 'Razer' },
  //       { name: 'Asus' },
  //       { name: 'Dell' },
  //       { name: 'Lenovo' },
  //     ],
  //   },
  //   {
  //     name: 'Mobile',
  //     subItems: [
  //       { name: 'Samsung' },
  //       { name: 'Apple' },
  //       { name: 'Huawei' },
  //       { name: 'Nokia' },
  //       { name: 'Sony' },
  //       { name: 'LG' },
  //       { name: 'HTC' },
  //       { name: 'Motorola' },
  //     ],
  //   },
  //   {
  //     name: 'Tabs',
  //     subItems: [
  //       { name: 'Samsung Galaxy Tab A7' },
  //       { name: 'Lenovo Tab Yoga Smart Tablet' },
  //       { name: 'Samsung Galaxy Tab S7' },
  //       { name: 'Lenovo Tab M10 FHD Plus Tablet' },
  //     ],
  //   },
  // ];

  // selectedItems: any[] | undefined;


  // get the selected items and sub-items
// const selectedSubItems = [];
// this.selectedItems.forEach((item) => {
//   if (item.subItems) {
//     selectedSubItems.push(...item.subItems);
//   } else {
//     selectedSubItems.push(item);
//   }
// });

// // send the selected sub-items to the backend using HTTP
// this.http.post('/api/items', selectedSubItems).subscribe(
//   (response) => {
//     console.log('success', response);
//   },
//   (error) => {
//     console.error('error', error);
//   }
// );
// }


export class BoardUserComponent {
  devicesLaptop = []
    userDevices: UserDevices = {
      model: '',
      deviceType: '',
    };
    submitted = false;

  
    constructor(private userDevicesService: UserDevicesService ) { }
  
    saveUserDevices(): void {
      const data = {
        model: this.userDevices.model,
        deviceType: this.userDevices.deviceType
      };
  
      this.userDevicesService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }
  
    newUserDevices(): void {
      this.submitted = false;
      this.userDevices = {
        model: '',
        deviceType: '',
      };
    }

    selectLaptop() : void {
      this.devicesLaptop = [
        // {"id": 1 , "ItemName": "Dell"},
        
      ]
    }
  }
  

