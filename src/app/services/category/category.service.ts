import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api_url:string = ''

  constructor(private __http:HttpClient) {
    this.api_url = environment.api_url

   }

   fetchSubLevelCategory(catName='Grocery'):Observable<any>{
     return this.__http.post(`${this.api_url}/api/category/fetchSubLevelCategory`,{catName})
   }
}
