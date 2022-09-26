import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {DashboardUiModule} from "@monorepo/dashboard/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      {initialNavigation: 'enabledBlocking'}
    ),
    DashboardUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
