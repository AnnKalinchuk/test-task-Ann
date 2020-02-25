import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventModel } from 'src/app/shared/models/event.model';
import { NotificationModel } from 'src/app/shared/models/notification.model';
import { Router, NavigationEnd } from '@angular/router';
import { PAGES_INFO_DATA } from 'src/app/shared/contants/pages-info-data';
import { PageInfoModel } from 'src/app/shared/models/page-info.model';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Output() close = new EventEmitter();
  url: string;
  pageInfo: PageInfoModel;

  constructor(private router: Router) { 
    this.url = this.router.url;

    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.url = '';
        this.refreshInfo();
      }
    });
  }

  ngOnInit() {
    this.refreshInfo();
  }

  refreshInfo() {
    this.pageInfo = PAGES_INFO_DATA.find(x => this.url.indexOf(x.url) >= 0);
  }

  onCloseClick() {
    this.close.emit();
  }
}
