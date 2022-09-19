import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
})
export class CustomersBookingsUiModule {}
