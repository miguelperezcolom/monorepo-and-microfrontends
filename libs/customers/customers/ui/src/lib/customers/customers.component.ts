import {Component, OnInit} from '@angular/core';

class Person {
  firstName = '';
  lastName = '';
  email = '';
  profession = '';
}

@Component({
  selector: 'monorepo-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit{

  items: Person[] = [];

  ngOnInit(): void {

    this.items = [
      {
        firstName : 'Mateu',
        lastName : 'Pérez',
        email : 'mateu@gmail.com',
        profession : 'Student'
      },
      {
        firstName : 'Antònia',
        lastName : 'Galmés',
        email : 'antonia@gmail.com',
        profession : 'Project manager'
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
