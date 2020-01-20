import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { MaintenanceModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class MaintenanceIssueDetailComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  openModal() {
    const modalRef = this.modalService.open(MaintenanceModalComponent, { windowClass: 'myCustomSizeModalClass' });
  }
}
