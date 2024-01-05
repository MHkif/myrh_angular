import { AuthReducer, LoggingReducer } from './auth/auth.reducer';
import { AuthState, LoggedState } from './auth/auth.state';

export interface AppState {
  auth: AuthState;
  logging: LoggedState;
}

export const appReducer = {
  auth: AuthReducer,
  logging: LoggingReducer,
};
