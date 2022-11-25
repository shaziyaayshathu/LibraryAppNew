import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; 
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publication: new FormControl(''),
    noPages: new FormControl('')
  });
  constructor(private api:ApiServiceService,private router:Router){

  }
  addBook()
  {
    this.api.addBook(this.addBookForm.value).subscribe(res=>{
      
      this.router.navigate(['viewBooks'])
    })
    }
  }

  
