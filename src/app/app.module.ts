import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//store module 
import { StoreModule} from '@ngrx/store';
//reducer 
import { simpleReducer} from './store/reducres/simple.reducer';
import  { postReducer} from './store/reducres/post.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { TutorialReducer} from './store/reducres/tutorial.reducer';
import { CreateTutorialComponent } from './create-tutorial/create-tutorial.component';
import { ReadTutorialComponent } from './read-tutorial/read-tutorial.component';
import { ShoppingReducer } from './store/reducres/shopping.reducer';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CreateTutorialComponent,
    ReadTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      post : postReducer,
      message : simpleReducer,
      tutorial : TutorialReducer,
      shopping : ShoppingReducer
    }),
    StoreDevtoolsModule.instrument({maxAge : 25 , logOnly : environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
