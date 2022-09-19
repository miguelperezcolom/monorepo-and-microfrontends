import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeTransferComponent } from './conclude-transfer/conclude-transfer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConcludeTransferComponent],
  exports: [ConcludeTransferComponent],
})
export class ConcludeTransferUiModule {}
