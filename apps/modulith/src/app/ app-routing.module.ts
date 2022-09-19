import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "@monorepo/dashboard/ui";
import {RolesComponent} from "@monorepo/roles/ui";
import {ConcludeHotelComponent} from "@monorepo/conclude/hotel/ui";
import {ConcludeFlightComponent} from "@monorepo/conclude/flight/ui";
import {ConcludeTransferComponent} from "@monorepo/conclude/transfer/ui";
import {DraftsComponent} from "@monorepo/sales/drafts/ui";
import {ApplicationsComponent} from "@monorepo/sales/applications/ui";
import {CustomersComponent} from "@monorepo/customers/customers/ui";
import {BookingsComponent} from "@monorepo/customers/bookings/ui";
import {SupportComponent} from "@monorepo/help/support/ui";
import {HelpComponent} from "@monorepo/help/help/ui";
import {ProfileComponent} from "@monorepo/me/profile/ui";
import {LogoutComponent} from "@monorepo/me/logout/ui"; // CLI imports router

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'conclude/hotel', component: ConcludeHotelComponent },
  { path: 'conclude/flight', component: ConcludeFlightComponent },
  { path: 'conclude/transfer', component: ConcludeTransferComponent },
  { path: 'sales/drafts', component: DraftsComponent },
  { path: 'sales/applications', component: ApplicationsComponent },
  { path: 'customers/customers', component: CustomersComponent },
  { path: 'customers/bookings', component: BookingsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'help/support', component: SupportComponent },
  { path: 'help/help', component: HelpComponent },
  { path: 'me/profile', component: ProfileComponent },
  { path: 'me/logout', component: LogoutComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
