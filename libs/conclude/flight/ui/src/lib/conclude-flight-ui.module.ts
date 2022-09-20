import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeFlightComponent } from './conclude-flight/conclude-flight.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ConcludeFlightComponent],
  exports: [ConcludeFlightComponent],
})
export class ConcludeFlightUiModule {}
