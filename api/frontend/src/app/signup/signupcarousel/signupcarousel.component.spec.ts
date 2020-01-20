import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcarouselComponent } from './signupcarousel.component';

describe('SignupcarouselComponent', () => {
  let component: SignupcarouselComponent;
  let fixture: ComponentFixture<SignupcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupcarouselComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
