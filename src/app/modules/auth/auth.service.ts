import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  private isActiveSubscription = false;
  constructor(private http: HttpClient) {}
  setToken(token:any,userInfo:any){
    localStorage.setItem("isLoggedInPerkPickel", "true");
    localStorage.setItem("access-token-PerkPickel",token);
    localStorage.setItem("userInfo-PerkPickel",JSON.stringify(userInfo));
  }
  getToken() {
    return (localStorage.getItem('access-token-PerkPickel') ? localStorage.getItem('access-token-PerkPickel'): "") ;
  }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo-PerkPickel') || '{}');
  }
  getUserType() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo-PerkPickel') || '{}');
    return userInfo?.accountType;
  }
  logout() {  
    localStorage.removeItem('access-token-PerkPickel'); 
    localStorage.removeItem('userInfo-PerkPickel'); 
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
    return (localStorage.getItem('access-token-PerkPickel') !== null);  
  }  

}
