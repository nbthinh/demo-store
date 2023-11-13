import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HanoiCity } from './hanoi-city';

@Injectable({
  providedIn: 'root'
})
export class HanoiCityService {
  url = "https://provinces.open-api.vn/api/d/"
  constructor(private http: HttpClient) {
    
  }
  
  get_data_from_api(): Observable<HanoiCity[]>{
    return this.http.get<any>(this.url);
  }
}
