import {Component} from '@angular/core';


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
