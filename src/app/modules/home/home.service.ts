import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URL = environment.apiURL;
  userInfo: any;
  constructor(private http: HttpClient) {}

  public getDashboardCardCount() {
    const url = this.API_URL + '/dashboard/count';
    return this.http.get<any>(url);
  }
}
