import { Component, OnInit } from '@angular/core';  // , OnDestroy
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';  // , Subscription
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { UIService } from '../../shared/ui.service';
import * as fromRoot from '../../app.reducer';
import * as fromTraining from '../training.reducer';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {  //OnDestroy
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>; //= true;
  // private exerciseSubscription: Subscription;
  // private loadingSubscription: Subscription;

  constructor(private trainingService: TrainingService, private uiService: UIService, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading); 
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    // this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
    //   exercises => {
    //     this.exercises = exercises;
    //   }
    // );
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  // ngOnDestroy() {
  //   if (this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }
  //   if (this.loadingSubscription) {
  //     this.loadingSubscription.unsubscribe();
  //   }
  // }
}
