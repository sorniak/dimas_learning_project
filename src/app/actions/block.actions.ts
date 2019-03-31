import { Action } from '@ngrx/store';
import { Block } from './../block/block.model';

export const ADD_ITEM = '[Main block compoment] Add item';
export const REMOVE_ITEM = '[Display compoment] Remove item';
export const MARK_ITEM = '[Display compoment] Mark item';
export const MAKE_QUOTE = '[Main block compoment] Make A Quote';

export class AddItemAction implements Action {
  type = ADD_ITEM;
  constructor(public payload: Block ) {}
} 

export class RemoveItemAction implements Action {
  type = REMOVE_ITEM;
  constructor(public payload: Block ) {}
}

export class MarkItemAction implements Action {
  type = MARK_ITEM;
  constructor(public payload: Block ) {}
}

export class MakeQuoteAction implements Action { //not used
  type = MAKE_QUOTE;
  constructor(public payload: Block[]) {}
}

export type Actions = 
| AddItemAction
| RemoveItemAction
| MarkItemAction  
