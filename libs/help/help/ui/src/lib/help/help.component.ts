import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'monorepo-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit{

  items: any[] = [];
  answer = '';
  select: any;

  onChange = (e:any) => {
    console.log(e, this.select.value);
    this.answer = this.select.value;
  }

  ngOnInit(): void {

    this.items = [
      { label: 'Most recent first', value: 'bla bla bla bla bla bla bla bla bla bla' },
      { component: 'hr' },
      { label: 'Rating: low to high', value: 'ble ble ble ble ble' },
      { label: 'Rating: high to low', value: 'bli bli bli' },
      { component: 'hr' },
      { label: 'Price: low to high', value: 'price-asc', disabled: true },
      { label: 'Price: high to low', value: 'price-desc', disabled: true }
    ];

    // Populate the grid with data
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.select = document.querySelector('vaadin-select')!;
    /*
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
      .then(res => res.json())
      .then(json => grid.items = json.result);
     */

    console.log(this.select)

    this.select.items = this.items;

  }

}
