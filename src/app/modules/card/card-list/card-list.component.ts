import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardData:any[] = [];
  modalRef!: BsModalRef;
  deleteMsg:any;
  constructor(public router: Router,  private cardService:CardService,private spinner: NgxSpinnerService,
    private modalService: BsModalService,  private toastrService: ToastrService ) {

  }
  ngOnInit() {
   this.getAllCard();
  }
  getAllCard(){
    this.spinner.show();
    const cardInfo = {};    
    this.cardService.getAllCardDetails(cardInfo).subscribe(res => { 
      this.spinner.hide();
      this.cardData= res;
      
    }, err => {    
      this.spinner.hide();  
      console.log("catch", err);
    })
  }
  addCard(){
    this.router.navigate(['/card/add']);    
  }
  editClick(item){
    this.cardService.cardInfo = item;
    this.router.navigate(['/card/update']); 
  }
  openDeleteModal(data, template: TemplateRef<any>){
    this.cardService.cardInfo = data;
    this.deleteMsg = 'Are you sure you want to delete this record?';
    this.modalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered'
    });
  }
  closePopup(){
    this.modalRef.hide();
  }
  deleteCard(){
    this.spinner.show();
    const cardInfo = {card_key: this.cardService.cardInfo.card_key};    
    this.cardService.deleteCardDetails(cardInfo).subscribe(res => { 
      this.spinner.hide();
      this.closePopup();
      this.toastrService.success("Card Record deleted successfully!")
      this.getAllCard();
    }, err => {    
      this.spinner.hide();  
      console.log("catch", err);
    })
  }
}