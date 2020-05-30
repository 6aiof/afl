import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostGamesComponent } from './lost-games.component';

describe('LostGamesComponent', () => {
  let component: LostGamesComponent;
  let fixture: ComponentFixture<LostGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
