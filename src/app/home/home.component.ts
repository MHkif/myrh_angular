import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Company } from '../model/company.model';
import { JOBSEEKER_AUTH_STATE_NAME } from '../store/jobseeker/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogged!: boolean | null;
  object!: Object | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe(
        (state) => (
          (this.isLogged = state.isLogged), (this.object = state.company)
        )
      );

    this.store
      .select('jobSeekerAuth')
      .subscribe(
        (state) => (
          (this.isLogged = state.isLogged), (this.object = state.jobSeeker)
        )
      );
    console.log('isLogged  : ', this.isLogged, ', Object :', this.object);
  }
}
