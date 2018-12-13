import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { KitchenComponent } from './kitchen/kitchen.component';


const routes: Routes = [
  { path: '', component: KitchenComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'provider-login', component: ProviderLoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'user-registration', component: UserRegistrationComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})


export class AppRoutingModule {}
