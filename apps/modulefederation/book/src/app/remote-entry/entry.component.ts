import { Component } from '@angular/core';

@Component({
  selector: 'monorepo-modulefederation-book-entry',
  template: `<h2>Entry component en modulefederation-book</h2>
  <ul>
    <li><a routerLink="another">Another</a></li>
    <li><a routerLink="hotel">Hotel</a></li>
    <li><a routerLink="flight">Flight</a></li>
    <li><a routerLink="transfer">Transfer</a></li>
  </ul>`,
})
export class RemoteEntryComponent {}
