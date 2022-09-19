import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftsComponent } from './drafts/drafts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DraftsComponent],
  exports: [DraftsComponent],
})
export class SalesDraftsUiModule {}
