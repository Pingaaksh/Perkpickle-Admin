import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.apiURL;
  userInfo: any;
  userInfoDataForUpdate:any;
  constructor(private http: HttpClient) {}

  public getAllUserDetails(userInfo) {
    const url = this.API_URL + '/getAllUsers';
    return this.http.post<any>(url, userInfo);
  }
  public deleteUserDetails(data) {
    const url = this.API_URL + '/deleteUser';
    return this.http.post<any>(url, data);
  }

  public userUpdate(userInfo) {
    const url = this.API_URL + '/users/update';
    return this.http.post<any>(url, userInfo);
  }

  public userCreate(userInfo) {
    const url = this.API_URL + '/users/create';
    return this.http.post<any>(url, userInfo);
  }
  public getAllUser(data) {
    const url = this.API_URL + '/users/all';
    return this.http.post<any>(url, data);
  }
}
