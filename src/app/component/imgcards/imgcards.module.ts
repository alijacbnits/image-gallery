import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgcardsComponent } from './imgcards.component';



@NgModule({
  declarations: [
    ImgcardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImgcardsComponent
  ]
})
export class ImgcardsModule { }
