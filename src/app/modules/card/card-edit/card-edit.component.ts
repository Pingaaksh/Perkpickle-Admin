import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-edit',
  templateUrl: '../card-add/card-add.component.html',
  styleUrl: '../card-add/card-add.component.scss'
})
export class CardEditComponent {
  cardForm: FormGroup;
  isEdit = true;
  constructor(public router: Router, private cardService: CardService, private spinner: NgxSpinnerService, private fb: FormBuilder, private toastrService: ToastrService) {

  }
  ngOnInit() {
    if(!this.isEmptyObject(this.cardService.cardInfo)){
      this.createForm();
    }
   
  }
  createForm() {
    const data = this.cardService.cardInfo;
    const status = (data.is_disabled ? "Inactive" : "Active");
    this.cardForm = this.fb.group({
      cardNo: [data.id],
      cardKey: [data.card_key, Validators.required],
      cardName: [data.card_name, Validators.required],
      cardIssuer: [data.card_issuer, Validators.required],
      cardImg: [data.card_image_url, Validators.required],
      status: [status, Validators.required]
    });
  }
  backClick() {
    this.router.navigate(['/card']);
  }
  saveClick(cardForm) {
    this.spinner.show();
    
    const status = (cardForm.value.status == 'Active' ? false : true);

    const cardInfo = {
      id:cardForm.value.cardNo,
      card_key: cardForm.value.cardKey,
      card_name: cardForm.value.cardName,
      card_issuer: cardForm.value.cardIssuer,
      card_image_url: cardForm.value.cardImg,
      is_disabled: status
    }
    this.cardService.updateCardDetails(cardInfo).subscribe(res => {
      this.spinner.hide();
      this.toastrService.success('Success Message!', 'Card Record Updated successfully!');
      this.router.navigate(['/card']);

    }, err => {
      this.spinner.hide();
      this.toastrService.error('Error!', err);
      console.log("catch", err);
    })
  }
  isEmptyObject(obj) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        return false;
      }
    }
    return true;
  }
}
