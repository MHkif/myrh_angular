import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AccountValidationComponent } from './auth/account-validation/account-validation.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';
import { CompanyDashboardComponent } from './features/company/dashboard/company-dashboard.component';
import { CandidatesInsightsComponent } from './features/company/candidats-insights/candidates-insights.component';
import { JobApplicantsComponent } from './features/company/job-applicants/job-applicants.component';
import { JobSeekerDashboardComponent } from './features/candidat/dashboard/job-seeker-dashboard.component';
import { RegisterComponent } from './auth/company/register/register.component';
import { LoginComponent } from './auth/company/login/login.component';
import { CandidatRegisterComponent } from './auth/applicant/register/candidat-register.component';
import { JobSeekerLoginComponent } from './auth/applicant/login/login.component';
import { AdminLoginComponent } from './auth/admin/login/admin-login.component';
import { MyApplicantsComponent } from './features/candidat/my-applicants/my-applicants.component';

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
    path: 'jobSeeker/dashboard',
    component: JobSeekerDashboardComponent,
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
    path: 'company/auth/confirm-account/:token',
    component: AccountValidationComponent,
  },

  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin/auth/login',
    component: AdminLoginComponent,
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

  {
    path: 'company/dashboard',
    component: CompanyDashboardComponent,
    children: [
      {
        path: '',
        component: JobApplicantsComponent,
      },
      {
        path: 'candidates-insights',
        component: CandidatesInsightsComponent,
      },
      {
        path: 'jobApplicants',
        component: JobApplicantsComponent,
      },
    ],
  },
  {
    path: 'jobSeeker',
    component: JobSeekerDashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: JobSeekerDashboardComponent,
      },
      {
        path: 'jobApplicants',
        component: MyApplicantsComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
