import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KitchenService} from './menu/menuServices'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [KitchenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
