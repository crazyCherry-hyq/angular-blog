import { Component, OnInit } from '@angular/core';
import { articleList } from '../articleList';

@Component({
  selector: 'app-article-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  articleList = articleList;
  constructor() { }

  ngOnInit(): void {
  }

}
