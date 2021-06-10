import { Component, OnInit } from '@angular/core';
import { SignoutService } from 'src/app/core/services/signout/signout.service';

// Declaring some javascript functions - Mudasir Ali
declare const toggle_sidebar_2: any;

@Component({
  selector: 'app-employee-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private signoutService: SignoutService) {}

  ngOnInit(): void {
    toggle_sidebar_2();
  }

  signout() {
    this.signoutService.signout();
  }
}
