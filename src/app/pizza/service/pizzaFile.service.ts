import {Injectable} from '@angular/core';

import {PizzaService} from './pizza.service';
import {Pizza} from '../domain/pizza';
import {PIZZAS} from '../domain/data';

@Injectable()
export class PizzaFileService implements PizzaService {
  getPizzas():Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }
}
