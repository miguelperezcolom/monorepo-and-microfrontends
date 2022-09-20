import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTransferComponent } from './book-transfer/book-transfer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookTransferComponent],
  exports: [BookTransferComponent],
})
export class BookTransferUiModule {}
