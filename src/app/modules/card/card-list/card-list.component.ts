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
  tableSize = [15, 25, 50, 100];
  order: string = 'card_key';
  reverse: boolean = false;
  searchText: any;
  p: number = 1;
  pagingConfig = {
    currentPage: 1,
    itemsPerPage: 15,
    totalItems: 0,
  };
   noOfRows = this.pagingConfig.itemsPerPage;
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
      this.pagingConfig.totalItems = this.cardData.length;
    }, err => {    
      this.spinner.hide();  
      console.log("catch", err);
    })
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
    this.getAllCard();
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
  }
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
  }
  updateFilters(){
    this.pagingConfig.currentPage = 1;
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