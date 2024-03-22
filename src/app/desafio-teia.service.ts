import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesafioTeiaService {

  constructor(private http:HttpClient) { }


  public apiServicoConsome(){
  return  this.http.get("https://jsonplaceholder.typicode.com/photos/");
  }
}
