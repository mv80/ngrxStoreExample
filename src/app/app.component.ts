import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post} from './store/models/post';
import * as PostActions from './store/actions/post.actions';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './interfaces/app.state';
import { ShoppingActionsTypes, AddShoppingItem, RemoveShoppingItem } from './store/actions/shopping.actions';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    
    this.shoppingList$ = this.store.select(store => store.shopping);
  }
  title = 'my-store-app';
  message$: Observable<string>;
  post$ : Observable<Post>;
  text : string;
  shoppingList$ : Observable<ShoppingItem[]>;
newShoppingItem : ShoppingItem = {id :'', name: ''};
  constructor(private store: Store<AppState>) {
    //retrive data from store
    // this.post$ = this.store.select('post');
    // this.message$ = this.store.select('message');
  }
  spanishMessage() {
    //change state of store data 
   
    this.store.dispatch({type: 'SPANISH'})
  }
  frenchMessage() {
    //change state of store data 
    this.store.dispatch({type: 'FRENCH'})
  }

  // post 
  // editText() {
  //   this.store.dispatch(new PostActions.EditText(this.text))
  // }
  // resetPost() {
  //   this.store.dispatch(new PostActions.Reset());
  // }
  // upvote() {
  //   this.store.dispatch(new PostActions.Upvote());
  // }
  // downvote() {
  //   this.store.dispatch(new PostActions.Downvote());
  // }
  addShoppingListItem(){
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddShoppingItem(this.newShoppingItem));
    this.newShoppingItem = {id :'', name : ''};

  }
  remove(itemId : string){
    this.store.dispatch(new RemoveShoppingItem(itemId))
  }
 
}
