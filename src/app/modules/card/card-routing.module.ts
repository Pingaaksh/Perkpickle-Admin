import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardEditComponent } from './card-edit/card-edit.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'all', component: CardListComponent },
  { path: 'view', component: CardViewComponent },
  { path: 'add', component: CardAddComponent },
  { path: 'update', component: CardEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
