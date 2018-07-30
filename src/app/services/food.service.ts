import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { map, take } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Food } from '../models/food.model';
import { Menu } from '../models/menu.model';
@Injectable()
export class FoodService {
  // apiKey: string;

  constructor(private http: Http) { 
    // this.apiKey = 'XdagYlZrqyQtcLVstZl5fleZfzgFqK3ukMtWkPpZ';

  }

  searchFood(): Observable<Menu[]> {
    const url = 'https://my-json-server.typicode.com/waelhosn/Circular/menu';
    // const params: string = [
    //   `q=${query}`,
    //   `sort=r`, // sort by relevance 
    //   `max=25`, // maximum number of results
    //   `offset=0`, // beginning row in the result set to begin
    //   `ds=Standard%20Reference`, // 'Standard Reference' or 'Branded Food Products
    //   `api_key=${this.apiKey}` // Your api key
    // ].join('&');

    // const queryUrl = `${url}${params}`;

    return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => {return res.json()})
                         
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
    // return this.http.get(url).pipe(map((response: Response) =>
    //   response.json().list ? response.json().list.item.map(item => {
    //     console.log("Item id: " + item.id);
    //     console.log("Item name: " + item.name);
    //     console.log("Item price: " + item.price);
    //     return new Menu(item);
    //   })
    // : []));
  }

  fetchFood(query: string): Observable<Food> {
    const url = 'https://my-json-server.typicode.com/waelhosn/Circular/menu';
    // const params: string = [
    //   `ndbno=${query}`,
    //   `nutrients=255`, // Water
    //   `nutrients=208`, // Energy
    //   `nutrients=203`, // Protein
    //   `nutrients=204`, // Total lipid
    //   `nutrients=205`, // Carbohydrate
    //   `nutrients=268`, // Energy
    //   `nutrients=269`, // Sugars
    //   `nutrients=291`, // Fiber
    //   `api_key=${this.apiKey}`
    // ].join('&');

    // const queryUrl = `${url}${params}`;

    return this.http.get(url)
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError))
  }

  private extractData(res: Response): Food {
    const body = res.json().report.foods[0];
    return new Food(body);
  }

  private handleError(error: Response | any) {
    let errorMsg: string;
    if(error instanceof Response) {
      const body = error.json() ||  '';
      const err = body.error ||  JSON.stringify(body);
      errorMsg = err;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMsg);
  }

  }


