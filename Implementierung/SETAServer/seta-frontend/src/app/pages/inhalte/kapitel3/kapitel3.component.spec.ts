import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel3Component } from './kapitel3.component';

describe('Kapitel3Component', () => {
  let component: Kapitel3Component;
  let fixture: ComponentFixture<Kapitel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kapitel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapitel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
