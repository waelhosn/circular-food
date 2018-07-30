import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Menu } from '../models/menu.model';

// True while fetching data from API
export const LOADING = 'Food Load';

// Searching Food via Food Search API
export const SEARCH = 'Food Search';
export const SEARCH_DONE = 'Food Search Done';

// Getting Food Details from My-Food-list
export const GET_FOOD = 'Get Food';





export class Search implements Action {
    readonly type = SEARCH;
    constructor() { };
}

export class SearchDone implements Action {
    readonly type = SEARCH_DONE;
    constructor(public payload: {menu:Menu[]}) { };
}

export class GetFood implements Action {
    readonly type = GET_FOOD;
    constructor(public payload: string) {}
}




export type Actions =   Search | SearchDone  | GetFood;