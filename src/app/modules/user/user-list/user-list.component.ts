import { Component } from '@angular/core';
import { AlertService } from '../../shared/alert';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userData:any[] = [];
  constructor(public router: Router, public alertService:AlertService, private userService:UserService ) {

  }
  ngOnInit() {
   this.getAllUser();
  }
  getAllUser(){
    const userInfo = {};    
    this.userService.getAllUserDetails(userInfo).subscribe(res => { 
      this.userData= res;
      
    }, err => {      
      console.log("catch", err);
    })
  }
}
