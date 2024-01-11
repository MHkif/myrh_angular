import { createReducer, on } from '@ngrx/store';
import { adminLoginSuccess } from './admin.action';
import { initialState } from '../state/auth.state';

const _adminAuthReducer = createReducer(
  initialState,
  on(adminLoginSuccess, (state, action) => {
    console.log('_adminAuthReducer : action : ', action);
    console.log('_adminAuthReducer : state : ', state);

    return {
      ...state,
      object: action.admin,
      isLogged: true,
    };
  })
);

export function AdminLoginReducer(state: any, action: any) {
  return _adminAuthReducer(state, action);
}
