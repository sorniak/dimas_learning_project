import { Block } from './../block/block.model';
import { Component, OnInit } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as itemUpdate from './../actions/block.actions';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  toBuyItems: Observable<Block[]>;
  constructor(private store: Store<AppState>) {
    this.toBuyItems = this.store.select('block','block');
   }
  delToBuy (payload){
    this.store.dispatch(new itemUpdate.RemoveItemAction(payload));
  }
  markToBuy (payload){
    this.store.dispatch(new itemUpdate.MarkItemAction(payload));
  }
  toggleBuyState(buyState = false) {
    buyState = !buyState;
    let background_color = buyState ? 'selected' : 'not_selected';
    return background_color;
  }  

  ngOnInit() {
  }

}

