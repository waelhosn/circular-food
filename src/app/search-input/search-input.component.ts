import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../actions/reducer';
import * as Actions from '../actions/menu.action';
import 'rxjs/add/operator/filter'

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

// @ViewChild('input') input: ElementRef;
    // searchControl = new FormControl('');

    constructor(private store: Store<fromRoot.State>) { }
    
    ngOnInit() { 
      this.store.dispatch(new Actions.Search());
    
    /*
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do((query: string) => this.store.dispatch(new Actions.Search(query)))
      .switch()
      .subscribe(); */

    }

}