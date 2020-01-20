import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesCleaningComponent } from './issues-cleaning.component';

describe('IssuesCleaningComponent', () => {
  let component: IssuesCleaningComponent;
  let fixture: ComponentFixture<IssuesCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssuesCleaningComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
