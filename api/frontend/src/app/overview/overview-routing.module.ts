import { JobsCompletedComponent } from './jobs-completed/jobs-completed.component';
import { JobsPendingComponent } from './jobs-pending/jobs-pending.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { OverviewComponent } from './overview.component';
import { JobsApprovedComponent } from './jobs-approved/jobs-approved.component';
import { IssuesCleaningComponent } from './issues-cleaning/issues-cleaning.component';
import { IssueDetailComponent } from './issues-cleaning/issue-detail/issue-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'overview',
      children: [
        { path: '', component: OverviewComponent, pathMatch: 'full' },
        { path: 'jobs-approved', component: JobsApprovedComponent },
        { path: 'jobs-pending', component: JobsPendingComponent },
        { path: 'jobs-completed', component: JobsCompletedComponent, pathMatch: 'full' },
        { path: 'issues-cleaning', component: IssuesCleaningComponent, pathMatch: 'full' },
        { path: 'issues-cleaning/:id/details', component: IssueDetailComponent, pathMatch: 'full' }
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OverviewRoutingModule {}
