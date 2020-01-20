import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  gotoIssue(id: number) {
    this.router.navigate([this.router.url, id, 'details']);
  }
}
