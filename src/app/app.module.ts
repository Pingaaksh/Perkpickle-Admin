import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthService } from './modules/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from './modules/shared/http.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoutComponent } from './modules/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TemplateModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule   
  ],
  exports: [ FormsModule, ReactiveFormsModule],
  providers: [BsModalService, AuthGuard, AuthService,
    MyHttpInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
