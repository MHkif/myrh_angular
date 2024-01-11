import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogged!: boolean;
  object!: Object | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe(
      (state) => (
        (this.isLogged = state.isLogged),
        (this.object = state.object),
        // console.log('State :', state),
        console.log('isLogged  : ', this.isLogged, ', Object :', this.object)
      )
    );

  }
}
