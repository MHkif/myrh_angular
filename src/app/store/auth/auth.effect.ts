import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  adminLoginStart,
  adminLoginSuccess,
  loginStart,
  loginSuccess,
} from './auth.action';
import { exhaustMap, map } from 'rxjs';
import { CompanyService } from 'src/app/service/company.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private adminService: AdminService,
    private route: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.companyService.auth(action.email, action.password).pipe(
          map((data) => {
            console.log('data :', data);
            const company = this.companyService.formatCompany(data);
            this.route.navigate(['/offers']);
            return loginSuccess({ company });
          })
        );
      })
    )
  );

  adminLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminLoginStart),
      exhaustMap((action) => {
        return this.adminService.auth(action.email, action.password).pipe(
          map((data) => {
            console.log('data :', data);
            const admin = this.adminService.formatAdmin(data);
            this.route.navigate(['/offers']);
            return adminLoginSuccess({ admin });
          })
        );
      })
    )
  );
}
