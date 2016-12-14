import {Injectable} from '@angular/core';

import {PizzaService} from './pizza.service';
import {Pizza} from '../domain/pizza';
import {Review} from '../domain/review';
import {PIZZAS} from '../domain/data';

@Injectable()
export class PizzaFileService implements PizzaService {
  getPizzas():Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza>{
    throw new Error('addReview not supported for PizzaFileService');
  }
}
