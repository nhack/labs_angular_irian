import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {RestService} from '../../common/rest.service';
import {PizzaService} from './pizza.service';
import {Pizza} from '../domain/pizza';

@Injectable()
export class PizzaRestService extends RestService implements PizzaService {

  private _url: string = "http://pizza-store.herokuapp.com/api/pizzas";

  constructor(private _http: Http) {
    super();
  }

  protected get http(): Http {
    return this._http;
  }

  protected get url(): string {
    return this._url;
  }

  getPizzas(): Promise<Pizza[]> {
    return this.getData<Pizza>();
  }
}
