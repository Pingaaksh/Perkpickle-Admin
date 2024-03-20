import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-template',
  templateUrl: './master-template.component.html',
  styleUrl: './master-template.component.scss'
})
export class MasterTemplateComponent {
  sidebar:any;
  closeBtn:any;
  searchBtn:any;
  menuOpen = false;
  constructor(public router: Router){}
  ngOnInit() {   

  }
  clickMe(url){
    this.router.navigate([url]); 
  }
  ClickMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
