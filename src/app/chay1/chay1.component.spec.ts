import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chay1Component } from './chay1.component';

describe('Chay1Component', () => {
  let component: Chay1Component;
  let fixture: ComponentFixture<Chay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
