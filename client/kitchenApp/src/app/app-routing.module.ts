import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'provider-login', component: ProviderLoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'checkout', component: CheckoutComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})


export class AppRoutingModule {}
