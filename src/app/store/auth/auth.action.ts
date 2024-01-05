import { createAction, props } from '@ngrx/store';
import { Admin } from 'src/app/model/admin.model';
import { Company } from 'src/app/model/company.model';

export const ADMIN_LOGIN_START = '[auth/admin] login start';
export const ADMIN_LOGIN_SUCCESS = '[auth/admin] login success';

export const LOGIN_START = '[auth] login start';
export const LOGIN_SUCCESS = '[auth] login success';
export const LOGIN_FAIL = '[auth] login fail';

export const SIGNUP_START = '[auth] sign up start';
export const SIGNUP_SUCCESS = '[auth] sign up success';
export const SIGNUP_FAIL = '[auth] sign up fail';

export const adminLoginStart = createAction(
  ADMIN_LOGIN_START,
  props<{ email: string; password: string }>()
);
export const adminLoginSuccess = createAction(
  ADMIN_LOGIN_SUCCESS,
  props<{ admin: Admin }>()
);

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ company: Company }>()
);

export const signUpStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signUpSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ company: Company }>()
);
