import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    OfferCardComponent,
    RegisterComponent,
    LoginComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    AdminSideBarComponent,
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
