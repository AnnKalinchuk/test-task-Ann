import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Book } from 'src/app/shared/models/book.model';


@Component({
  selector: 'app-books-per-year-chart',
  templateUrl: './books-per-year-chart.component.html',
  styleUrls: ['./books-per-year-chart.component.css']
})
export class BooksPerYearChartComponent implements OnInit {
  type = 'bar';
  chartData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: []
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Book Published per Year Chart'
    }
  };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Book[]) { 

    var temporaryChartData = [];
    
    data.forEach(book => {
      const year = book.PublishDate.slice(0, 4);
      if (temporaryChartData[year] !== undefined) {
        temporaryChartData[year] += 1;
      } else {
        temporaryChartData[year] = 1;
      } 
    });

    this.chartData.labels = Object.keys(temporaryChartData);
    this.chartData.datasets[0].data = Object.values(temporaryChartData);

    Object.keys(temporaryChartData).forEach((key, index) => {
      const color = index % 2 == 0 ? 'lightblue' : 'lightgreen';
      this.chartData.datasets[0].backgroundColor.push(color);
    });
    
  }

  ngOnInit() {
  }

}
