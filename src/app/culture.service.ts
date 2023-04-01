import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CultureService {

  constructor(private http: HttpClient) {}

  getCulture(cultureName: string): Observable<any> {
    return this.http.get<any>(`/assets/i18n/${cultureName}.json`);
  }

}