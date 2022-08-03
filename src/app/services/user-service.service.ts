import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getData(searchText:string,page:number) {
    let url = 'https://pixabay.com/api/?key=28430660-d6ef5529c78e1040f8b94faab&q='+searchText+'&image_type=photo&pretty=true&page='+page;
    return this.http.get(url);
  }
}
