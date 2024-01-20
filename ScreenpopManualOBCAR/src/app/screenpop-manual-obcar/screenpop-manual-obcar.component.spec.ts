import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenpopManualOBCARComponent } from './screenpop-manual-obcar.component';

describe('ScreenpopManualOBCARComponent', () => {
  let component: ScreenpopManualOBCARComponent;
  let fixture: ComponentFixture<ScreenpopManualOBCARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenpopManualOBCARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenpopManualOBCARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
