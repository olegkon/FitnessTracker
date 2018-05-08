import { Action, Store} from '@ngrx/store';
import { State } from './auth.reducer';

export const SET_AUTHENICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';

export class SetAuthenticated implements Action {
    readonly type = SET_AUTHENICATED;
}

export class SetUnauthenticated implements Action {
    readonly type = SET_UNAUTHENTICATED;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated; 