import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(public router: Router){}
  ngOnInit() {   

  }
  clickMe(url){
    this.router.navigate([url]); 
  }
 
}
