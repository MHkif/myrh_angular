import { createReducer, on } from '@ngrx/store';
import { initialState, adminState } from './auth.state';
import {
  adminLoginStart,
  adminLoginSuccess,
  loginSuccess,
} from './auth.action';
import { state } from '@angular/animations';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log('action : ', action);
    return {
      ...state,
      company: action.company,
      isLogged: true,
    };
  })
);

const _adminReducer = createReducer(
  adminState,
  on(adminLoginSuccess, (state, action) => {
    console.log('action : ', action);
    return {
      ...state,
      admin: action.admin,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}

export function AdminReducer(state: any, action: any) {
  return _adminReducer(state, action);
}
