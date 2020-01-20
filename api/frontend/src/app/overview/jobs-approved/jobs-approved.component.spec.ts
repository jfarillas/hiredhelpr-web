import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsApprovedComponent } from './jobs-approved.component';

describe('JobsApprovedComponent', () => {
  let component: JobsApprovedComponent;
  let fixture: ComponentFixture<JobsApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobsApprovedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
