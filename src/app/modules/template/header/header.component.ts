import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userInfo:any;
  constructor(public router: Router,  private authService: AuthService){
    this.userInfo = this.authService.getUserInfo();
  }
  ngOnInit() {
    
  }
  clickMe(url){
    this.router.navigate([url]);
  }
}
