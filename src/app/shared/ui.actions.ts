import { Action, Store } from '@ngrx/store';
import { State } from './ui.reducer';

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export class StartLoading implements Action {
    readonly type = START_LOADING;
}

export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

export type UIActions = StartLoading | StopLoading; 