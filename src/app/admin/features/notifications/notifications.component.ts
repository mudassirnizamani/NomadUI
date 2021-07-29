import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { INotification } from 'src/app/core/models/INotification.interface';
import { getNotifications } from 'src/app/store/actions/notifications/notifcations.actions';
import { NotificationsState } from 'src/app/store/reducers/notifications/notifcations.reducer';
import { notificationsSelector } from 'src/app/store/selectors/notifications/notifcations.selectors';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: INotification[];
  notifications$ = this.store.pipe(select(notificationsSelector));

  constructor(private store: Store<NotificationsState>) {}

  ngOnInit(): void {
    this.store.dispatch(getNotifications());
    this.notifications$.subscribe((data) => (this.notifications = data));
    console.log(this.notifications);
  }
}
