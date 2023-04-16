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
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AuthGuard } from './_services/guard/auth.guard';
import { UsersAdminDetailsComponent } from './users-admin-details/users-admin-details.component';
import { UsersAdminDetailsListComponent } from './users-admin-details-list/users-admin-details-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: '', component: LoginComponent, canActivate: [() => AuthGuard.prototype.canActivate] },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component:BoardAdminComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'user/myDevice', component: MyDevicesComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'manager/devices', component: DevicesListComponent },
  { path: 'manager/devices/:id', component: DevicesDetailsComponent },
  { path: 'manager/addDevices', component: AddDevicesComponent },
  { path: 'manager/users/addUser', component: AddUsersComponent},
  { path: 'manager/users', component: UsersDetailsListComponent},
  { path: 'manager/users/:id', component: UsersDetailsComponent },
  { path: 'admin/manager', component: ManagersDetailsListComponent },
  { path: 'admin/manager/:id', component: ManagersDetailsComponent },
  { path: 'admin/users', component: UsersAdminDetailsListComponent},
  { path: 'admin/users/:id', component: UsersAdminDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
