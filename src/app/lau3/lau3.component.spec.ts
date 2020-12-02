import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lau3Component } from './lau3.component';

describe('Lau3Component', () => {
  let component: Lau3Component;
  let fixture: ComponentFixture<Lau3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lau3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
