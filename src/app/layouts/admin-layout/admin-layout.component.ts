import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs';
import { Company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  company!: Company | null;
  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store
      .select('companyAuth')
      .subscribe(
        (state) => (
          (this.company = state.company),
          console.log('Object   : ', state.company)
        )
      );

    console.log('Company   : ', this.company);
  }
}
