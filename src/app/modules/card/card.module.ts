import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardAddComponent } from './card-add/card-add.component';


@NgModule({
  declarations: [
    CardListComponent,
    CardViewComponent,
    CardEditComponent,
    CardAddComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
