import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreenpopManualObCollectionComponent } from './sreenpop-manual-ob-collection.component';

describe('SreenpopManualObCollectionComponent', () => {
  let component: SreenpopManualObCollectionComponent;
  let fixture: ComponentFixture<SreenpopManualObCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SreenpopManualObCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SreenpopManualObCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
