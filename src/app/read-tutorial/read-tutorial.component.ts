import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../store/models/tutorial.model';
import { AppState } from '../interfaces/app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../store/actions/tutorial.actions';


@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.scss']
})
export class ReadTutorialComponent implements OnInit {
  tutorials : Observable<Tutorial[]>
  constructor(private store : Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }
  remove(index){
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

}
