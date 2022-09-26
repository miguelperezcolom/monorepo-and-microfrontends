import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import {BookHotelComponent} from "@monorepo/book/hotel/ui";
import {AnotherEntryComponent} from "./anotherentry.component";
import {BookFlightComponent} from "@monorepo/book/flight/ui";
import {BookTransferComponent} from "@monorepo/book/transfer/ui";

@NgModule({
  declarations: [RemoteEntryComponent, AnotherEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
      {
        path: 'another',
        component: AnotherEntryComponent,
      },
      {
        path: 'hotel',
        component: BookHotelComponent,
      },
      {
        path: 'flight',
        component: BookFlightComponent,
      },
      {
        path: 'transfer',
        component: BookTransferComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
