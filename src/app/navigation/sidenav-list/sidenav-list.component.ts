import { Component, OnInit, EventEmitter, Output } from '@angular/core';  // onInit, OnDestroy
import {  Observable } from 'rxjs'; // Subscription,

import { AuthService } from '../../auth/auth.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {  // , OnDestroy
  @Output() closeSidenav = new EventEmitter<void>();
  // isAuth = false;
  isAuth$: Observable<boolean>;
  // authSubscription: Subscription;

  constructor(private authService: AuthService, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // });
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  // ngOnDestroy() {
  //   this.authSubscription.unsubscribe();
  // }
}
