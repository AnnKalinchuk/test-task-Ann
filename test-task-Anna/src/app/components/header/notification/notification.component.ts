import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { NotificationModel } from 'src/app/shared/models/notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() model: NotificationModel;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    this.close.emit(this.model.id);
  }

}
