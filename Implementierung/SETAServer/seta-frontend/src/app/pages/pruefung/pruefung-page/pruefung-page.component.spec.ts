import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefungPageComponent } from './pruefung-page.component';

describe('PruefungPageComponent', () => {
  let component: PruefungPageComponent;
  let fixture: ComponentFixture<PruefungPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefungPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
