import { createEntityAdapter } from '@ngrx/entity';
import { Company, CompanyModel } from 'src/app/model/company.model';

export const CompanyAdapter = createEntityAdapter<Company>();
export const initialCompanyState: CompanyModel =
  CompanyAdapter.getInitialState();

export const companyState: Company = {
  id: null,
  name: null,
  email: null,
  password: null,
  image: null,
  enabled: null,
};
