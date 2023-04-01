import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { of, switchMap } from 'rxjs';
import { ChartService } from '../chart.service';


@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})
export class HighChartComponent {
  chart!: Chart;
  constructor(private chartService: ChartService) {}
  ngOnInit() {
    this.chartService.chartOptions$.pipe(
      switchMap((chartOptions) => {
        this.chart = new Chart(chartOptions);
        return of(chartOptions); // return the chartOptions as the new observable
      })
    ).subscribe();
  }
  
}
