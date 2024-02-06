import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { CardAddComponent } from './card-add/card-add.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardListComponent,
    CardViewComponent,
    CardEditComponent,
    CardAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardRoutingModule
  ]
})
export class CardModule { }
