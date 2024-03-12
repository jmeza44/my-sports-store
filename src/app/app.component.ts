import { Component } from '@angular/core';
import { SportArticlesService } from './services/sport-articles.service';
import { SportArticle } from './models/sport-article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sports-store';
  sportArticles: SportArticle[] = [];

  constructor(private sportArticlesService: SportArticlesService) {}

  ngOnInit(): void {
    this.getSportArticles();
  }

  getSportArticles(): void {
    this.sportArticlesService.getSportArticles()
      .subscribe(data => {
        this.sportArticles = data;
      });
  }
}
