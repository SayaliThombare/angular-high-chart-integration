import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { ChartOptionsComponent } from './chart-options/chart-options.component';
import { ChartService } from './chart.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HighChartComponent,
    ChartOptionsComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ChartModule, ReactiveFormsModule, CommonModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
