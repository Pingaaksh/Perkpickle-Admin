import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm: FormGroup;
  isEdit = false;
  emailPattern =  '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(public router: Router, private userService: UserService, private spinner: NgxSpinnerService, private fb: FormBuilder, private toastrService: ToastrService) {

  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.userForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      address: [''],
      zipCode: ['',[Validators.pattern(/^\d{1,5}$/)]],
      phoneNo: ['', [Validators.required, Validators.pattern("^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$")]],
      password:['',Validators.required]
    });
  }
  backClick() {
    this.router.navigate(['/user']);
  }
  saveClick(userForm) {
    this.spinner.show();
    const userInfoCreate = {
      "email":userForm.value.email,
      "first_name": userForm.value.firstName,
      "last_name": userForm.value.lastName,
      "zip_code":userForm.value.zipCode,
      "address": userForm.value.address,
      "phone_number":userForm.value.phoneNo,
      "is_verified" :true,
      "is_signup_completed":true,
      "secret_key":"",
      "password":userForm.value.password
    }
    this.userService.userCreate(userInfoCreate).subscribe(res => {
      this.spinner.hide();
      this.toastrService.success('Success Message!', 'User Created successfully!');
      this.router.navigate(['/user']);

    }, err => {
      this.spinner.hide();
      this.toastrService.error('Error!', err);
      console.log("catch", err);
    })
  }
}
