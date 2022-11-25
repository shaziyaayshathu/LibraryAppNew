import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';

import { ApiServiceService } from './api-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { TokenInterceptorService } from './token-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AddBookComponent,
   
    ViewBooksComponent,
    EditBookComponent,
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
   
  ],
  providers: [ApiServiceService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
