import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LogoutComponent],
  exports: [LogoutComponent],
})
export class MeLogoutUiModule {}
