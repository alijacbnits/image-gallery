import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imgcards',
  templateUrl: './imgcards.component.html',
  styleUrls: ['./imgcards.component.css']
})
export class ImgcardsComponent implements OnInit {
  @Input()
  imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
