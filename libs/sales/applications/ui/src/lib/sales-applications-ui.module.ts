import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications/applications.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ApplicationsComponent],
  exports: [ApplicationsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SalesApplicationsUiModule {}
