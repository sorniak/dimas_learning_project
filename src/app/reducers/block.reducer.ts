import { Block } from './../block/block.model';
import { defaultBlockState } from './defaultBlockState';
import { AppState } from '../app.state';
import { ActionReducer, Action } from '@ngrx/store';
import * as itemUpdate from './../actions/block.actions';

export function addReducer(state : AppState = defaultBlockState, action:itemUpdate.Actions) : AppState {
  switch (action.type) {
    case itemUpdate.ADD_ITEM:
        return {
	  ...state, block: add(state.block, action.payload)
        }
    case itemUpdate.REMOVE_ITEM:
	return {
          ...state, block: remove(state.block, action.payload)
        }
    case itemUpdate.MARK_ITEM:
        return{
          ...state, block: mark(state.block, action.payload) 
        }
    //case itemUpdate.MAKE_QUOTE:
    //    return{
    //      ...state, block: add(state.block, action.payload)
    //    }
    default:
        return state;
    }
}

export function add(list: Block[], item: Block): Block [] {
    return list.concat([item]);
  }

export function remove(list: Block[], item: Block): Block[] {
    return list.filter((listItem) => listItem.toBuy !== item.toBuy);
  }

export function mark(list: Block[], item: Block): Block[] {
    let listWithoutDoubleItem = list.filter((listItem) => listItem.toBuy !== item.toBuy);    
    item.isBought = !item.isBought;
    return listWithoutDoubleItem.concat([item]);
  }
