import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDetailsComponent } from './next-details.component';

describe('NextDetailsComponent', () => {
  let component: NextDetailsComponent;
  let fixture: ComponentFixture<NextDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
