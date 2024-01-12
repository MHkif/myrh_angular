import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offer/offers/offers.component';
import { OfferCardComponent } from './offer/offer-card/offer-card.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { OfferHolderComponent } from './offer/offer-holder/offer-holder.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffect } from './store/company/company.effect';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuard } from './service/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';
import { AdminOfferListComponent } from './shared/admin/admin-offer-list/admin-offer-list.component';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './features/company/dashboard/company-dashboard.component';
import { CandidatesInsightsComponent } from './features/company/candidats-insights/candidates-insights.component';

import { JobApplicantsComponent } from './features/company/job-applicants/job-applicants.component';

import { JobSeekerNavbarComponent } from './shared/job-seeker/job-seeker-navbar/job-seeker-navbar.component';
import { JobSeekerDashboardComponent } from './features/candidat/dashboard/job-seeker-dashboard.component';
import {
  JobSeekerApplicationSocketConfigService
} from "./service/jobSeeker/job-application-config/job-seeker-application-socket-config.service";
import {AngularToastifyModule, ToastService} from "angular-toastify";
import {PaymentSuccessComponent} from "./shared/payment/payement-success/payment-success.component";
import {PaymentCancelComponent} from "./shared/payment/payement-cancel/payment-cancel.component";
import {RegisterComponent} from "./auth/company/register/register.component";
import {LoginComponent} from "./auth/company/login/login.component";
import {AdminLayoutComponent} from "./features/admin/admin-layout/admin-layout.component";
import {CandidatRegisterComponent} from "./auth/applicant/register/candidat-register.component";
import {AdminSideBarComponent} from "./features/admin/admin-side-bar/admin-side-bar.component";
import {AdminLoginComponent} from "./auth/admin/login/admin-login.component";
import {AccountValidationComponent} from "./auth/account-validation/account-validation.component";
import {JobSeekerLoginComponent} from "./auth/applicant/login/login.component";
import {appReducer} from "./store/state/app.state";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    OfferCardComponent,
    RegisterComponent,
    LoginComponent,
    AdminLayoutComponent,
    CandidatRegisterComponent,
    AdminSideBarComponent,
    NavbarComponent,
    SearchBarComponent,
    OfferHolderComponent,
    OfferFormComponent,
    LayoutComponent,
    OfferDetailComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AccountValidationComponent,
    AdminDashboardComponent,
    JobSeekerLoginComponent,
    AdminOfferListComponent,
    AuthLayoutComponent,
    CompanyDashboardComponent,
    CandidatesInsightsComponent,
    JobApplicantsComponent,
    JobSeekerNavbarComponent,
    JobSeekerDashboardComponent,
    PaymentSuccessComponent,
    PaymentCancelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    // StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    // EffectsModule.forRoot([CompanyEffect, AuthEffect, JobSeekerEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
    }),
    // Metarial
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularToastifyModule,
  ],
  providers: [
    AuthGuard,
    JobSeekerApplicationSocketConfigService,
    ToastService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
