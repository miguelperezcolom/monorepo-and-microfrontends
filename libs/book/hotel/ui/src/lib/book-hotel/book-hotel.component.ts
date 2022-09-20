import {Component} from '@angular/core';
import '@vaadin/form-layout';
import '@vaadin/password-field';

@Component({
  selector: 'monorepo-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css'],
})
export class BookHotelComponent {

  booked = false;

  book = () => {
    this.booked = true;
  }

}
