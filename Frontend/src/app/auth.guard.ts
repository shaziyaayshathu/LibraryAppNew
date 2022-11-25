import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ApiServiceService,private router:Router){}
  canActivate():boolean {
    if(this.api.loggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['home'])
      return false;
    }
    
  }
  
}
