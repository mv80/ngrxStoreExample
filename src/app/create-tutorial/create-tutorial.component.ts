import { Component, OnInit } from '@angular/core';
import { AppState } from '../interfaces/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../store/models/tutorial.model';
import * as TutorialActions from '../store/actions/tutorial.actions';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.scss']
})
export class CreateTutorialComponent implements OnInit {
   tutorial : Observable<Tutorial>
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
  }
  addTutorial(name, url){
    this.store.dispatch(new TutorialActions.AddTutorial({ name : name, url :url}));
  }

}
