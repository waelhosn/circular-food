import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from "@ngrx/store";
import * as fromRoot from "../actions/reducer";
import * as Actions from "../actions/menu.action";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  item: Observable<Menu>;
  loading:  Observable<Boolean>;

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<fromRoot.State>) {}

  ngOnInit() {

    this.item = this.store.select(state => state.selectedFood);
    this.loading = this.store.select(state => state.loading);

    this.route.params
        .map(params => params.id)
        .do(id => this.store.dispatch(new Actions.GetFood(id)))
        .subscribe();
  }

  

}