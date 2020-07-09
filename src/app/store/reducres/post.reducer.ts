import * as  PostActions from '../actions/post.actions';
import { Post } from '../models/post';
import { StateObservable } from '@ngrx/store';

export type Action = PostActions.All;


const defaultState: Post = {
    text: 'Hello i am default post',
    likes: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function postReducer(state = defaultState, action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 });
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });
        case PostActions.RESET:
            return defaultState;

    }
}