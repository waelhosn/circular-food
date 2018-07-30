import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer } from './actions/reducer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './actions/effects';

import { FoodService } from './services/food.service';
import { StoreService } from './services/store.service';

import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FoodResultComponent } from './food-result/food-result.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'myfoods' },
  { path: 'search', component: SearchResultsComponent },
  { path: 'search/:id', component: FoodResultComponent},
  { path: 'myfoods', component: FoodListComponent },
  { path: 'myfoods/:id', component: FoodDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'myfoods' }
];

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent,
    SearchResultsComponent,
    FoodResultComponent,
    SearchInputComponent
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({menu: reducer}),
    EffectsModule.forRoot([FoodEffects])
    
  ],
  providers: [StoreService, FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
