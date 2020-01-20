import { JOBS } from './../../mockdata/Jobs';
import { Job } from './../../classes/Job';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // private jobs: Job[] = [];

  constructor() {}

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }
  getJobByID(id: number): Observable<Job[]> {
    return of(JOBS);
  }
}
