import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookedComponent } from './booked/booked.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookFlightComponent, BookedComponent, FormComponent],
  exports: [BookFlightComponent, BookedComponent, FormComponent],
})
export class BookFlightUiModule {}
