import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';

import { AddBookComponent } from './pages/add-book/add-book.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { AuthGuard } from './auth.guard';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

const routes: Routes = [

  { path: '', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'addBook', canActivate:[AuthGuard],component: AddBookComponent } ,
  
  { path: 'viewBooks', component:ViewBooksComponent},
  { path: 'editBook', component:EditBookComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
