import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.interface';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() userData: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
