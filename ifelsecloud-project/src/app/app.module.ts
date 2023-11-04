import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HNavbarComponent } from './components/h-navbar/h-navbar.component';
import { BOveComponent } from './components/i-body/b-ove/b-ove.component';
import { IBodyComponent } from './components/i-body/i-body.component';
import { OrderComponent } from './components/i-body/order/order.component';
import { SStstComponent } from './components/i-body/s-stst/s-stst.component';
import { SavingPComponent } from './components/i-body/saving-p/saving-p.component';
import { TProComponent } from './components/i-body/t-pro/t-pro.component';
import { URegComponent } from './components/i-body/u-reg/u-reg.component';
import { VNavbarComponent } from './components/v-navbar/v-navbar.component';

// For dynamic progressbar demo
@NgModule({
  declarations: [
    AppComponent,
    VNavbarComponent,
    HNavbarComponent,
    IBodyComponent,
    SavingPComponent,
    OrderComponent,
    URegComponent,
    SStstComponent,
    BOveComponent,
    TProComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
