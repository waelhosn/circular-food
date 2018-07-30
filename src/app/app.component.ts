import { Component,ChangeDetectionStrategy,OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './actions/reducer';
import { Search } from './actions/menu.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {


  constructor(
    private store: Store<fromRoot.State>
  ) {
   }

  ngOnInit() {
    this.store.dispatch(new Search());
  }

}
