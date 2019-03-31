import { Block } from './block.model';
import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as itemUpdate from './../actions/block.actions';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor ( private store: Store <AppState> ) {}
      
  addToBuy(toBuy) {
    this.store.dispatch( new itemUpdate.AddItemAction(toBuy));
    }
  
  ngOnInit() {
  }

}
