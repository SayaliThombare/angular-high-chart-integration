import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { ChartService } from '../chart.service';
import { COLORS, DEFAULT_CATEGORIES, DEFAULT_GRAPH_TYPE } from '../constants';
import { Category } from '../chart.models';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.scss']
})
export class ChartOptionsComponent {
  constructor(private fb: FormBuilder, private chartService: ChartService) {}

  colors: Array<string> = COLORS;
  @Input() culture: any;

  revenueForm = this.fb.group({
    firstCategory: this.createCategoryFormGroup(DEFAULT_CATEGORIES[0]),
    secondCategory: this.createCategoryFormGroup(DEFAULT_CATEGORIES[1]),
    thirdCategory: this.createCategoryFormGroup(DEFAULT_CATEGORIES[2]),
    graphType: [DEFAULT_GRAPH_TYPE, Validators.required],
  });

  ngOnInit() {
    this.revenueForm.valueChanges
    .pipe(
      tap(
        
      ),
      switchMap(chartData => this.chartService.getChartData(chartData))
    ).subscribe();
  }

  createCategoryFormGroup(defaults: Category) {
    return this.fb.group({
      revenue: [defaults.revenue, Validators.required],
      color: [defaults.color, Validators.required],
      name: [defaults.name],
    });
  }
  
  ngAfterViewInit() {
    this.chartService.getChartData(this.revenueForm?.value);
  }
}
