import { Admin } from 'src/app/model/admin.model';
import { Company } from 'src/app/model/company.model';
import { JobSeeker } from 'src/app/model/jobSeeker.model';

export interface JobSeekerAuthState {
  jobSeeker: JobSeeker | null;
  isLogged: boolean,
}

export const initialState: JobSeekerAuthState = {
  jobSeeker: null,
  isLogged: false,

};



