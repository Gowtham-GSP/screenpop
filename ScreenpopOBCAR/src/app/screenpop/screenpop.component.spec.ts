import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenpopComponent } from './screenpop.component';

describe('ScreenpopComponent', () => {
  let component: ScreenpopComponent;
  let fixture: ComponentFixture<ScreenpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenpopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
