import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../shared/models/book.model';
import { BooksService } from '../../shared/services/books.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog  } from '@angular/material';
import { Moment } from 'moment';
import * as moment from 'moment';
import { AddBookComponent } from '../add-book/add-book.component';
import { BooksPerYearChartComponent } from '../books-per-year-chart/books-per-year-chart.component';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['Title', 'Description', 'PageCount','PublishDate', 'Update'];
  public dataSource = new MatTableDataSource<Book>();

  searchText:string;
  selectedDateRange: {startDate: Moment, endDate: Moment};

  bookFilter = { title: '', startDate: null, endDate: null };

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'This Year': [moment().startOf('year'), moment().endOf('year')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }

  constructor(private booksService: BooksService,
              private dialog: MatDialog  ) { 

  }

  ngOnInit() {

    this.booksService.getBooks().subscribe(x => this.dataSource.data = x);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: Book, filter: string) => {
      let result = true;
      const filterModel = JSON.parse(filter);

      if (filterModel.title && filterModel.title.length > 0){
        result = data.Title.trim().toLocaleLowerCase().includes(filterModel.title);
      }

      if (result && filterModel.startDate && filterModel.endDate) {
        const bookPublishDate = moment(data.PublishDate);
        const startDate = moment(filterModel.startDate).utc(true);
        const endDate = moment(filterModel.endDate).utc(true);

        result = bookPublishDate.isBetween(startDate, endDate);
      }

      return result;
    };
  }
  
  openAddDialog() {
    const dialogRef = this.dialog.open(AddBookComponent);
    dialogRef.afterClosed().subscribe(addedBook => {
      if (addedBook) {
        this.dataSource.data.push(addedBook);
        this.dataSource.connect().next(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openChartDialog() {
    this.dialog.open(BooksPerYearChartComponent, {data:this.dataSource.data});
  }

  update(id) {
    var foundBook = this.dataSource.data.find(book => book.ID === id);
    const dialogRef = this.dialog.open(EditBookComponent, {data:foundBook});
    dialogRef.afterClosed().subscribe(updatedBook => {
      if (updatedBook) {
        const index = this.dataSource.data.findIndex(book => book.ID == updatedBook.ID);
        this.dataSource.data.splice(index, 1, updatedBook);
        this.dataSource.connect().next(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  filterByDate() {
    if (this.bookFilter && this.selectedDateRange) {
      this.bookFilter.endDate = this.selectedDateRange.endDate;
      this.bookFilter.startDate = this.selectedDateRange.startDate;
      this.dataSource.filter = JSON.stringify(this.bookFilter);
    }
  }

  filterByTitle(value) {
    this.bookFilter.title = value.trim().toLocaleLowerCase();
    this.dataSource.filter = JSON.stringify(this.bookFilter);
  }
}
