import { Component, OnInit } from '@angular/core';
import { Company, CompanyModel } from '../../model/company.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css'],
})
export class AdminSideBarComponent implements OnInit {
  company!: Company | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe(
        (state) => (
          (this.company = state.object as Company),
          (this.isLogged = state.isLogged),
          console.log('Object : ', state.object)
        )
      );
    console.log('Company Side bar: ', this.company);
    console.log('isLogged Side bar : ', this.isLogged);
  }
}
