import { createReducer } from '@ngrx/store';
import { companyState, initialCompanyState } from './company.state';

// Regester in App Module

const _companyReducer = createReducer(companyState);
export function companyReducer() {}

// const _companyReducer = createReducer(initialCompanyState);
// export function companyReducer(state: any, action: any) {
//   return _companyReducer(state, action);
// }
