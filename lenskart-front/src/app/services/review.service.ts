import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  API_URL: string = 'http://localhost:8080/product/review';

  constructor(private http: HttpClient) { }

  public getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.API_URL + 'all');
  }

  public getReviewsByProduct(prodId:number): Observable<Review[]> {
    return this.http.get<Review[]>(this.API_URL + '/' + prodId);
  }

  public saveReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.API_URL, review);
  }
}
