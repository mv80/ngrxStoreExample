import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

// actions string has to be uniqe thats why adding to them [] 

export enum ShoppingActionsTypes {
    ADD_ITEM = '[SHOPPING ITEM] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING ITEM] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING ITEM] Add Item Faliure',
    REMOVE_SHOPING_ITEM = '[SHOPPING ITEM] Remove Item'

}

export class AddShoppingItem implements Action  {
    readonly type = ShoppingActionsTypes.ADD_ITEM;
    constructor(public payload : ShoppingItem ){}
}
export class RemoveShoppingItem implements Action  {
    readonly type =ShoppingActionsTypes.REMOVE_SHOPING_ITEM;
    constructor(public payload : string ){}
}

export type ShoppingAction = AddShoppingItem | RemoveShoppingItem;