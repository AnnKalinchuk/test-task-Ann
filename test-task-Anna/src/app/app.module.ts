import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular2-chartjs';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatIconModule, MatSortModule, MatPaginatorModule, MatDialogModule, 
         MatNativeDateModule, MatButtonModule, MatCardModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatMenuModule, MatListModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventComponent } from './components/header/event/event.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { InfoComponent } from './components/header/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
    FooterComponent,
    EventComponent,
    NotificationComponent,
    InfoComponent
  ], 

  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatToolbarModule,
    MatTabsModule, 
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    NgxDaterangepickerMd.forRoot()
  ],

  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
