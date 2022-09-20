import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookHotelComponent } from './book-hotel/book-hotel.component';
import { BookedComponent } from './booked/booked.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookHotelComponent, BookedComponent, FormComponent],
  exports: [BookHotelComponent, BookedComponent, FormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookHotelUiModule {}
