import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  private isActiveSubscription = false;
  constructor(private http: HttpClient) {}
  setToken(token:any,userInfo:any){
    localStorage.setItem("isLoggedInPerkPickel", "true");
    localStorage.setItem("access-token",token);
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
  }
  getToken() {
    return (localStorage.getItem('access-token') ? localStorage.getItem('access-token'): "") ;
  }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
  getUserType() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    return userInfo?.accountType;
  }
  logout() {  
    localStorage.removeItem('access-token'); 
    localStorage.removeItem('userInfo'); 
    localStorage.setItem("isLoggedInPerkPickel", "false");
    //localStorage.clear(); 
  }  
  public get checkIsLoggedIn(): boolean {  
    if(localStorage.getItem('isLoggedInPerkPickel') === 'true') {
      return true;
    }
    return false;
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('access-token') !== null);  
  }  

}
