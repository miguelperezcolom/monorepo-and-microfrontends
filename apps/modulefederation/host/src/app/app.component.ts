import { Component } from '@angular/core';
import '@vaadin/button';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle.js';
import '@vaadin/tabs';
import '@vaadin/menu-bar';
import '@vaadin/vertical-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/icon';
import '@vaadin/grid';
import '@vaadin/text-area';
import '@vaadin/select';
import '@vaadin/date-picker';
import '@vaadin/form-layout';
import '@vaadin/password-field';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GUIPO with WP5MF';

  paths = [
    '',
    'conclude',
    'sales',
    'customers',
    'roles',
    'help'
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  itemSelected = (e:any) => {
    const index = e.detail.value;
    this.router.navigate([this.paths[index]], {relativeTo:this.route});
  }

}
