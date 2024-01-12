import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Company } from '../model/company.model';
import { JobSeeker } from '../model/jobSeeker.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  applicant!: JobSeeker | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('applicantAuth').subscribe(
      (state) => (
        (this.isLogged = state.isLogged),
        (this.applicant = state.applicant),
        // console.log('State :', state),
        console.log(
          'isLogged  : ',
          this.isLogged,
          ', Applicant :',
          this.applicant
        )
      )
    );
  }
}
