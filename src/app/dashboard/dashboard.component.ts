import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imgUrl = '../../assets/img/cover1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
