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
  constructor(public router: Router){}
  ngOnInit() {
    this.sidebar = document.querySelector('.sidebar');
    this.closeBtn = document.querySelector('#btn');

    this.closeBtn.addEventListener('click', () => {
      this.sidebar.classList.toggle('open');
      this.menuBtnChange(); //calling the function(optional)
      });

  }
 

  // following are the code to change sidebar button(optional)
  menuBtnChange() {
    if ( this.sidebar.classList.contains('open')) {
      this.closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
    } else {
      this.closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
    }
  }
  clickMe(url){
    this.router.navigate([url]);
  }
}
