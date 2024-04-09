import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class LoginService {
    API_URL = environment.apiURL;
    userInfo: any;
    constructor(private http: HttpClient) { }

    public authenticateUser(userInfo) {
        //const url = this.API_URL + '/login';
        const url = this.API_URL + 'adminlogin';
        return this.http.post<any>(url, userInfo);
    }

    public dashboardCount() {
        const url = this.API_URL + '/getDashboardCount';
        return this.http.get<any>(url);
    }

}
