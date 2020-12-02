import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chay3Component } from './chay3.component';

describe('Chay3Component', () => {
  let component: Chay3Component;
  let fixture: ComponentFixture<Chay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chay3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
