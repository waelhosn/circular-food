import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from "rxjs";
import { map, take, switchMap } from 'rxjs/operators';
import { Menu } from './../models/menu.model'
import 'rxjs/add/operator/map';


import * as FoodActions from "./menu.action";
import { FoodService } from "../services/food.service";



@Injectable()

export class FoodEffects {

constructor(private actions$: Actions, 
        private foodService: FoodService) {}    

// Listen for the 'SEARCH' action
 @Effect() 
searchFood$: Observable<Action> = this.actions$.pipe(
 
 ofType<FoodActions.Search>(FoodActions.SEARCH),
 switchMap(() => {
    return this.foodService.searchFood()
 .pipe(map((results: Menu[]) => new FoodActions.SearchDone({menu: results}))
                // catch(() => of(new FoodActions.FetchFoodFail()))
 );
})
);

@Effect() 
fetchFood$: Observable<Action> = this.actions$
 // Listen for the 'FETCH_FOOD' action
.ofType(FoodActions.FETCH_FOOD)
.map((action: FoodActions.FetchFood) => action.payload)
.switchMap(query => {
    return this.foodService.fetchFood(query)
    .map(food => new FoodActions.FetchFoodDone(food));
    // catch(() => of(new FoodActions.FetchFoodFail()))
});




}