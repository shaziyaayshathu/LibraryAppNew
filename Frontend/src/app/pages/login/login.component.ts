import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private api:ApiServiceService,private router:Router){}
error:any
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  get f() { return this.loginForm.controls; }
public login()
{
  //console.log(this.loginForm.controls['username'].value)
  if( this.loginForm.controls['username'].value==='')
  {
    alert('Username cannot be empty')
  }
  else  if(this.loginForm.controls['password'].value=='')
  {
    alert('Password cannot be empty')
  }
  else{
  this.api.login(this.loginForm.value).subscribe((res)=>{
    console.log(res)
   
    localStorage.setItem('token',res.token)
    this.router.navigate(['viewBooks'])
    alert('login success')
    },
    (err) => {
      this.error=err.error.message
      alert(this.error)
    }
  )
  }
  
}
  
}
