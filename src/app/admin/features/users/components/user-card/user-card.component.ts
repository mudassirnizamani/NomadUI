import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/UserModel.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userData: UserModel

  constructor() { }

  ngOnInit(): void {
  }

}
