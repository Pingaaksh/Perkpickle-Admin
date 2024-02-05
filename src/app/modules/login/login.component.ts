import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService} from '../auth/auth.service';
import { AlertService } from '../shared/alert';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  passwordEyeHide : boolean = true;
  constructor(public fb: FormBuilder, public router: Router, public authService:AuthService,
    public loginService:LoginService, public alertService:AlertService ) {
      if (this.authService.loggedIn) {  
        
          this.router.navigate(['/dashboard']); 
       
        
      } 
        this.createForm();
        
  }

  ngOnInit() {
   
  }
  createForm() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', Validators.required],
      rememeber_me: [false]
    });
    if(localStorage.getItem('rememberme') === 'true') {
      this.loginForm.patchValue({
        email : localStorage.getItem('email'),
        password: localStorage.getItem('password'),
      });
    }
  }
  myPassword() {
    this.passwordEyeHide = !this.passwordEyeHide;
  }
  forgotPasswordClick(){
    this.router.navigate(['/signup/forgot-password']);
  }
  signUpClick() {
    this.router.navigate(['/signup']);
  }
  signInClick(loginForm) {
   const userInfo = {
      "key":window.btoa(JSON.stringify({email:loginForm.value.email, password:loginForm.value.password}))
    }
    // if(loginForm.value.rememeber_me) {
    //   localStorage.setItem("rememberme", "true");
    //   localStorage.setItem('email', loginForm.value.email);
    //   localStorage.setItem('password', loginForm.value.password);
    // } else{
    //   localStorage.setItem("rememberme", "false");
    //   localStorage.setItem('email', "");
    //   localStorage.setItem('password', "");
    // }
   
    this.loginService.authenticateUser(userInfo).subscribe(res => {
        const userInfo = {
        "userEmail": loginForm.value.email,
        "userName": res.userName
      };
     // this.authService.setToken(res.token,userInfo);
      this.router.navigate(['/dashboard']); 
        /** spinner ends after 5 seconds */
      
    }, err => {
      this.alertService.clear();
       this.alertService.error("UserName and Password is not correct!");
        window.scroll({ 
          top: 0, 
          left: 0, 
          behavior: 'smooth' 
      }); 
      console.log("catch", err);
    })
  }

}
