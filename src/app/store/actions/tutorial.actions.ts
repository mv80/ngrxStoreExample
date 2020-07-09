import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

//types for the action
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'; 
//define actions
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload : Tutorial){}
} 
export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload : number){
        
    }
} 
//export actions in order to use it in reducer 
export type Actions = AddTutorial | RemoveTutorial;