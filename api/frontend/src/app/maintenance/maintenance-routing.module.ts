import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';

import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceIssueDetailComponent } from './issue-detail/issue-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'maintenance', component: MaintenanceComponent, data: { title: extract('Maintenance') } },
    { path: 'maintenance/:id/details', component: MaintenanceIssueDetailComponent, pathMatch: 'full' }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MaintenanceRoutingModule {}
