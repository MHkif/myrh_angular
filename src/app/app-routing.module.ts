import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { LoginComponent } from './auth/login/login.component';
import { JobSeekerLoginComponent  } from './features/candidat/auth/login/login.component';
import { CandidatRegisterComponent } from './features/candidat/auth/register/candidat-register.component';

import { AuthGuard } from './service/auth.guard';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'company/auth/register',
    component: RegisterComponent,
  },
  {
    path: 'company/auth/login',
    component: LoginComponent,
  },
  {
    path: 'jobSeeker/auth/register',
    component: CandidatRegisterComponent,
  },
  {
    path: 'jobSeeker/auth/login',
    component: JobSeekerLoginComponent,
  },
  {
    path: 'admin/auth/login',
    component: LoginComponent,
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin/home',
    component: LoginComponent,
  },
  {
    path: 'offers',
    component: HomeComponent,
    // canActivate: [AuthGuard],
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
