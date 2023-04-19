import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { StorageService } from '../storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private router:Router, private storageService: StorageService) {

 }
 canActivate(): boolean {
  if (this.storageService.isLoggedIn() == true) {
    return true;
  } else {
    this.router.navigate(['/']);
    return false;
  }
}
//  canActivate():boolean{
//    if(localStorage.getItem("access")=="manager"){
//      return true;

//    }else{
//      this._router.navigate(['/']);
//      return false;
//    }
//  }
}



// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // your guard logic here
//     return true;
//   }
// }

// import { Injectable } from "@angular/core";
// import {
// Router,
// CanActivate,
// ActivatedRouteSnapshot,
// RouterStateSnapshot
// }  from "@angular/router";

// import { map, take } from "rxjs/operators";
// import { merge } from "rxjs";
// import { Observable } from "rxjs";
// import { AuthService } from "../auth.service";

// @Injectable({ providedIn: "root" })
// export class AuthGuard implements CanActivate {
// constructor(
// private router: Router,
// private authenticationService: AuthService
// ) {}

// canActivate(
// route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot
// ): Observable<boolean> {
// return this.authenticationService.isLoggedIn().pipe(
//   take(1),
//   map(isLoggedIn => {
//     if (isLoggedIn) {
//       return true;
//     } else {
//       return false;
//     }
//    })
//  );
//  }
// }
