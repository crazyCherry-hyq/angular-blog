import { Component, OnInit } from '@angular/core';
import { articleList } from '../articleList';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  details;
  id;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.details = articleList.filter(item => item.id === this.id);
  }
}
