import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from 'src/app/service/company.service';
import { beginRegister } from './company.action';
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { showAlert } from '../common/App.Action';

@Injectable()
export class CompanyEffect {
  constructor(
    private action$: Actions,
    private service: CompanyService,
    private route: Router
  ) {}

  _companyRegister = createEffect(() =>
    this.action$.pipe(
      ofType(beginRegister),
      exhaustMap((action) => {
        return this.service.save(action.company_data).pipe(
          map((comapny) => {
            this.route.navigate(['company/auth/login']);
            return showAlert({
              message: 'Registred Successfully',
              resultType: 'pass',
            });
          }),
          catchError((_error) =>
            of(
              showAlert({
                message: 'Registration Failed',
                resultType: 'fail',
              })
            )
          )
        );
      })
    )
  );
}
