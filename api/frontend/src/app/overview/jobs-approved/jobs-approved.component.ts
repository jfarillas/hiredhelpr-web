import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-jobs-approved',
  templateUrl: './jobs-approved.component.html',
  styleUrls: ['./jobs-approved.component.scss']
})
export class JobsApprovedComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
  }
}
