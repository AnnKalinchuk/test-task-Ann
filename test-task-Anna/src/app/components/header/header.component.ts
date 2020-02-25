import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { NotificationModel } from 'src/app/shared/models/notification.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date:Date;

  @Output() public sidenavToggle = new EventEmitter();

  showLatestEvents = false;
  latestEvents: EventModel[] = [];

  showNotifications = false;
  notifications: NotificationModel[] = [];

  showInfo = false;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.date = new Date();
    }, 1000)

    this.latestEvents.push(
    {
      id: 1,
      name: 'Бронь'
    },
    {
      id: 2,
      name: 'Поселите гостя'
    },
    {
      id: 3,
      name: 'Выезд гостя'
    },
    {
      id: 4,
      name: 'Бронь'
    },
    {
      id: 5,
      name: 'Новая бронь'
    });

    this.notifications.push(
      {
        id: 1,
        name: 'Оповещение 1'
      },
      {
        id: 2,
        name: 'Оповещение 2'
      },
      {
        id: 3,
        name: 'Оповещение 3'
      },
      {
        id: 4,
        name: 'Оповещение 4'
      },
      {
        id: 5,
        name: 'Оповещение 5'
      });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onShowLatestEventsClicked() {
    this.showLatestEvents = !this.showLatestEvents;
  }

  onShowInfoClicked() {
    this.showInfo = !this.showInfo;
  }

  onEventClose(eventId) {
    const index = this.latestEvents.findIndex(x => x.id == eventId);
    this.latestEvents.splice(index, 1);

    if (this.latestEvents.length == 0) {
      this.showLatestEvents = false;
    }
  }

  onShowNotificationsClicked() {
    this.showNotifications = !this.showNotifications;
  }

  onNotificationClose(notificationId) {
    const index = this.notifications.findIndex(x => x.id == notificationId);
    this.notifications.splice(index, 1);

    if (this.notifications.length == 0) {
      this.showNotifications = false;
    }
  }
}
