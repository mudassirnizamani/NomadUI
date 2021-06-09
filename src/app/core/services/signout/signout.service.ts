import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class SignoutService {
  constructor(private router: Router, private message: NzMessageService) {}

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.message.success('Successfully Signed out');
    this.router.navigateByUrl('/');
  }
}
