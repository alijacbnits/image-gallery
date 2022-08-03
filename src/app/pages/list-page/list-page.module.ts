import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { FormsModule } from '@angular/forms';
import { SearchbarModule } from 'src/app/component/searchbar/searchbar.module';
import { ImgcardsModule } from 'src/app/component/imgcards/imgcards.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    //components
    ImgcardsModule,
    SearchbarModule,
    FormsModule,
    InfiniteScrollModule
    
  ]
})
export class ListPageModule { }
