import {Pizza} from '../domain/pizza';
import {OpaqueToken} from '@angular/core';

export interface PizzaService{
  getPizzas():Promise<Pizza[]>;
}

export let PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
