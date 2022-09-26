import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTransferComponent } from './book-transfer/book-transfer.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BookedComponent } from './booked/booked.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BookTransferComponent, FormComponent, BookedComponent],
  exports: [BookTransferComponent, FormComponent, BookedComponent],
})
export class BookTransferUiModule {}
