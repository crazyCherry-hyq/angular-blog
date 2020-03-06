import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ArticleForm } from '../article';
import { provinceData, cityData, countyData } from '../address';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  typeList = ['生活', '技术', '实事', '旅行'];
  provinceList = provinceData;
  cityList = [];
  countyList = [];
  // tslint:disable-next-line:max-line-length
  model = new ArticleForm(42, '', this.typeList[0], '', '', '', '', '');
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  changeProvince() {
    this.cityList = cityData[this.model.province];
  }
  changeCity() {
    this.countyList = countyData[this.model.city];
  }
  onSubmit() {
    console.warn();
  }
}
