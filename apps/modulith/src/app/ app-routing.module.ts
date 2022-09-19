import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "@monorepo/dashboard/ui";
import {RolesComponent} from "@monorepo/roles/ui"; // CLI imports router

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'roles', component: RolesComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
