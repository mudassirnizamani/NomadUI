import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/UserModel.interface';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() userData: UserModel;
  constructor() { }

  ngOnInit(): void {
  }

}
