import { Component } from '@angular/core';
import { AlertService } from '../shared/alert';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public alertService:AlertService,private spinner: NgxSpinnerService ) {
     
  }

  ngOnInit() {
  // this.spinner.show();
    this.alertService.error("Login Successfully!")
  }
}
