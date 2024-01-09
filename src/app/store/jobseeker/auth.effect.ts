import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs';
import { CompanyService } from 'src/app/service/company.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  jobSeekerLoginSuccess,
  jobSeekerStartLogin,
  registerStart,
  registerSuccess,
} from './auth.action';
import { JobSeekerService } from 'src/app/job-seeker.service';

@Injectable()
export class JobSeekerEffect {
  constructor(
    private actions$: Actions,
    private jobSeekerService: JobSeekerService,
    private route: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(jobSeekerStartLogin),
      exhaustMap((action) => {
        return this.jobSeekerService.auth(action.email, action.password).pipe(
          map((data) => {
            console.log('data :', data);
            const jobSeeker = this.jobSeekerService.jobSeekerMapper(data);
            this.route.navigate(['/offers']);
            return jobSeekerLoginSuccess({
              jobSeeker: jobSeeker,
              isLogged: true,
            });
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerStart),
      exhaustMap((action) => {
        return this.jobSeekerService.save(action.jobSeeker).pipe(
          map((jobSeeker) => {
            this.route.navigate(['jobSeeker/auth/login']);
            return registerSuccess({
              jobSeeker: jobSeeker,
            });
          })
        );
      })
    )
  );
}
