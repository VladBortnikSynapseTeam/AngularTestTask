import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("userAccessToken") ){
      return true;
    }else if(localStorage.getItem("userAccessToken") === undefined){
      alert("Unsuccessful");
      return false;
    }
    else{
      alert("Unsuccessful");
      return false;
    }
  }
}
