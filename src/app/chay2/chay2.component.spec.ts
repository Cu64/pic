import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chay2Component } from './chay2.component';

describe('Chay2Component', () => {
  let component: Chay2Component;
  let fixture: ComponentFixture<Chay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chay2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
