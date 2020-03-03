import { Component, OnInit } from '@angular/core';
import { slideList } from '../sildeList';

@Component({
  selector: 'app-side-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  slideList = slideList;
  constructor() { }

  ngOnInit(): void {
  }

}
