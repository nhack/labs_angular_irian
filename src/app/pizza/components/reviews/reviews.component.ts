import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Review} from '../../domain/review';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {

  @Input()
  private reviews: Review[];
  @Output()
  private addReview = new EventEmitter<Review>();

  private newReview: Review;

  constructor() {
    this.newReview = <Review>{};
  }

  public onSubmit(){
    this.newReview.createdOn = new Date().getMilliseconds();
    this.addReview.emit(this.newReview);
    this.newReview = <Review>{};
  }
}
