import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CHART_OPTIONS } from './constants';
import { Chart } from 'angular-highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private emitChartOptions = new Subject<any>();
  chartOptions$ = this.emitChartOptions.asObservable();

  constructor() { }

  chartOptions: Chart["options"] = CHART_OPTIONS;

  async getChartData(chartData: any) {
    await this.generateChartOptions(chartData);
  }

  generateChartOptions(chartData: any) {
    const { graphType, firstCategory, secondCategory, thirdCategory } = chartData;
    this.chartOptions.chart.type = graphType;
    this.chartOptions.series[0].data = [
      { y: +firstCategory.revenue, color: firstCategory.color , name: firstCategory.name},
      { y: +secondCategory.revenue, color: secondCategory.color, name: secondCategory.name},
      { y: +thirdCategory.revenue, color: thirdCategory.color, name: thirdCategory.name },
    ];
    this.emitChartOptions.next(this.chartOptions);
  }

}
