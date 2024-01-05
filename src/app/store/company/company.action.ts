import { createAction, props } from '@ngrx/store';
import { Company } from 'src/app/model/company.model';

export const BEGIN_REGISTER = '[auth] begin register';
export const beginRegister = createAction( BEGIN_REGISTER, props<{ company_data: Company }>());
