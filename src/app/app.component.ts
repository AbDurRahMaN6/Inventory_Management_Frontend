import { Component, OnInit } from '@angular/core';
import { StorageService } from './_services/storage.service';
// import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private roles!: string[];
  isLoggedIn = false;
  showManagerBoard = false;
  showUserBoard = false;
  showAdminBoard = false;
  username: string | undefined;

  constructor(private storageService: StorageService, private router:Router ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.storageService.getToken();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;

      this.showManagerBoard = this.roles.includes('ROLE_MANAGER');
      this.username = user.username;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
  }

  logout(): void {
    this.storageService.signOut();
    window.location.reload();
  }

  // logout(){
  //   Swal.fire({
  //     title: 'Logout',
  //     text: 'Are you sure!',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Logout',
  //     cancelButtonText: 'Stay Login',
  //   }).then((result) => {

  //     if (result.isConfirmed) {
  //       this.storageService.signOut();
  //       this.router.navigate(['/']);

  //     }
  //   })
  // }
}