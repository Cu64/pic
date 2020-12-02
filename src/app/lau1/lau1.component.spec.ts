import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lau1Component } from './lau1.component';

describe('Lau1Component', () => {
  let component: Lau1Component;
  let fixture: ComponentFixture<Lau1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lau1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
