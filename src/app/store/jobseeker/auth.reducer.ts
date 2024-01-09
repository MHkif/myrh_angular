import { createReducer, on } from '@ngrx/store';
import { jobSeekerLoginSuccess, registerSuccess } from './auth.action';
import { initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(jobSeekerLoginSuccess, (state, action) => {
    return {
      ...state,
      object: action.jobSeeker,
      isLogged: action.isLogged,
    };
  })
);

const _registerReducer = createReducer(
  initialState,
  on(registerSuccess, (state, action) => {
    return {
      ...state,
      object: action.jobSeeker,
    };
  })
);

export function JobSeekerAuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}

export function JobSeekerAuthRegisterReducer(state: any, action: any) {
  return _registerReducer(state, action);
}
