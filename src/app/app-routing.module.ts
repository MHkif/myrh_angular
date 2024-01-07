import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AccountValidationComponent } from './account-validation/account-validation.component';
import {AdminDashboardComponent} from "./features/admin/dashboard/admin-dashboard.component";


const routes: Routes = [
  {
    path: 'company/auth/register', component: RegisterComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'company/auth/login', component: LoginComponent,
    // canActivate: [AuthGuard],

  },
  {
    path: 'company/auth/confirm-account/:token',
    component: AccountValidationComponent,
  },

  {
    path: 'admin/auth/login',
    component: LoginComponent,
  },
  {
    path: 'admin/home',
    component: LoginComponent,
  },
  {
    path: 'offers',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'offers',
    pathMatch: 'full',
  },
  {
    path: 'offers/new',
    component: OfferFormComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'offers/:id',
    component: OfferDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
