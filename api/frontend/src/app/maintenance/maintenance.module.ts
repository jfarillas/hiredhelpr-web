import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceIssueDetailComponent } from './issue-detail/issue-detail.component';
import { MaintenanceModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MaintenanceRoutingModule],
  declarations: [MaintenanceComponent, MaintenanceIssueDetailComponent, MaintenanceModalComponent],
  entryComponents: [MaintenanceModalComponent]
})
export class MaintenanceModule {}
