import { PlansService } from './plans.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
