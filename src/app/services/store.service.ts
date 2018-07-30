import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Food } from '.././models/food.model';
import { Menu } from '.././models/menu.model';
import { FoodService } from '.././services/food.service';
import { Store } from "@ngrx/store";
import * as fromRoot from ".././actions/reducer";
import * as Actions from '.././actions/menu.action';

@Injectable()
export class StoreService {

  state: Observable<fromRoot.State>;
  constructor(private foodService: FoodService, private store: Store<fromRoot.State>) { 
  this.state = this.store;
  }


  searchFood() {
    this.store.dispatch(new Actions.Search());
  }

  fetchFood(id) {
    this.store.dispatch(new Actions.FetchFood(id));
  }

  getFood(id) {
    this.store.dispatch(new Actions.GetFood(id));
  }

  addBasket() {
    this.store.dispatch(new Actions.AddFood());
  }

  removeBasket(food: Food) {
    this.store.dispatch(new Actions.RemoveFood(food));
  }

}