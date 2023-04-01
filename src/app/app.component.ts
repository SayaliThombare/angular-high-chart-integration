import { Component } from '@angular/core';
import { CultureService } from './culture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  culture: any;

  constructor(private cultureService: CultureService) {}

  ngOnInit(): void {
    this.cultureService.getCulture('en-US').subscribe(culture => {
      this.culture = culture;
    });
  }
}
