import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/alert';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardData:any[] = [];
  constructor(public router: Router, public alertService:AlertService, private cardService:CardService ) {

  }
  ngOnInit() {
   this.getAllCard();
  }
  getAllCard(){
    const cardInfo = {card:"123"};    
    this.cardService.getAllCardDetails(cardInfo).subscribe(res => { 
      this.cardData= res;
      
    }, err => {      
      console.log("catch", err);
    })
  }
}