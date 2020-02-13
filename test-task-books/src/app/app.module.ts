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
         MatNativeDateModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksPerYearChartComponent } from './components/books-per-year-chart/books-per-year-chart.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BooksService } from './shared/services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent, 
    AddBookComponent,
    BooksPerYearChartComponent,
    EditBookComponent
  ],
  entryComponents: [
    AddBookComponent,
    BooksPerYearChartComponent,
    EditBookComponent
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
    NgxDaterangepickerMd.forRoot()

  ],
  providers: [
      BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
