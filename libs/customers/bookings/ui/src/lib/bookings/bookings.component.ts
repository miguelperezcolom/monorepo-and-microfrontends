import {Component, OnInit} from '@angular/core';

class Booking {
  leadName = '';
  checkin = '';
  checkout = '';
  value = '';
}

@Component({
  selector: 'monorepo-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit{

  items: Booking[] = [];

  ngOnInit(): void {

    this.items = [
      {
        leadName : 'Mateu Pérez',
        checkin : '2023-04-18',
        checkout : '2023-04-22',
        value : '203.15 EUR'
      },
      {
        leadName : 'Antònia Galmés',
        checkin: '2023-11-27',
        checkout : '2023-12-02',
        value : '150.47 USD'
      }

    ];

    // Populate the grid with data
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const grid: any = document.querySelector('vaadin-grid')!;
    /*
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
      .then(res => res.json())
      .then(json => grid.items = json.result);
     */

    console.log(grid)

    grid.items = this.items;
  }
}
