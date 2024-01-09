import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map } from 'rxjs';
import { Company } from 'src/app/model/company.model';
import { CompanyService } from 'src/app/service/company.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  company!: Company | null;
  constructor(
    private store: Store<AppState>,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe((state) => (this.company = state.company));
    console.log('Company   : ', this.company);
  }
}
