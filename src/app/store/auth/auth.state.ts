import { Admin } from 'src/app/model/admin.model';
import { Company } from 'src/app/model/company.model';

export interface AuthState {
  company: Company | null;
  isLogged: boolean | null;
}

export const initialState: AuthState = {
  company: null,
  isLogged: false,
};

export interface AdminState {
  admin: Admin | null;
}

export const adminState: AdminState = {
  admin: null,
};
