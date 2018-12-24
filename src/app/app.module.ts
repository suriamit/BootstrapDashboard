import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';
import { RegisterComponent } from './register/register.component';
import { IntuneComponent } from './intune/intune.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComplianceComponent,
    VulnerabilityComponent,
    RegisterComponent,
    IntuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
