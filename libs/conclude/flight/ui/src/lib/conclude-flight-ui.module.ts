import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeFlightComponent } from './conclude-flight/conclude-flight.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConcludeFlightComponent],
  exports: [ConcludeFlightComponent],
})
export class ConcludeFlightUiModule {}
