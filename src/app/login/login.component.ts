import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Route, Router } from '@angular/router';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  username: string | undefined;
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService, 
    private storageService: StorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const {username, password } = this.form;

    this.authService.login(this.form).subscribe({
      next: data => {
        
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;

        localStorage.setItem("USERNAME", username);

        if(this.roles[0]==="ROLE_MANAGER"){
          this.router.navigate(['/manager']);
        }else if(this.roles[0]==="ROLE_USER"){
          this.router.navigate(['/user']);
        }
        else {
          this.router.navigate(['/admin'])
        }

      },
      

      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      
    })
    // this.authService.login(this.form).subscribe(
    //   (      data): void => {
    //     this.storageService.saveToken(data.accessToken);
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   },
      // err => {
      //   this.errorMessage = err.error.message;
      //   this.isLoginFailed = true;
      // }
    // );
  }

  reloadPage(): void {
    window.location.reload();
  }

  logout(){
    this.router.navigate(['/login']);
    this.storageService.clean();
  }



}
