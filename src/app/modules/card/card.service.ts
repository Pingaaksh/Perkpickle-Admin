import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = environment.apiURL;
  cardInfo: any;
  constructor(private http: HttpClient) {}

  public getAllCardDetails(data) {
    const url = this.API_URL + '/getAllCards';
    return this.http.post<any>(url, data);
  }
  public saveCardDetails(data) {
    const url = this.API_URL + '/createCard';
    return this.http.post<any>(url, data);
  }
  public updateCardDetails(data) {
    const url = this.API_URL + '/updateCard';
    return this.http.post<any>(url, data);
  }
  public deleteCardDetails(data) {
    const url = this.API_URL + '/deleteCard';
    return this.http.post<any>(url, data);
  }
}

