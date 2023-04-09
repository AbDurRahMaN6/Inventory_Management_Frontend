import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddDevicesComponent } from './add-devices/add-devices.component';
import { DevicesDetailsComponent } from './devices-details/devices-details.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserDevicesListComponent } from './user-devices-list/user-devices-list.component';
import { ApiInterceptorService } from './_services/api-interceptor.service';
import { UserDevicesDetailsComponent } from './user-devices-details/user-devices-details.component';
import { UsersDetailsListComponent } from './users-details-list/users-details-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { ManagersDetailsComponent } from './managers-details/managers-details.component';
import { ManagersDetailsListComponent } from './managers-details-list/managers-details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardManagerComponent,
    BoardUserComponent,
    AddDevicesComponent,
    DevicesDetailsComponent,
    DevicesListComponent,
    BoardAdminComponent,
    UserDevicesListComponent,
    UserDevicesDetailsComponent,
    UserDevicesDetailsComponent,
    UserDevicesListComponent,
    UsersDetailsListComponent,
    UsersDetailsComponent,
    ManagersDetailsComponent,
    ManagersDetailsListComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
