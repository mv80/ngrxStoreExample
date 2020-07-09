import { Action } from '@ngrx/store';
export const EDIT_TEXT = '[Post] EDIT';
export const UPVOTE = '[Post] UPVOTE';
export const DOWNVOTE = '[Post] DOWNVOTE';
export const RESET = '[Post] RESET';

export class EditText implements Action  {
    readonly type = EDIT_TEXT;
    constructor( public payload : string){}

}
export class Upvote implements Action {
readonly type = UPVOTE;
}
export class Downvote implements Action {
readonly type = DOWNVOTE;
}

export class Reset implements Action {
readonly type = RESET;
}
export type All = Upvote | Downvote | Reset | EditText;