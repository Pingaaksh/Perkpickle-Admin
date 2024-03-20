import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: '../create-user/create-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  userForm: FormGroup;
  isEdit = true;
  data:any;
  emailPattern =  '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(public router: Router, private userService: UserService, private spinner: NgxSpinnerService, private fb: FormBuilder, private toastrService: ToastrService) {

  }
  ngOnInit() {
    if(this.userService.userInfoDataForUpdate){
      this.data = this.userService.userInfoDataForUpdate;
      this.createForm();
    } else{
      this.backClick();
    }
   
  }
  createForm() {
    this.userForm = this.fb.group({
      firstName: [this.data.first_name,[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: [this.data.last_name,[Validators.required, Validators.pattern('^[a-zA-Z]+$')] ],
      email: [{value:this.data.email, disabled:true}],
      address: [this.data.address],
      zipCode: [this.data.zip_code,[Validators.pattern(/^\d{1,5}$/)]],
      phoneNo: [this.data.phone_number,[Validators.required, Validators.pattern("^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$")]],
      password:[{value:'', disabled:true}]
    });
  }
  backClick() {
    this.router.navigate(['/user']);
  }
  saveClick(userForm) {
    this.spinner.show();
    const userInfoCreate = {
      "email":this.data.email,
      "first_name": userForm.value.firstName,
      "last_name": userForm.value.lastName,
      "zip_code":userForm.value.zipCode,
      "address": userForm.value.address,
      "phone_number":userForm.value.phoneNo
    }
    this.userService.userUpdate(userInfoCreate).subscribe(res => {
      this.spinner.hide();
      this.toastrService.success('Success Message!', 'User Updated successfully!');
      this.router.navigate(['/user']);

    }, err => {
      this.spinner.hide();
      this.toastrService.error('Error!', err);
      console.log("catch", err);
    })
  }
}
