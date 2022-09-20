import {Component, OnInit} from '@angular/core';

class Draft {
  id = '';
  date = '';
}

@Component({
  selector: 'monorepo-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css'],
})
export class DraftsComponent implements OnInit{

  items: Draft[] = [];

  ngOnInit(): void {

    this.items = [
      {
        id : 'Hotel for Mateu',
        date : '2022-06-01 23:15'
      },
      {
        id : 'Flight fro Antònia',
        date : '2022-05-03 15:20'
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
