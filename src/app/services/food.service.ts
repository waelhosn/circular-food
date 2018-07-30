import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { map, take } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


import { Menu } from '../models/menu.model';
@Injectable()
export class FoodService {

  constructor(private http: Http) { 

  }

  searchFood(): Observable<Menu[]> {
    const url = 'https://my-json-server.typicode.com/waelhosn/Circular/menu';

    return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => {return res.json()})
                         
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
    
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


