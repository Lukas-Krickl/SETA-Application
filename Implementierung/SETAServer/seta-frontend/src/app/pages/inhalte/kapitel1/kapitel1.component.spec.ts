import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel1Component } from './kapitel1.component';

describe('Kapitel1Component', () => {
  let component: Kapitel1Component;
  let fixture: ComponentFixture<Kapitel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kapitel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapitel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
