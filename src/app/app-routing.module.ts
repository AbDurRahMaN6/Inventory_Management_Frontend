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
import { UsersDetailsListComponent } from './users-details-list/users-details-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { ManagersDetailsListComponent } from './managers-details-list/managers-details-list.component';
import { ManagersDetailsComponent } from './managers-details/managers-details.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AuthGuard } from './_services/guard/auth.guard';
import { UsersAdminDetailsComponent } from './users-admin-details/users-admin-details.component';
import { UsersAdminDetailsListComponent } from './users-admin-details-list/users-admin-details-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path : 'manager',component:BoardManagerComponent, canActivate:[AuthGuard]},
  { path: 'manager/devices', component: DevicesListComponent, canActivate:[AuthGuard] },
  { path: 'manager/devices/:id', component: DevicesDetailsComponent, canActivate:[AuthGuard] },
  { path: 'manager/addDevices', component: AddDevicesComponent, canActivate:[AuthGuard] },
  { path: 'manager/users/addUser', component: AddUsersComponent, canActivate:[AuthGuard]},
  { path: 'manager/users', component: UsersDetailsListComponent, canActivate:[AuthGuard]},
  { path: 'manager/users/:id', component: UsersDetailsComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate:[AuthGuard] },
  { path: 'user/myDevice', component: MyDevicesComponent, canActivate:[AuthGuard] },
  { path: 'admin', component:BoardAdminComponent, canActivate:[AuthGuard] },
  { path: 'admin/managers', component: ManagersDetailsListComponent, canActivate:[AuthGuard] },
  { path: 'admin/managers/:id', component: ManagersDetailsComponent, canActivate:[AuthGuard] },
  { path: 'admin/users', component: UsersAdminDetailsListComponent, canActivate:[AuthGuard]},
  { path: 'admin/users/:id', component: UsersAdminDetailsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
