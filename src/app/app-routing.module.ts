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

import { PaymentSuccessComponent } from './shared/payment/payement-success/payment-success.component';
import { PaymentCancelComponent } from './shared/payment/payement-cancel/payment-cancel.component';

import { RegisterComponent } from './auth/company/register/register.component';
import { LoginComponent } from './auth/company/login/login.component';
import { CandidatRegisterComponent } from './auth/applicant/register/candidat-register.component';
import { JobSeekerLoginComponent } from './auth/applicant/login/login.component';
import { AdminLoginComponent } from './auth/admin/login/admin-login.component';
import { MyApplicantsComponent } from './features/candidat/my-applicants/my-applicants.component';
import { OffersComponent } from './offer/offers/offers.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //    import('./modules/admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [MsalGuard, RoleGuardService],
  //   data: {
  //    requiredRole: environment.auth.roles.admin,
  //   },
  //  },

  // { path: '**', component: PageNotFoundComponent },

  // default web layout  Applicant :

  {
    path: '',
    children: [
      { path: '', redirectTo: 'offers', pathMatch: 'full' },

      {
        path: 'auth',
        children: [
          {
            path: 'register',
            component: CandidatRegisterComponent,
          },
          {
            path: 'login',
            component: JobSeekerLoginComponent,
          },
        ],
      },

      {
        path: 'dashboard',
        component: JobSeekerDashboardComponent,
        children: [
          { path: '', redirectTo: 'jobApplicants', pathMatch: 'full' },

          {
            path: 'jobApplicants',
            component: MyApplicantsComponent,
          },
        ],
      },

      {
        path: 'offers',
        component: OffersComponent,
      },

      {
        path: 'offers/:id',
        component: OfferDetailComponent,
      },
    ],
  },

  // Company Routing
  {
    path: 'company',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'auth',
        children: [
          {
            path: 'register',
            component: RegisterComponent,
          },

          {
            path: 'login',
            component: LoginComponent,
          },

          {
            path: 'confirm-account/:token',
            component: AccountValidationComponent,
          },
        ],
      },

      {
        path: 'dashboard',
        component: CompanyDashboardComponent,
        children: [
          { path: '', redirectTo: 'offers', pathMatch: 'full' },

          {
            path: 'candidates-insights',
            component: CandidatesInsightsComponent,
          },
          {
            path: 'jobApplicants',
            component: JobApplicantsComponent,
          },

          {
            path: 'offers',
            children: [
              {
                path: '',
                component: OffersComponent,
              },
              {
                path: 'new',
                component: OfferFormComponent,
              },
              {
                path: 'offers/:id',
                component: OfferDetailComponent,
              },
            ],
          },
        ],
      },
    ],
  },

  // Admin Routing
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'auth/login',
        component: AdminLoginComponent,
      },

      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        children: [
          {
            path: '',
            component: OffersComponent,
          },
          { path: '', redirectTo: '', pathMatch: 'full' },
          {
            path: 'offers',
            component: OffersComponent,
          },

          {
            path: 'offers/new',
            component: OfferFormComponent,
          },
          {
            path: 'offers/:id',
            component: OfferDetailComponent,
          },
        ],
      },
    ],
  },

  {
    path: 'payment/success',
    component: PaymentSuccessComponent,
  },
  {
    path: 'payment/cancel',
    component: PaymentCancelComponent,
  },
  {
    path: 'offers',
    component: HomeComponent,
    // canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   redirectTo: 'offers',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'offers/new',
  //   component: OfferFormComponent,
  //   // canActivate: [AuthGuard],
  // },
  // {
  //   path: 'offers/:id',
  //   component: OfferDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
