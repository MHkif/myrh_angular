import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnInit {
  isLoggedIn!: boolean | null;
  constructor(private router: Router, private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe((state) => (this.isLoggedIn = state.isLogged));
  }

  canActivate(): boolean {
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/offers'); // Redirect to home page if logged in
      return false; // Cancel navigation to the original route
    }
    this.router.navigateByUrl('/company/auth/login'); // Redirect to home page if logged in
    return true; // Allow navigation if not logged in
  }
}
