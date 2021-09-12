import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortschrittPageComponent } from './fortschritt-page.component';

describe('FortschrittPageComponent', () => {
  let component: FortschrittPageComponent;
  let fixture: ComponentFixture<FortschrittPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortschrittPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortschrittPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
