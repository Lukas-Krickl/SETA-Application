import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel2Component } from './kapitel2.component';

describe('Kapitel2Component', () => {
  let component: Kapitel2Component;
  let fixture: ComponentFixture<Kapitel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kapitel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapitel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
