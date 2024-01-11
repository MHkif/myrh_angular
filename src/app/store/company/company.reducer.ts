import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/auth.state';
import { company_loginSuccess } from './company.action';

// Register in App Module or appReducer

const _companyLoginReducer = createReducer(
  initialState,
  on(company_loginSuccess, (state: any, action: any) => {
    console.log('_companyAuthReducer : action : ', action);
    console.log('_companyAuthReducer : state : ', state);

    return {
      ...state,
      object: action.company,
      isLogged: true,
    };
  })
);

export function CompanyLoginReducer(state: any, action: any) {
  return _companyLoginReducer(state, action);
}
