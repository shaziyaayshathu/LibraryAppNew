import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  books:any=[]
  constructor(private api:ApiServiceService,private router:Router){}

  ngOnInit():void{
    this.viewBooks();
  }

  viewBooks(){
    this.api.getBooks().subscribe(res=>{
      console.log(res)
      this.books=res;

    })

  }
  editBook(id:any){
   // this.api.editBook(id,books[0])
   //console.log(this.books[0]._id)
   this.router.navigate(['editBook'],
   {queryParams:{selected:id}}
   )

  }
  deleteBook(id:any){
    
   this.api.deleteBook(id).subscribe(res=>{
   this.api.getBooks().subscribe(resp=>{
    this.books=resp
   })
   // this.router.navigate(['viewBooks'])
    })
  }

}
