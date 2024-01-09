import { createAction, props } from '@ngrx/store';
import { JobSeeker } from 'src/app/model/jobSeeker.model';

export const JOBSEEKER_LOGIN_START = '[jobSeekerAuth] jobSeeker login start';
export const JOBSEEKER_LOGIN_SUCCESS =
  '[jobSeekerAuth] jobSeeker login success';
export const JOBSEEKER_LOGIN_FAIL = '[jobSeekerAuth] jobSeeker login fail';

export const JOBSEEKER_SIGNUP_START = '[jobSeekerAuth] jobSeeker sign up start';
export const JOBSEEKER_SIGNUP_SUCCESS =
  '[jobSeekerAuth] jobSeeker sign up success';
export const JOBSEEKER_SIGNUP_FAIL = '[jobSeekerAuth] jobSeeker sign up fail';

// LOGIN
export const jobSeekerStartLogin = createAction(
  JOBSEEKER_LOGIN_START,
  props<{ email: string; password: string }>()
);

export const jobSeekerLoginSuccess = createAction(
  JOBSEEKER_LOGIN_SUCCESS,
  props<{ jobSeeker: JobSeeker; isLogged: boolean }>()
);

//  SIGN UP

export const registerStart = createAction(
  JOBSEEKER_SIGNUP_START,
  props<{ jobSeeker: JobSeeker }>()
);

export const registerSuccess = createAction(
  JOBSEEKER_SIGNUP_SUCCESS,
  props<{ jobSeeker: JobSeeker }>()
);
