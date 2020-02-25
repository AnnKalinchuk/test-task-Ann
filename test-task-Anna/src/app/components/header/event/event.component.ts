import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() model: EventModel;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    this.close.emit(this.model.id);
  }

}
