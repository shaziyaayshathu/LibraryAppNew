import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'; 
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit  {
  editBookForm: FormGroup = new FormGroup({
    
    title: new FormControl(''),
    author: new FormControl(''),
    publication: new FormControl(''),
    noPages: new FormControl('')
  });
   
  id:any

  constructor(private api:ApiServiceService,private router:Router,private routeActivated:ActivatedRoute){
    
  }
  ngOnInit(): void {

    this.routeActivated.queryParams
      .subscribe(params => {
        console.log(params); // { id: "price" }
       this.id = params['selected']
       console.log(this.id); // price
      }
    );
    this.editBook();
  }
  editBook(){
    this.api.getBookById(this.id).subscribe(res=>{
     // console.log(res)
     this.editBookForm.setValue({
      title: res.title, 
      author: res.author,
      publication:res.publication,
      noPages:res.noPages
    });
      
    })
   
  }
  updateBook()
  {
    console.log('hi')
    this.api.editBook(this.id,this.editBookForm.value).subscribe(res=>{
      
      this.router.navigate(['viewBooks'])
    })
  }
    
  }
 
  


