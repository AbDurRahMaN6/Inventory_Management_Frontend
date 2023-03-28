import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'manager/devices', component: DevicesListComponent },
  { path: 'manager/devices/:id', component: DevicesDetailsComponent },
  { path: 'manager/addDevices', component: AddDevicesComponent }
  // {
  //   path: "manager",
  //   component: BoardManagerComponent,
  //   children: [
  //     { path: "manager/devices'", component: DevicesListComponent },
  //     { path: "manager/devices/:id", component: DevicesDetailsComponent },
  //     { path: "manager/addDevices", component: AddDevicesComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
