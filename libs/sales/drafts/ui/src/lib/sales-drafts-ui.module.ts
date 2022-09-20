import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftsComponent } from './drafts/drafts.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DraftsComponent],
  exports: [DraftsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SalesDraftsUiModule {}
