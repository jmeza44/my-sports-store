import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SportArticle } from '../models/sport-article.model';

@Injectable({
  providedIn: 'root'
})
export class SportArticlesService {
  private sportArticlesUrl = '../../assets/store-items.json';

  constructor(private http: HttpClient) {}

  getSportArticles(): Observable<SportArticle[]> {
    return this.http.get<SportArticle[]>(this.sportArticlesUrl);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    throw error;
  }
}
