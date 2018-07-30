import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../models/menu.model';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import * as fromRoot from '../actions/reducer';
import * as Actions from '../actions/menu.action';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: Observable<Menu[]>;
  loading: Observable<Boolean>;

  constructor( private store: Store<AppState>) {
    this.results = this.store.select(state => state.menu);
    this.loading = this.store.select(state => state.loading);
   }

  ngOnInit() {
    
    
    
  }

}