import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@monorepo/dashboard/ui';
import { RolesComponent } from '@monorepo/roles/ui';
import { ConcludeHotelComponent } from '@monorepo/conclude/hotel/ui';
import { ConcludeFlightComponent } from '@monorepo/conclude/flight/ui';
import { ConcludeTransferComponent } from '@monorepo/conclude/transfer/ui';
import { DraftsComponent } from '@monorepo/sales/drafts/ui';
import { ApplicationsComponent } from '@monorepo/sales/applications/ui';
import { CustomersComponent } from '@monorepo/customers/customers/ui';
import { BookingsComponent } from '@monorepo/customers/bookings/ui';
import { SupportComponent } from '@monorepo/help/support/ui';
import { HelpComponent } from '@monorepo/help/help/ui';
import { ProfileComponent } from '@monorepo/me/profile/ui';
import { LogoutComponent } from '@monorepo/me/logout/ui';
import { MenuComponent as ConcludeMenuComponent } from '@monorepo/conclude/menu/ui'; // CLI imports router
import { MenuComponent as SalesMenuComponent } from '@monorepo/sales/menu/ui'; // CLI imports router
import { MenuComponent as CustomersMenuComponent } from '@monorepo/customers/menu/ui'; // CLI imports router
import { MenuComponent as HelpMenuComponent } from '@monorepo/help/menu/ui';
import { BookHotelComponent } from '@monorepo/book/hotel/ui';
import { BookFlightComponent } from '@monorepo/book/flight/ui';
import { BookTransferComponent } from '@monorepo/book/transfer/ui'; // CLI imports router

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'book/hotel', component: BookHotelComponent },
  { path: 'book/flight', component: BookFlightComponent },
  { path: 'book/transfer', component: BookTransferComponent },
  { path: 'conclude', component: ConcludeMenuComponent },
  { path: 'conclude/hotel', component: ConcludeHotelComponent },
  { path: 'conclude/flight', component: ConcludeFlightComponent },
  { path: 'conclude/transfer', component: ConcludeTransferComponent },
  { path: 'sales', component: SalesMenuComponent },
  { path: 'sales/drafts', component: DraftsComponent },
  { path: 'sales/applications', component: ApplicationsComponent },
  { path: 'customers', component: CustomersMenuComponent },
  { path: 'customers/customers', component: CustomersComponent },
  { path: 'customers/bookings', component: BookingsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'help', component: HelpMenuComponent },
  { path: 'help/support', component: SupportComponent },
  { path: 'help/help', component: HelpComponent },
  { path: 'me/profile', component: ProfileComponent },
  { path: 'me/logout', component: LogoutComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
