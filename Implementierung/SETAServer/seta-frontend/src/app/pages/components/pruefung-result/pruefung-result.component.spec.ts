import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefungResultComponent } from './pruefung-result.component';

describe('PruefungResultComponent', () => {
  let component: PruefungResultComponent;
  let fixture: ComponentFixture<PruefungResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefungResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefungResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
