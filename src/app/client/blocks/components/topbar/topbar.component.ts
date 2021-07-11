import { Component, OnInit } from '@angular/core';
import { SignoutService } from 'src/app/core/services/signout/signout.service';

@Component({
  selector: 'app-client-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private signoutService: SignoutService) {}

  ngOnInit(): void {}
  signout() {
    this.signoutService.signout();
  }
}
