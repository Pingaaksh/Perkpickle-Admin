import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countData:any;
  constructor(private router: Router, private spinner: NgxSpinnerService,private toastrService: ToastrService,public homeService:HomeService ) {
     
  }

  ngOnInit() {
    this.getCountData();
  }
  getCountData(){
    this.homeService.getDashboardCardCount().subscribe(res => {
    this.countData = res;
    
  }, err => {
   
    console.log("catch", err);
  })
  }
  userClick(){
    this.router.navigate(['/user']); 
  }
  cardClick(){
    this.router.navigate(['/card']); 
  }

}
