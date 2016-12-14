import {Component, Input, Inject} from '@angular/core';
import {Pizza} from '../../domain/pizza';
import {Review} from "../../domain/review";
import {PIZZA_SERVICE, PizzaService} from "../../service/pizza.service";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input()
  private pizza: Pizza;

  private tab: number;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public addReview(review: Review) {
    this.pizzaService.addReview(this.pizza, review)
      .then(() => this.pizza.reviews.push(review));
  }
}
