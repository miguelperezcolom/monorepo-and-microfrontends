import {AfterViewInit, Component, OnInit} from '@angular/core';
import '@vaadin/button';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle.js';
import '@vaadin/tabs';
import '@vaadin/menu-bar';
import '@vaadin/vertical-layout';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const sideNavigation: any = document.querySelector("ui5-side-navigation")!;
    document.querySelector("#startButton")?.addEventListener("click", event => sideNavigation.collapsed = !sideNavigation.collapsed);

  }

  title = 'Modulith';
  secTitle = 'Angular based SPA';

  ngAfterViewInit = () => {
    console.log('hola!')
  }

  paths = [
    '',
    'conclude/hotel',
    'sales/drafts',
    'customers/bookings',
    'roles',
    'help/help'
  ];

  itemSelected = (e:any) => {
      const index = e.detail.value;
      this.router.navigate([this.paths[index]], {relativeTo:this.route});
  }

}
