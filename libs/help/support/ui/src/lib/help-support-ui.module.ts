import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SupportComponent],
  exports: [SupportComponent],
})
export class HelpSupportUiModule {}
