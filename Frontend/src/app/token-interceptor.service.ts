import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
 intercept(req:any,next:any)
 {
  let apiService=this.injector.get(ApiServiceService)
  let tokenizedReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${apiService.getToken()}`
    }
  })
  return next.handle(tokenizedReq)
 }
}
