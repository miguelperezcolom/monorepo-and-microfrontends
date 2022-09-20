import {Component, OnInit} from '@angular/core';

class Application {
  leadName = '';
  checkin = '';
  checkout = '';
  value = '';
}

@Component({
  selector: 'monorepo-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit{

  items: Application[] = [];

  ngOnInit(): void {

    this.items = [
      {
        leadName : 'Mateu Pérez',
        checkin : '2023-04-18',
        checkout : '2023-04-22',
        value : '1,203.15 EUR'
      },
      {
        leadName : 'Antònia Galmés',
        checkin: '2023-11-27',
        checkout : '2023-12-02',
        value : '3,150.47 USD'
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
