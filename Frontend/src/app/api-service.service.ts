import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl="http://localhost:3200/api"
  constructor(private http:HttpClient) { }
  public logout()
  {

  }
  public login(user:any)
  {
    return this.http.post<any>(`${this.apiUrl}/login`,user)
    
  }
  public register(data:any)
  {
    console.log(data)
    return this.http.post(`${this.apiUrl}/register`,data)
  }
  public getBooks()
  {
    return this.http.get(`${this.apiUrl}/booklist`)
  }
  public getBookById(id:any)
  {
    return this.http.get<any>(`${this.apiUrl}/book/${id}`)
  }
  public addBook(data:any)
  {
    return this.http.post(`${this.apiUrl}/book`,data)
  }
  
  public editBook(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/book/${id}`,data)
  }
  public deleteBook(id:any)
  {
    return this.http.delete(`${this.apiUrl}/book/${id}`)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
