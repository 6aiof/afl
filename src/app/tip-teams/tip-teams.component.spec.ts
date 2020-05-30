import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipTeamsComponent } from './tip-teams.component';

describe('TipTeamsComponent', () => {
  let component: TipTeamsComponent;
  let fixture: ComponentFixture<TipTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
