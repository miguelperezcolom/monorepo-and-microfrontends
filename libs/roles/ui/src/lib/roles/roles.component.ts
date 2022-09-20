import {Component, OnInit} from '@angular/core';

class User {
  name = '';
  rol = '';
}

@Component({
  selector: 'monorepo-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit{

  items: User[] = [];

  ngOnInit(): void {

    this.items = [
      {
        name : 'Mateu',
        rol : 'Administrator'
      },
      {
        name : 'Antònia',
        rol : 'Boss'
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
