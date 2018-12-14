import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule }   from '@angular/forms';

import { KitchenService, ProviderRegistrationService, UserLoginService, UserRegistrationService } from './services'
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { KitchenComponent } from './kitchen/kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ProviderLoginComponent,
    ProviderRegistrationComponent,
    CheckoutComponent,
    UserRegistrationComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [KitchenService, ProviderRegistrationService, UserLoginService, UserRegistrationService],
  bootstrap: [AppComponent]
})

export class AppModule {}
