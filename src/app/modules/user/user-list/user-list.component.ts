import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userData:any[] = [];
  rowData:any[] = [];
  modalRef!: BsModalRef;
  deleteMsg:any;
  tableSize = [15, 25, 50, 100];
  order: string = 'email';
  reverse: boolean = false;
  searchText: any = "";
  pu: number = 1;
  pagingConfig = {
    currentPage: 1,
    itemsPerPage: 15,
    totalItems: 0,
  };
   noOfRows = this.pagingConfig.itemsPerPage;
  constructor(public router: Router,  private userService:UserService,private spinner: NgxSpinnerService,
    private modalService: BsModalService,  private toastrService: ToastrService) {

  }
  ngOnInit() {
   this.getAllUser();
  }
  getAllUser(){
    const userInfo = {
      pageNumber: this.pagingConfig.currentPage,
      pageSize:this.pagingConfig.itemsPerPage,
      sortBy:this.order,
      sortOrder:!this.reverse ? 'DESC' : 'ASC',
      search:this.searchText
    };    
    this.spinner.show();
    this.userService.getAllUser(userInfo).subscribe(res => {       
      this.spinner.hide(); 
      this.rowData = this.userData= res.data;
      this.pagingConfig.totalItems = res.totalCount;
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
    this.getAllUser();
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getAllUser();
  }
  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    this.getAllUser();
  }
  clearClick(){
    this.searchText = '';
    this.pagingConfig.currentPage = 1;
    this.getAllUser();
  }
  searchClick(){
    this.pagingConfig.currentPage = 1
    this.getAllUser();
  }
  updateFilters(){
    this.pagingConfig.currentPage = 1;
  }
  openDeleteModal(data, template: TemplateRef<any>){
    this.userService.userInfo = data;
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
    const userInfo = {email: this.userService.userInfo.email};    
    this.userService.deleteUserDetails(userInfo).subscribe(res => { 
      this.spinner.hide();
      this.closePopup();
      this.toastrService.success("User Record deleted successfully!")
      this.getAllUser();
    }, err => {    
      this.spinner.hide();  
      console.log("catch", err);
    })
  }
  openEdit(data){
    this.userService.userInfoDataForUpdate = data;
    this.router.navigate(['/user/update']); 
  }
  addUser(){
    this.router.navigate(['/user/create']); 
  }
}
