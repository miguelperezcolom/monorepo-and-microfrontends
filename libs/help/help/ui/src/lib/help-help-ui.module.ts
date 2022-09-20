import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HelpComponent],
  exports: [HelpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelpHelpUiModule {}
