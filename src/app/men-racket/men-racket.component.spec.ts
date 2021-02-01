import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenRacketComponent } from './men-racket.component';

describe('MenRacketComponent', () => {
  let component: MenRacketComponent;
  let fixture: ComponentFixture<MenRacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenRacketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
