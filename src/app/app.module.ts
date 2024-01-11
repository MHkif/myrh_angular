import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offer/offers/offers.component';
import { OfferCardComponent } from './offer/offer-card/offer-card.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminSideBarComponent } from './layouts/admin-side-bar/admin-side-bar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SearchBarComponent } from './layouts/search-bar/search-bar.component';
import { OfferHolderComponent } from './offer/offer-holder/offer-holder.component';
import { OfferFormComponent } from './offer/offer-form/offer-form.component';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './store/company/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffect } from './store/company/company.effect';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appReducer } from './store/app.state';
import { AUTH_STATE_NAME } from './store/auth/auth.selector';
import { AuthReducer } from './store/auth/auth.reducer';
import { AuthEffect } from './store/auth/auth.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuard } from './service/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { OfferDetailComponent } from './offer/offer-detail/offer-detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AccountValidationComponent } from './account-validation/account-validation.component';
import { CandidatRegisterComponent } from './features/candidat/auth/register/candidat-register.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';
import { AdminOfferListComponent } from './shared/admin/admin-offer-list/admin-offer-list.component';
import { CommonModule } from '@angular/common';
import { JobSeekerLoginComponent } from './features/candidat/auth/login/login.component';
import { JobSeekerEffect } from './store/jobseeker/auth.effect';
import { JobSeekerAuthReducer } from './store/jobseeker/auth.reducer';
import { CompanyDashboardComponent } from './features/company/dashboard/company-dashboard.component';
import { CandidatesInsightsComponent } from './features/company/candidats-insights/candidates-insights.component';
import { JobSeekerNavbarComponent } from './shared/job-seeker/job-seeker-navbar/job-seeker-navbar.component';
import { JobSeekerDashboardComponent } from './features/candidat/dashboard/job-seeker-dashboard.component';
import {
  JobSeekerApplicationSocketConfigService
} from "./service/jobSeeker/job-application-config/job-seeker-application-socket-config.service";

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
    JobSeekerNavbarComponent,
    JobSeekerDashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    EffectsModule.forRoot([CompanyEffect, AuthEffect, JobSeekerEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
    }),
    // Metarial
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuard,
    JobSeekerApplicationSocketConfigService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
