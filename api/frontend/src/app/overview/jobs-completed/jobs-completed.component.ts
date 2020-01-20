import { Component, OnInit } from '@angular/core';
import { JobsCompletedModalComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs-completed',
  templateUrl: './jobs-completed.component.html',
  styleUrls: ['./jobs-completed.component.scss']
})
export class JobsCompletedComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  openModal() {
    const modalRef = this.modalService.open(JobsCompletedModalComponent, { size: 'lg' });
  }
}
