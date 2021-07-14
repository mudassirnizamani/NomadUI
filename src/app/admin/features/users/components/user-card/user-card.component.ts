import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userData: IUser

  constructor() { }

  ngOnInit(): void {
  }

}
