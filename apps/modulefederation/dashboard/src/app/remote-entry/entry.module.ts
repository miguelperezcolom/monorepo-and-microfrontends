import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {DashboardUiModule} from "@monorepo/dashboard/ui";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: RemoteEntryComponent,
            },
        ]),
        DashboardUiModule,
    ],
  providers: [],
})
export class RemoteEntryModule {}
