import {AfterViewInit, Component, OnInit} from '@angular/core';
import '@vaadin/button';
import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle.js';
import '@vaadin/tabs';
import '@vaadin/menu-bar';
import '@vaadin/vertical-layout';
import "@ui5/webcomponents-fiori/dist/ShellBar"; // ui5-button
import "@ui5/webcomponents-fiori/dist/Bar"; // ui5-button
import "@ui5/webcomponents-fiori/dist/SideNavigation"; // ui5-button
import "@ui5/webcomponents-fiori/dist/SideNavigationItem"; // ui5-button
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem"; // ui5-button
import "@ui5/webcomponents/dist/Button"; // ui5-button
import "@ui5/webcomponents/dist/Label"; // ui5-button
import "@ui5/webcomponents/dist/Icon"; // ui5-button
import "@ui5/webcomponents-icons/dist/group";
import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/action-settings";
import "@ui5/webcomponents-icons/dist/flight";
import "@ui5/webcomponents-icons/dist/chain-link";
import "@ui5/webcomponents-icons/dist/sys-help";
import "@ui5/webcomponents-icons/dist/menu";
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

  itemSelected = (e:any) => {
    if (e.detail.item.dataset.path != undefined) {
      this.router.navigate([e.detail.item.dataset.path], {relativeTo:this.route});
    }
  }

}
