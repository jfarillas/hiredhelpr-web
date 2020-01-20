import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceIssueDetailComponent } from './issue-detail.component';

describe('IssueDetailComponent', () => {
  let component: MaintenanceIssueDetailComponent;
  let fixture: ComponentFixture<MaintenanceIssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceIssueDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceIssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
