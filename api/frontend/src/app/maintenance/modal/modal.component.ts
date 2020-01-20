import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class MaintenanceModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
