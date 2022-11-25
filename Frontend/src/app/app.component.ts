import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(public apiService:ApiServiceService,private router:Router){

  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
}

}
