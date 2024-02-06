import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrl: './card-add.component.scss'
})
export class CardAddComponent {
  cardForm: FormGroup;
  isEdit = false;
  constructor(public router: Router, private cardService: CardService, private spinner: NgxSpinnerService, private fb: FormBuilder, private toastrService: ToastrService) {

  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.cardForm = this.fb.group({
      cardNo: [''],
      cardKey: ['', Validators.required],
      cardName: ['', Validators.required],
      cardIssuer: ['', Validators.required],
      cardImg: ['', Validators.required],
      status: ['Active', Validators.required]
    });
  }
  backClick() {
    this.router.navigate(['/card']);
  }
  saveClick(cardForm) {
    this.spinner.show();
    const cardInfo = {
      card_key: cardForm.value.cardKey,
      card_name: cardForm.value.cardName,
      card_issuer: cardForm.value.cardIssuer,
      card_image_url: cardForm.value.cardImg
    }
    this.cardService.saveCardDetails(cardInfo).subscribe(res => {
      this.spinner.hide();
      this.toastrService.success('Success Message!', 'Card Record inserted successfully!');
      this.router.navigate(['/card']);

    }, err => {
      this.spinner.hide();
      this.toastrService.error('Error!', err);
      console.log("catch", err);
    })
  }
}
