import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import {utility} from '@vaadin/vaadin-lumo-styles/utility.js';

console.log(utility.cssText);

var sheet = document.createElement('style')
sheet.innerHTML = utility.cssText;
document.body.appendChild(sheet);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
