import { ShoppingItem } from "../models/shopping-item.model";
import { ShoppingAction, ShoppingActionsTypes } from '../actions/shopping.actions';

const initailState: Array<ShoppingItem> = [

    {
        id: "5688913232323",
        name: 'Diet Coke'
    }

]

export function ShoppingReducer(state :Array<ShoppingItem> = initailState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionsTypes.ADD_ITEM:
            return [...state, action.payload]
        case ShoppingActionsTypes.REMOVE_SHOPING_ITEM:
            return state.filter(item => item.id !== action.payload );
        // case ShoppingActionsTypes.ADD_ITEM_SUCCESS:
        //     return state;
        // case ShoppingActionsTypes.ADD_ITEM_FAILURE:
        //     return state;
        default: 
        return state;



    }

}