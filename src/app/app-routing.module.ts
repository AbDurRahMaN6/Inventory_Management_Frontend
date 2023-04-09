import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserDevicesListComponent } from './user-devices-list/user-devices-list.component';
import { UsersDetailsListComponent } from './users-details-list/users-details-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { ManagersDetailsListComponent } from './managers-details-list/managers-details-list.component';
import { ManagersDetailsComponent } from './managers-details/managers-details.component';

const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component:BoardAdminComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'user/devices', component: UserDevicesListComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'manager/devices', component: DevicesListComponent },
  { path: 'manager/devices/:id', component: DevicesDetailsComponent },
  { path: 'manager/addDevices', component: AddDevicesComponent },
  { path: 'manager/users', component: UsersDetailsListComponent},
  { path: 'manager/users/:username', component: UsersDetailsComponent },
  { path: 'admin/manager', component: ManagersDetailsListComponent },
  { path: 'admin/manager/:username', component: ManagersDetailsComponent },
  { path: 'admin/users', component: UsersDetailsListComponent},
  { path: 'admin/users/:username', component: UsersDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
