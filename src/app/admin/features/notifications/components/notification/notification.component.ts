import { Component, Input, OnInit } from '@angular/core';
import { INotification } from 'src/app/core/models/INotification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notification: INotification;

  constructor() {}

  ngOnInit(): void {}
}
