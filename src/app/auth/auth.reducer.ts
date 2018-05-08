import { Action } from '@ngrx/store';
import { AuthActions, SET_AUTHENICATED, SET_UNAUTHENTICATED } from "./auth.actions";
import { state } from '@angular/core/src/animation/dsl';

export interface State {
    isAuthenticated: boolean;
}


const initialState: State = {
    isAuthenticated: false
};


export function authReducer(state = initialState, action: AuthActions) {
    switch(action.type) {
        case SET_AUTHENICATED:
            return {
                isAuthenticated: true
            };
        case SET_UNAUTHENTICATED:
            return {
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export const getIsAuth = (state: State) => state.isAuthenticated;