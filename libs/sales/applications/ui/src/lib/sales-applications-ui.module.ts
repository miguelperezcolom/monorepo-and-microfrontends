import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications/applications.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApplicationsComponent],
  exports: [ApplicationsComponent],
})
export class SalesApplicationsUiModule {}
