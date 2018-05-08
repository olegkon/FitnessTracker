import { Component, OnInit, EventEmitter, Output } from '@angular/core'; //, OnDestroy
// import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs'; // , Subscription


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  // , OnDestroy
  @Output() sidenavToggle = new EventEmitter<void>();
  // isAuth = false;
  isAuth$: Observable<boolean>; 
  // authSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) { } 


  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    // this.authSubscription = this.authService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  // ngOnDestroy() {
  //   this.authSubscription.unsubscribe();
  // }

}
