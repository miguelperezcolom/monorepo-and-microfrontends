import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookedComponent } from './booked/booked.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookFlightComponent, BookedComponent],
  exports: [BookFlightComponent, BookedComponent],
})
export class BookFlightUiModule {}
