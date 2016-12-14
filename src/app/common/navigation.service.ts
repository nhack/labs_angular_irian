import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(private _router: Router) {
  }

  openPizza(id: string) {
    this._router.navigate(['pizzas', id]);
  }

  openPizzas() {
    this._router.navigate(['pizzas']);
  }
}
