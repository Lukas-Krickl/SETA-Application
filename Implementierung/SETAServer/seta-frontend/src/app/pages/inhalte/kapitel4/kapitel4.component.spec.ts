import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel4Component } from './kapitel4.component';

describe('Kapitel4Component', () => {
  let component: Kapitel4Component;
  let fixture: ComponentFixture<Kapitel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kapitel4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapitel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
