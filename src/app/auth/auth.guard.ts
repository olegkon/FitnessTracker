import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
 // Router,
  CanLoad,
  Route
} from '@angular/router';
import { Store } from '@ngrx/store';

import { take } from 'rxjs/operators';
// import { AuthService } from './auth.service';
import * as fromRoot from '../app.reducer';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.State>) {}  // private authService: AuthService,  private router: Router

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));  // added
    // if (this.authService.isAuth()) {  
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));  // added
    // if (this.authService.isAuth()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
}
