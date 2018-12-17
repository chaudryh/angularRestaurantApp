import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule }   from '@angular/forms';

import { KitchenService, MenuService, OrderService, MenuRegistrationService, ProviderLoginService, ProviderRegistrationService, UserLoginService, UserRegistrationService } from './services'
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { ProviderRegistrationComponent } from './provider-registration/provider-registration.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MenuRegistrationComponent } from './menu-registration/menu-registration.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ProviderLoginComponent,
    ProviderRegistrationComponent,
    CheckoutComponent,
    UserRegistrationComponent,
    KitchenComponent,
    MenuRegistrationComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [KitchenService, OrderService, MenuService, MenuRegistrationService, ProviderRegistrationService, ProviderLoginService, UserLoginService, UserRegistrationService],
  bootstrap: [AppComponent]
})

export class AppModule {}
