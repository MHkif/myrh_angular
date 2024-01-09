import { AuthReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import {
  JobSeekerAuthReducer,
  JobSeekerAuthRegisterReducer,
} from './jobseeker/auth.reducer';
import { JobSeekerAuthState } from './jobseeker/auth.state';

export interface AppState {
  auth: AuthState;
  jobSeekerAuth: JobSeekerAuthState;
}

export const appReducer = {
  auth: AuthReducer,
  jobSeekerAuth: JobSeekerAuthReducer,
  JobSeekerRegisterReducer: JobSeekerAuthRegisterReducer,
};
