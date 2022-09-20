import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeHotelComponent } from './conclude-hotel/conclude-hotel.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ConcludeHotelComponent],
  exports: [ConcludeHotelComponent],
})
export class ConcludeHotelUiModule {}
