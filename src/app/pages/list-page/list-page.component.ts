import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import {UserService} from '../../services/user-service.service';



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  data:any;
  pageNo: number = 1;
  searchKey: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private user: UserService) {
    
   }

  ngOnInit(): void {
    this.user.getData('',this.pageNo).subscribe((data:any)=>{
      console.warn(data);
      this.data=data?.hits;
    })
  }

  onImageSearch(value: any) {
    this.pageNo = 1;
    this.searchKey = value;
    this.user.getData(this.searchKey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.hits;
    })
  }

  // setNextPage() {
  //   console.log('load more');
  //   this.pageNo ++;
  //   this.user.getData(this.searchKey,this.pageNo).subscribe((data:any)=>{
  //     this.data=data?.hits;
  //   })
  // }

  // setPrevPage() {
  //   console.log('load more');
  //   this.pageNo --;
  //   this.user.getData(this.searchKey,this.pageNo).subscribe((data:any)=>{
  //     this.data=data?.hits;
  //   })
  // }

  onScroll() {
    this.pageNo = this.pageNo + 1;
    const prevdata = [...this.data];
    this.user.getData(this.searchKey,this.pageNo).subscribe((data:any)=>{
          this.data=prevdata.concat(data?.hits); 
          console.log("data", this.data);
    })
    console.log(this.pageNo);
  
 
}
}

