import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RolesComponent],
  exports: [RolesComponent],
})
export class RolesUiModule {}
