import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MasterTemplateComponent } from './Layout/master-template/master-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent,HeaderComponent,FooterComponent,MasterTemplateComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SidebarComponent,HeaderComponent,FooterComponent]
})
export class TemplateModule { }
