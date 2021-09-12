import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhaltePageComponent } from './inhalte-page.component';

describe('InhaltePageComponent', () => {
  let component: InhaltePageComponent;
  let fixture: ComponentFixture<InhaltePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhaltePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhaltePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
