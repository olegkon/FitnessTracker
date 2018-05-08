import { Component, OnInit, state } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';  // was fromApp


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //, OnDestroy {
  loginForm: FormGroup;
  isLoading$ : Observable<boolean>; // = false;
  private loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiService: UIService, private store: Store<{ui: fromRoot.State}>) {}

  ngOnInit() {
    // this.store.subscribe(data => console.log(data));
    this.isLoading$ = this.store.select(fromRoot.getIsLoading); //was map(state => state.ui.isLoading);
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
    //  this.isLoading = isLoading;
    // });
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  // ngOnDestroy() {
  //   if (this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
  // }
}
