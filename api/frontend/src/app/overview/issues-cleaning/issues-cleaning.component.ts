import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-cleaning',
  templateUrl: './issues-cleaning.component.html',
  styleUrls: ['./issues-cleaning.component.scss']
})
export class IssuesCleaningComponent {
  constructor(private router: Router) {}

  gotoIssue(id: number) {
    this.router.navigate([this.router.url, id, 'details']);
  }
}
