import { AdminLoginReducer } from '../admin/admin.reducer';
import { AuthState } from './auth.state';

import { CompanyLoginReducer } from '../company/company.reducer';
import { ApplicantAuthState } from '../applicant/auth.state';
import { applicantAuthReducer } from '../applicant/applicant.reducer';

export interface AppState {
  auth: AuthState;
  applicantAuth: ApplicantAuthState;
}

export const appReducer = {
  auth: CompanyLoginReducer,
  adminAuth: AdminLoginReducer,
  applicantAuth: applicantAuthReducer,
};
