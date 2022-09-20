import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support/support.component';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SupportComponent, FormComponent, ThanksComponent],
  exports: [SupportComponent, FormComponent, ThanksComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelpSupportUiModule {}
