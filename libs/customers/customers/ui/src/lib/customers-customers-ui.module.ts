import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomersCustomersUiModule {}
