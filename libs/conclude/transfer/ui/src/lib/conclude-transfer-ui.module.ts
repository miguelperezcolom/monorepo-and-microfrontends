import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeTransferComponent } from './conclude-transfer/conclude-transfer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ConcludeTransferComponent],
  exports: [ConcludeTransferComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConcludeTransferUiModule {}
