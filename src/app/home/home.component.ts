import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogged!: boolean | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('logging')
      .subscribe((state) => (this.isLogged = state.isLogged));
    console.log('isLogged  : ', this.isLogged);
  }
}
