import { Component, OnInit } from '@angular/core';  //, OnDestroy
import { Observable } from 'rxjs'; // Subscription,
import { Store } from '@ngrx/store';

import { TrainingService } from './training.service';
import * as fromTraining from './training.reducer';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {  // , OnDestroy
  ongoingTraining$: Observable<boolean>;
  // ongoingTraining = false;
  // exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
    // this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
    //   exercise => {
    //     if (exercise) {
    //       this.ongoingTraining = true;
    //     } else {
    //       this.ongoingTraining = false;
    //     }
    //   }
    // );
  }

  // ngOnDestroy() {
  //   if (this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }
  // }
}
