import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lau2Component } from './lau2.component';

describe('Lau2Component', () => {
  let component: Lau2Component;
  let fixture: ComponentFixture<Lau2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lau2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
