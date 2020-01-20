import { Component, OnInit } from '@angular/core';
import { JOBS } from '@app/mockdata/Jobs';

@Component({
  selector: 'app-jobs-pending',
  templateUrl: './jobs-pending.component.html',
  styleUrls: ['./jobs-pending.component.scss']
})
export class JobsPendingComponent implements OnInit {
  jobs = JOBS;

  constructor() {}

  ngOnInit() {}
}
