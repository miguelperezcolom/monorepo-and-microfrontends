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
export class AppComponent implements OnInit {

  title = 'GUIPO';
  paths = [
    '',
    'conclude',
    'sales',
    'customers',
    'roles',
    'help'
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const sideNavigation: any = document.querySelector("ui5-side-navigation")!;
    document.querySelector("#startButton")?.addEventListener("click", event => sideNavigation.collapsed = !sideNavigation.collapsed);

  }

  itemSelected = (e:any) => {
      const index = e.detail.value;
      this.router.navigate([this.paths[index]], {relativeTo:this.route});
  }

}
