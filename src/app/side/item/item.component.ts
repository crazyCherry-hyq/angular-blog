import { Component, OnInit } from '@angular/core';
import { slideList } from '../sildeList';

@Component({
  selector: 'app-side-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class SideItemComponent implements OnInit {
  slideList = slideList;
  showSide =  false;
  constructor() { }

  ngOnInit(): void {
  }
  operateBtn(): void {
    this.showSide = !this.showSide;
  }

}
