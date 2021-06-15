import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sidebar-user-profile',
  templateUrl: './sidebar-user-profile.component.html',
  styleUrls: ['./sidebar-user-profile.component.scss'],
})
export class SidebarUserProfileComponent implements OnInit {
  isLoading: boolean = false;
  userData: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAuthenticatedUser().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.userData = res.user;
          this.isLoading = false;
        } else if (!res.succeeded && res.code == 'ServerError') {
          this.userData.firstName = 'Error';
        }
      },
      (error: any) => {
        this.userData.firstName = 'Error';
        this.isLoading = false;
      }
    );
  }
}
