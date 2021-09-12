import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kapitel5Component } from './kapitel5.component';

describe('Kapitel5Component', () => {
  let component: Kapitel5Component;
  let fixture: ComponentFixture<Kapitel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kapitel5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kapitel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
