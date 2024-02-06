import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userData:any[] = [];
  constructor(public router: Router,  private userService:UserService,private spinner: NgxSpinnerService) {

  }
  ngOnInit() {
   this.getAllUser();
  }
  getAllUser(){
    const userInfo = {};    
    this.spinner.show();
    this.userService.getAllUserDetails(userInfo).subscribe(res => { 
      this.spinner.hide();    
      this.userData= res;
      
    }, err => {  
      this.spinner.hide();    
      console.log("catch", err);
    })
  }
}
