import { Admin } from 'src/app/model/admin.model';
import { Company } from 'src/app/model/company.model';

export interface AuthState {
  company: Company | null;
}

export const initialState: AuthState = {
  company: null,
};

export interface LoggedState {
  isLogged: boolean | null;
}

export const initialLogging: LoggedState = {
  isLogged: false,
};

export interface AdminState {
  admin: Admin | null;
}

export const adminState: AdminState = {
  admin: null,
};
