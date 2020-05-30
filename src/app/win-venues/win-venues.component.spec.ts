import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinVenuesComponent } from './win-venues.component';

describe('WinVenuesComponent', () => {
  let component: WinVenuesComponent;
  let fixture: ComponentFixture<WinVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
