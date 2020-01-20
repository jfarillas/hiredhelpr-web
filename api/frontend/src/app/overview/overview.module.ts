import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { JobsPendingComponent } from './jobs-pending/jobs-pending.component';
import { JobsApprovedComponent } from './jobs-approved/jobs-approved.component';
import { IssuesCleaningComponent } from './issues-cleaning/issues-cleaning.component';
import { IssueDetailComponent } from './issues-cleaning/issue-detail/issue-detail.component';
import { ModalComponent } from './jobs-approved/modal/modal.component';
import { JobService } from './_services/job.service';
import { JobsCompletedComponent } from './jobs-completed/jobs-completed.component';
import { JobsCompletedModalComponent } from './jobs-completed/modal/modal.component';

@NgModule({
  imports: [CommonModule, TranslateModule, OverviewRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    OverviewComponent,
    JobsApprovedComponent,
    JobsPendingComponent,
    IssuesCleaningComponent,
    IssueDetailComponent,
    ModalComponent,
    JobsCompletedModalComponent,
    JobsCompletedComponent
  ],
  providers: [JobService],
  entryComponents: [ModalComponent, JobsCompletedModalComponent]
})
export class OverviewModule {}
