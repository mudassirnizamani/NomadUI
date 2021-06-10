import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private message: NzMessageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Admin'
    ) {
      this.message.info('Already Signed In');
      this.router.navigateByUrl('/admin');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Client'
    ) {
      this.message.info('Already Signed In');
      this.router.navigateByUrl('/client');
      return false;
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employee'
    ) {
      this.message.info('Already Signed In');
      this.router.navigateByUrl('/client');
      return false;
    } else {
      return true;
    }
  }
}
