import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomersBookingsUiModule {}
