import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RolesComponent],
  exports: [RolesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RolesUiModule {}
