import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {DashboardUiModule} from "@monorepo/dashboard/ui";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, DashboardUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
