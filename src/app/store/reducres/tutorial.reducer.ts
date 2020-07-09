import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';


const initialState: Tutorial = {
    name: 'Initail Tutorail',
    url: 'http://google.com'
}
//reducer  takes initail state , action
export function TutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            const newState = state.filter((tutorial, index) => index !== action.payload);
            return newState;
        default:
            return state;


    }
}
