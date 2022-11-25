import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private api:ApiServiceService,private router:Router) { }
  ngOnInit() {
  }
  public register()
  {
    console.log('inside register')
    this.api.register(this.userForm.value).subscribe((response:any)=>
    {
      if(response.status=='success')
      {
      this.router.navigateByUrl('/login')
      console.log(response)
      }
      else{
        alert('All the fields are mandatory')
      }
    })
  }

}
