import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, mapTo, concatMap, tap } from 'rxjs/operators';
import * as itemUpdate from '../actions/block.actions';
import { QuotesService } from './../services/quotes.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class AddItemEffect {
myQuote : any = {
    id: 1,
    quote: String,
    by: String
  }
    constructor(
        private quotesService: QuotesService,
        private actions$ : Actions
      ) {}

    quoteNow(){
     this.quotesService.getQuote().subscribe((data)=>{ 
     this.myQuote.quote = data.quotes[0].quote;
     this.myQuote.by = data.quotes[0].author;
     }, (err)=>{
       this.myQuote.quote = err;
       this.myQuote.by = err;
     })  
     return this.myQuote.quote;
      }
    @Effect({dispatch:false}) public updates$: Observable<Action> = this.actions$.pipe(
		ofType(itemUpdate.ADD_ITEM),
		tap(() => console.log(
		  this.quoteNow()
		  ))
    );
}

