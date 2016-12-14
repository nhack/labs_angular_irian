import {Component, Input} from '@angular/core';
import {Review} from './review';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  private reviews: Review[];

  private newReview: Review;

  constructor() {
    this.newReview = <Review>{};
  }

  public onSubmit(){
    this.newReview.createdOn = new Date().getMilliseconds();
    this.reviews.push(this.newReview);
    this.newReview = <Review>{};
  }
}
